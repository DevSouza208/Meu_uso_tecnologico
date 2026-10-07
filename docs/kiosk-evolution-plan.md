
# Meu Uso Tecnológico — Plano de Evolução do Quiosque

> Documento de planejamento da evolução do Meu Uso Tecnológico a partir da versão de quiosque usada em eventos.
>
> Esta branch é experimental e deriva de **mostra-cultural-quiosque**. O objetivo é documentar e desenvolver a próxima arquitetura sem alterar a versão estável.

---

## 1. Visão do produto

O **Meu Uso Tecnológico** começa como uma experiência interativa para eventos, mas deve evoluir para uma plataforma reutilizável por professores, escolas e eventos diferentes.

O questionário permanece padronizado. O que muda por evento é a roupagem:

- nome e logo da escola;
- nome e logo do evento;
- cores e identidade visual;
- textos institucionais;
- configurações do quiosque;
- limite de dispositivos.

A proposta é permitir que vários professores usem a mesma experiência em eventos diferentes sem duplicar o aplicativo.

---

## 2. Princípio principal: offline first

A experiência do visitante **não pode depender da internet**.

A internet será necessária principalmente para:

1. autenticar professor ou evento;
2. baixar configuração, tema, logos e versão do questionário;
3. sincronizar respostas;
4. acessar dashboards e análises.

Depois da ativação, o quiosque precisa continuar funcionando mesmo sem conexão.

~~~text
Login do evento
    ↓
Baixa configuração + assets + questionário
    ↓
Cria ou recupera identidade do dispositivo
    ↓
Armazena tudo localmente
    ↓
QUIOSQUE FUNCIONA OFFLINE
    ↓
Participante responde
    ↓
Resultado é calculado localmente
    ↓
Resposta entra na fila local
    ↓
Quando houver internet, sincroniza com a nuvem
~~~

Regra de ouro:

> **resultado local primeiro, sincronização depois.**

Mesmo que a conexão nunca volte durante o evento, a experiência deve continuar funcionando normalmente para os visitantes.

---

## 3. Tipos de acesso

### Administrador mestre

Acesso global à plataforma.

Pode visualizar e gerenciar:

- professores;
- escolas;
- eventos;
- dispositivos;
- dados agregados;
- métricas globais;
- métricas por professor;
- métricas por escola;
- métricas por evento.

### Professor

Cada professor possui sua própria conta.

Pode:

- criar e editar seus eventos;
- personalizar identidade visual;
- ativar e desativar dispositivos;
- definir limite de dispositivos;
- visualizar os dados de todos os seus eventos;
- visualizar um evento específico;
- exportar dados;
- acompanhar sincronização.

### Evento / Quiosque

O evento possui uma credencial própria para ativação de quiosques.

Essa credencial não concede acesso ao painel do professor.

O quiosque pode:

- baixar configuração;
- baixar assets;
- executar o questionário;
- calcular resultados localmente;
- registrar respostas;
- sincronizar respostas pendentes.

O quiosque não precisa ter permissão para consultar respostas de outros participantes.

---

## 4. Multi-dispositivo

Um mesmo evento pode ser executado simultaneamente em vários computadores, tablets ou totens.

~~~text
Evento: Mostra Cultural

Dispositivo 00 → notebook da entrada
Dispositivo 01 → tablet 1
Dispositivo 02 → tablet 2
Dispositivo 03 → tablet 3
~~~

Cada dispositivo recebe uma identidade própria durante a ativação e mantém essa identidade localmente.

Os dispositivos não precisam conversar entre si para gerar participações.

Isso permite funcionamento totalmente offline.

---

## 5. Limite e estado dos dispositivos

Cada evento pode possuir um limite configurado de dispositivos ativos.

~~~text
Dispositivos permitidos: 4

ATIVADO     00 — Notebook recepção
ATIVADO     01 — Tablet corredor
ATIVADO     02 — Tablet mesa 1
DESATIVADO  03 — disponível
~~~

Estados planejados:

- activated
- deactivated
- revoked
- expired

Um dispositivo ativado continua consumindo uma vaga mesmo que esteja offline.

A conectividade é outra informação:

- última sincronização;
- última comunicação com o servidor;
- quantidade de respostas pendentes.

**Offline não significa desativado.**

---

## 6. Logout e encerramento

Com internet:

~~~text
Encerrar
  ↓
Sincronizar pendências
  ↓
Revogar token local
  ↓
Desativar dispositivo
  ↓
Liberar vaga
~~~

Sem internet e com respostas pendentes, o sistema deve impedir perda silenciosa de dados.

Possibilidades:

- manter dados locais até a próxima sincronização;
- exportar backup manual;
- sincronizar antes de liberar definitivamente a ativação.

---

# 7. Arquitetura de identificação

## 7.1 Formato definido

Formato compacto:

