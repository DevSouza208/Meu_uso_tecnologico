let records = [];
let editingIndex = null;

const colorPalette = [
  '#7A2800', '#6B21A8', '#1E40AF', 
  '#991B1B', '#065F46', '#831843', '#854D0E'
];

const daysList = [
  { id: 'Dom', label: 'Dom', fullName: 'Domingo' },
  { id: 'Seg', label: 'Seg', fullName: 'Segunda-feira' },
  { id: 'Ter', label: 'Ter', fullName: 'Terça-feira' },
  { id: 'Qua', label: 'Qua', fullName: 'Quarta-feira' },
  { id: 'Qui', label: 'Qui', fullName: 'Quinta-feira' },
  { id: 'Sex', label: 'Sex', fullName: 'Sexta-feira' },
  { id: 'Sáb', label: 'Sáb', fullName: 'Sábado' }
];

const devicesList = ['Celular', 'Televisão', 'Desktop', 'Tablet', 'Video Game', 'Notebook'];

// Controle do Slider de Horas
const timeSlider = document.getElementById('time-slider');
const sliderHoursVal = document.getElementById('slider-hours-val');

function formatHoursText(val) {
  const num = parseFloat(val);
  if (num === 0.5) return '30 min';
  return num % 1 === 0 ? `${num} Horas` : `${Math.floor(num)}h 30m`;
}

timeSlider.addEventListener('input', (e) => {
  sliderHoursVal.innerText = formatHoursText(e.target.value);
});

// Abas
const tabAdd = document.getElementById('tab-add');
const tabView = document.getElementById('tab-view');
const sectionForm = document.getElementById('section-form');
const sectionList = document.getElementById('section-list');

tabAdd.addEventListener('click', () => {
  tabAdd.classList.add('active');
  tabView.classList.remove('active');
  sectionForm.classList.add('active');
  sectionList.classList.remove('active');
});

tabView.addEventListener('click', () => {
  tabView.classList.add('active');
  tabAdd.classList.remove('active');
  sectionList.classList.add('active');
  sectionForm.classList.remove('active');
});

// Seleção de Botões de Dias e Dispositivo
function setupSelection(containerId, isMultiple = false) {
  const container = document.getElementById(containerId);
  container.addEventListener('click', (e) => {
    if (!e.target.classList.contains('pill')) return;

    const btn = e.target;
    if (isMultiple) {
      btn.classList.toggle('selected');
    } else {
      container.querySelectorAll('.pill').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
    }
  });
}

setupSelection('days-group', true);
setupSelection('device-group', false);

// Adicionar ou Atualizar Registro
document.getElementById('add-btn').addEventListener('click', () => {
  const activityInput = document.getElementById('activity-name');
  const activityName = activityInput.value.trim();

  const dayBtns = document.querySelectorAll('#days-group .pill.selected');
  const days = Array.from(dayBtns).map(b => b.getAttribute('data-value'));

  const hours = parseFloat(timeSlider.value);

  const deviceBtn = document.querySelector('#device-group .pill.selected');
  const device = deviceBtn ? deviceBtn.getAttribute('data-value') : '';

  if (!activityName || days.length === 0 || !device) {
    alert('Por favor, preencha o nome da atividade, selecione os dias e o dispositivo!');
    return;
  }

  if (editingIndex !== null) {
    records[editingIndex].activityName = activityName;
    records[editingIndex].days = days;
    records[editingIndex].hours = hours;
    records[editingIndex].device = device;
    editingIndex = null;
    document.getElementById('add-btn').innerText = 'Adicionar Registro';
  } else {
    const cardColor = colorPalette[records.length % colorPalette.length];
    records.push({ activityName, days, hours, device, color: cardColor });
  }

  resetForm();
  document.getElementById('record-count').innerText = records.length;
  renderCards();
  updateDashboard();

  tabView.click();
});