~~~text
EEEEE-DD-QQ-RRRR
~~~

| Campo | Tamanho | Significado |
|---|---:|---|
| EEEEE | 5 hex | Evento |
| DD | 2 hex | Dispositivo |
| QQ | 2 hex | Pergunta |
| RRRR | 4 hex | Participação naquele dispositivo |

Exemplo:

~~~text
A41F2-0B-07-19C4
~~~

Interpretação:

~~~text
Evento        = A41F2
Dispositivo   = 0B
Pergunta      = 07
Participação  = 19C4
~~~

O código completo possui 13 caracteres hexadecimais, ou 16 caracteres quando exibido com os três separadores.

---

## 7.2 Capacidade do esquema

### Eventos

5 dígitos hexadecimais:

~~~text
16^5 = 1.048.576 eventos possíveis
~~~

### Dispositivos por evento

2 dígitos hexadecimais:

~~~text
16^2 = 256 dispositivos possíveis por evento
~~~

### Perguntas

2 dígitos hexadecimais:

~~~text
16^2 = 256 perguntas possíveis
~~~

### Participações por dispositivo

4 dígitos hexadecimais:

~~~text
16^4 = 65.536 participações por dispositivo
~~~

### Capacidade teórica por evento usando os 256 dispositivos

~~~text
256 × 65.536 = 16.777.216 participações por evento
~~~

### Exemplo com 20 dispositivos

~~~text
20 × 65.536 = 1.310.720 participações por evento
~~~

### Com o questionário atual de 10 perguntas

~~~text
16.777.216 participações × 10 perguntas
= 167.772.160 registros de resposta
~~~

Esses números representam **capacidade de endereçamento**, não promessa de throughput, armazenamento ou carga simultânea.

---

## 7.3 Participação

O bloco RRRR identifica uma participação inteira dentro do contexto:

~~~text
evento + dispositivo
~~~

Portanto:

~~~text
A41F2-0B-00-19C4
A41F2-0B-01-19C4
A41F2-0B-02-19C4
~~~

pertencem à mesma participação.

Já:

~~~text
A41F2-0C-00-19C4
~~~

é outra participação, porque pertence a outro dispositivo.

Isso permite que cada dispositivo incremente seu contador local sem coordenação com os demais.

---

## 7.4 Perguntas

Os códigos de pergunta devem permanecer estáveis dentro de uma versão do questionário.

Proposta inicial:

~~~text
00 → Mensagens e chamadas
01 → Convívio presencial
02 → Redes sociais / vídeos curtos
03 → Leitura
04 → Jogos
05 → Atividade física
06 → Vídeos, filmes, séries e TV
07 → Hobbies sem telas
08 → Estudo / trabalho
09 → Outros usos digitais
~~~

Se o questionário mudar de forma metodologicamente relevante, deve existir uma nova versão de questionário.

Isso permite comparar eventos sem misturar instrumentos diferentes.

---

## 7.5 Estrutura no banco

Mesmo possuindo um código composto legível, o banco deve guardar os campos separadamente.

~~~text
event_code         = A41F2
device_code        = 0B
question_code      = 07
participation_code = 19C4
~~~

O identificador completo pode ser derivado:

~~~text
A41F2-0B-07-19C4
~~~

Isso facilita consultas e índices sem precisar desmontar a string do ID.

---

# 8. Persistência local

Tecnologias previstas:

### Service Worker

Mantém o aplicativo e seus assets disponíveis offline.

### IndexedDB

Armazena:

- configuração do evento;
- tema;
- logos e referências locais;
- token do quiosque;
- event_code;
- device_code;
- contador local de participação;
- respostas concluídas;
- fila de sincronização;
- estado de sincronização.

---

# 9. Sincronização

Cada participação concluída deve ser registrada localmente antes de qualquer tentativa de envio.

~~~text
Participação concluída
       ↓
Grava IndexedDB
       ↓
Mostra resultado
       ↓
Tenta sincronizar
       ↓
┌─────────────┬─────────────┐
│ online      │ offline     │
│ envia       │ mantém fila │
└─────────────┴─────────────┘
~~~

Ao recuperar a conexão, o sistema reenvia os registros pendentes.

O servidor deve tratar sincronização de forma idempotente para impedir duplicações.

---

# 10. Infraestrutura — proposta atual

Arquitetura considerada:

~~~text
Frontend / PWA
      │
      ▼
Cloudflare Worker
      │
 ┌────┴────┐
 ▼         ▼
D1         R2
dados      logos/assets
~~~

### Cloudflare D1

Candidato principal para:

- usuários;
- professores;
- eventos;
- dispositivos;
- participações;
- respostas;
- configurações;
- permissões.

### Cloudflare R2

Candidato para:

- logos das escolas;
- logos dos eventos;
- fundos;
- imagens e assets personalizados.