function resetForm() {
  document.getElementById('activity-name').value = '';
  document.querySelectorAll('.pill.selected').forEach(b => b.classList.remove('selected'));
  timeSlider.value = 2;
  sliderHoursVal.innerText = formatHoursText(2);
}

// Editar
function editRecord(originalIndex) {
  const rec = records[originalIndex];
  editingIndex = originalIndex;

  resetForm();

  rec.days.forEach(dayId => {
    const btn = document.querySelector(`#days-group .pill[data-value="${dayId}"]`);
    if (btn) btn.classList.add('selected');
  });

  timeSlider.value = rec.hours;
  sliderHoursVal.innerText = formatHoursText(rec.hours);

  const deviceBtn = document.querySelector(`#device-group .pill[data-value="${rec.device}"]`);
  if (deviceBtn) deviceBtn.classList.add('selected');

  document.getElementById('activity-name').value = rec.activityName;
  document.getElementById('add-btn').innerText = 'Salvar Alterações';

  tabAdd.click();
}

// Apagar Registro Individual
function deleteRecord(originalIndex) {
  records.splice(originalIndex, 1);
  if (editingIndex === originalIndex) {
    editingIndex = null;
    document.getElementById('add-btn').innerText = 'Adicionar Registro';
    resetForm();
  }
  document.getElementById('record-count').innerText = records.length;
  renderCards();
  updateDashboard();
}

// Eventos de Mudança de Filtro/Ordenação
document.getElementById('sort-by').addEventListener('change', renderCards);
document.getElementById('sort-order').addEventListener('change', renderCards);

// Renderizar Lista de Cards Ordenada
function renderCards() {
  const container = document.getElementById('cards-container');
  container.innerHTML = '';

  if (records.length === 0) {
    container.innerHTML = `<p style="color: #888; text-align: center; grid-column: 1/-1; padding: 40px 0;">Nenhum uso registrado ainda.</p>`;
    return;
  }

  const sortBy = document.getElementById('sort-by').value;
  const sortOrder = document.getElementById('sort-order').value;

  // Cria uma lista de índices vinculados aos dados originais
  let indexedRecords = records.map((rec, originalIndex) => ({
    ...rec,
    originalIndex,
    totalWeeklyHours: rec.hours * rec.days.length
  }));

  // Lógica de Ordenação
  indexedRecords.sort((a, b) => {
    let comparison = 0;
    if (sortBy === 'total') {
      comparison = a.totalWeeklyHours - b.totalWeeklyHours;
    } else if (sortBy === 'session') {
      comparison = a.hours - b.hours;
    } else if (sortBy === 'name') {
      comparison = a.activityName.localeCompare(b.activityName);
    }

    return sortOrder === 'desc' ? -comparison : comparison;
  });

  indexedRecords.forEach((rec) => {
    const cardColor = rec.color;
    const hoursText = formatHoursText(rec.hours);

    const cardHTML = `
      <div class="card-item">
        <div class="card-actions-top">
          <button class="card-action-btn" onclick="editRecord(${rec.originalIndex})" title="Editar">
            <i class="fa-solid fa-pencil"></i>
          </button>
          <button class="card-action-btn delete-btn" onclick="deleteRecord(${rec.originalIndex})" title="Excluir">
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>

        <div class="card-content">
          <div class="section-group">
            <label>Dias de uso</label>
            <div class="pill-group">
              ${daysList.map(d => {
                const active = rec.days.includes(d.id);
                const bgStyle = active ? `style="background-color: ${cardColor};"` : '';
                return `<button class="pill circle day-pill ${active ? 'selected' : ''}" ${bgStyle} disabled>${d.label}</button>`;
              }).join('')}
            </div>
          </div>

          <div class="section-group">
            <label>Tempo de uso por dia</label>
            <div style="margin-top: 8px;">
              <span class="time-badge" style="background-color: ${cardColor}; font-size: 0.95rem;">${hoursText} / dia</span>
            </div>
          </div>

          <div class="section-group">
            <label>Dispositivo</label>
            <div class="pill-group grid-devices">
              ${devicesList.map(dev => {
                const active = rec.device === dev;
                const bgStyle = active ? `style="background-color: ${cardColor};"` : '';
                return `<button class="pill rect ${active ? 'selected' : ''}" ${bgStyle} disabled>${dev}</button>`;
              }).join('')}
            </div>
          </div>
        </div>

        <div class="activity-banner" style="background-color: ${cardColor}">
          <span>${rec.activityName}</span>
          <span class="total-tag">${rec.totalWeeklyHours}h / sem</span>
        </div>
      </div>
    `;
    container.innerHTML += cardHTML;
  });
}