### Cloudflare Worker

Camada de API para:

- autenticação;
- autorização;
- ativação de dispositivos;
- emissão e renovação de tokens;
- sincronização;
- acesso ao D1;
- controle de assets.

O navegador não deve acessar o D1 diretamente.

---

# 11. Modelo lógico inicial

~~~text
users
  └── events
       ├── event_devices
       └── participations
            └── answers
~~~

Proposta inicial de entidades:

~~~text
users
- id
- email
- password_hash
- role
- created_at

events
- id
- event_code
- owner_user_id
- school_name
- event_name
- starts_at
- ends_at
- status
- device_limit
- questionnaire_version
- theme_config

event_devices
- id
- event_id
- device_code
- device_name
- status
- activated_at
- last_sync_at
- revoked_at

participations
- id
- event_id
- device_id
- participation_code
- questionnaire_version
- started_at
- finished_at
- synced_at

answers
- id
- participation_id
- question_code
- weekday_value
- weekend_value
~~~

Este ainda não é um schema definitivo.

---

# 12. Personalização por evento

Cada evento poderá armazenar:

- nome da escola;
- logo da escola;
- nome do evento;
- logo do evento;
- cor principal;
- cor secundária;
- fundo;
- texto de abertura;
- texto institucional;
- tempo de reset;
- limite de dispositivos.

O questionário e a lógica de análise permanecem padronizados.

~~~text
Mesmo aplicativo
        │
        ├── Evento A → roxo + verde
        ├── Evento B → azul + amarelo
        └── Evento C → vermelho + branco
~~~

---

# 13. Dashboard do professor

Visão planejada:

~~~text
Meus eventos

Mostra Cultural
187 participações

Feira de Ciências
93 participações

Semana da Tecnologia
241 participações
~~~

Por evento:

- número de participações;
- uso digital pessoal médio;
- leitura média;
- convívio presencial médio;
- atividade física média;
- hobbies;
- estudo/trabalho;
- maior categoria digital;
- dias úteis × fim de semana;
- respostas comportamentais;
- dispositivos ativos;
- respostas pendentes e sincronizadas;
- exportação.

---

# 14. Dashboard do administrador mestre

O administrador mestre poderá analisar por:

- todos os eventos;
- professor;
- escola;
- evento específico;
- período.

Isso permitirá calcular médias e tendências gerais da plataforma, além das análises específicas de cada professor.

---

# 15. Dados e anonimato

A experiência do visitante não precisa solicitar identidade pessoal.

Cada participação é representada tecnicamente por:

~~~text
evento
+ dispositivo
+ participação
+ pergunta
~~~

Os dados podem ser analisados de forma agregada por evento, escola ou professor.

Evitar campos livres desnecessários que possam introduzir dados pessoais.

---

# 16. Estado atual

Já existe na branch estável de quiosque:

- questionário com 10 perguntas;
- cálculo semanal;
- comparação de uso digital e atividades fora das telas;
- comentários e reflexões dinâmicos;
- perguntas comportamentais rápidas;
- modo quiosque;
- entrada com botão de play;
- fullscreen;
- layout sem scroll;
- ajuste automático à resolução;
- reset automático;
- publicação via GitHub Pages.

Planejado:

- autenticação;
- painel de professor;
- administrador mestre;
- eventos;
- personalização dinâmica;
- D1;
- R2;
- API Worker;
- IndexedDB;
- fila offline;
- sincronização;
- ativação de dispositivos;
- limite de dispositivos;
- dashboards;
- exportação e backup;
- analytics agregados.

---

# 17. Roadmap sugerido

## Fase 1 — Consolidar o quiosque

- testar em evento real;
- medir tempo de interação;
- corrigir UX;
- validar questionário;
- validar resultado.

## Fase 2 — Persistência offline

- Service Worker robusto;
- IndexedDB;
- fila local;
- IDs estruturados;
- exportação local de segurança.

## Fase 3 — Backend

- Worker;
- D1;
- R2;
- autenticação;
- eventos;
- dispositivos;
- sincronização.

## Fase 4 — Painel do professor

- login;
- CRUD de eventos;
- identidade visual;
- ativação de quiosques;
- dashboard por evento.

## Fase 5 — Administração geral

- painel mestre;
- agregações;
- filtros;
- comparação entre eventos;
- relatórios.

---

# 18. Regra de ouro

> **O participante nunca deve perder a experiência porque a internet caiu.**

A plataforma pode ficar sem sincronizar por horas.

O quiosque precisa continuar:

- iniciando;
- recebendo respostas;
- calculando;
- apresentando resultados;
- armazenando localmente.

A nuvem entra depois para sincronizar, organizar e analisar.

---

## Status

**Planejamento / arquitetura futura.**

Nenhuma funcionalidade descrita como futura deve ser considerada implementada apenas por estar documentada aqui.