// Dashboard Totais
function updateDashboard() {
  let totalHours = 0;
  const deviceCount = {};

  records.forEach(r => {
    const totalActivityHours = r.hours * r.days.length;
    totalHours += totalActivityHours;
    deviceCount[r.device] = (deviceCount[r.device] || 0) + totalActivityHours;
  });

  const dailyAverage = (totalHours / 7).toFixed(1).replace('.', ',');

  document.getElementById('daily-hours').innerText = `${dailyAverage} H/dia`;
  document.getElementById('total-hours').innerText = `${totalHours} H/sem`;

  let topDevice = '-';
  let maxHours = 0;
  for (const [device, hrs] of Object.entries(deviceCount)) {
    if (hrs > maxHours) {
      maxHours = hrs;
      topDevice = device;
    }
  }
  document.getElementById('top-device').innerText = topDevice;
}

// Modal de Detalhes Diários
const detailsModal = document.getElementById('details-modal');
const openDetailsBtn = document.getElementById('open-details-btn');
const closeDetailsBtn = document.getElementById('close-details-btn');

openDetailsBtn.addEventListener('click', () => {
  renderDayBreakdown();
  detailsModal.classList.add('show');
});

closeDetailsBtn.addEventListener('click', () => {
  detailsModal.classList.remove('show');
});

function renderDayBreakdown() {
  const container = document.getElementById('day-breakdown-container');
  container.innerHTML = '';

  const dayTotals = { Dom: 0, Seg: 0, Ter: 0, Qua: 0, Qui: 0, Sex: 0, Sáb: 0 };

  records.forEach(r => {
    r.days.forEach(day => {
      dayTotals[day] = (dayTotals[day] || 0) + r.hours;
    });
  });

  const maxVal = Math.max(...Object.values(dayTotals), 1);

  daysList.forEach(d => {
    const hours = dayTotals[d.id] || 0;
    const percentage = (hours / maxVal) * 100;
    const hoursFormatted = formatHoursText(hours);

    const rowHTML = `
      <div class="day-row">
        <span class="day-row-name" style="width: 100px;">${d.fullName}</span>
        <div class="day-bar-bg">
          <div class="day-bar-fill" style="width: ${percentage}%;"></div>
        </div>
        <span class="day-row-val">${hours > 0 ? hoursFormatted : '0h'}</span>
      </div>
    `;
    container.innerHTML += rowHTML;
  });
}

// Modal de Reset Geral
const resetModal = document.getElementById('reset-modal');
const resetBtn = document.getElementById('reset-all-btn');
const cancelResetBtn = document.getElementById('cancel-reset-btn');
const confirmResetBtn = document.getElementById('confirm-reset-btn');

resetBtn.addEventListener('click', () => {
  resetModal.classList.add('show');
});

cancelResetBtn.addEventListener('click', () => {
  resetModal.classList.remove('show');
});

confirmResetBtn.addEventListener('click', () => {
  records = [];
  editingIndex = null;
  resetForm();
  document.getElementById('record-count').innerText = 0;
  document.getElementById('add-btn').innerText = 'Adicionar Registro';
  renderCards();
  updateDashboard();
  resetModal.classList.remove('show');
  tabAdd.click();
});
