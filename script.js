/* BARTÓ — JavaScript */
const state = { orderItems: {}, tipoServicio: null };

const MENU = [
  {
    id: 'ensaladas', label: 'Ensaladas', items: [
      { id: 'ens-gulas', name: 'Ensalada de gulas', price: 15 }, { id: 'ens-ventresca', name: 'Ensalada de ventresca', price: 15 },
      { id: 'ens-pulpo', name: 'Ensalada de pulpo', price: 16 }, { id: 'ens-mixta', name: 'Ensalada mixta', price: 10 },
      { id: 'ens-casa', name: 'Ensalada especial de la casa', price: 13 }, { id: 'ens-perdiz', name: 'Ensalada de perdiz', price: 16 }
    ]
  },
  {
    id: 'ibericos', label: 'Ibéricos', items: [
      { id: 'jamon-ib', name: 'Jamón Ibérico', price: 20 }, { id: 'lomo-ib', name: 'Lomo Ibérico', price: 19 },
      { id: 'queso-oveja', name: 'Queso puro de oveja', price: 15 }
    ]
  },
  {
    id: 'carnes', label: 'Carnes a la Parrilla', items: [
      { id: 'solomillo-ib', name: 'Solomillo Ibérico a la parrilla', price: 18 }, { id: 'secreto-ib', name: 'Secreto Ibérico a la parrilla', price: 18 },
      { id: 'pluma-ib', name: 'Pluma Ibérica a la parrilla', price: 20 }, { id: 'entrecot', name: 'Entrecot de vaca', price: 22 },
      { id: 'carrillera', name: 'Carrillera estofada', price: 17 }, { id: 'cochifrito', name: 'Cochifrito', price: 18 },
      { id: 'lomo-plancha', name: 'Lomo a la plancha', price: 10 }, { id: 'chuletitas', name: 'Chuletitas de cordero lechal', price: 2.5 },
      { id: 'chuleton', name: 'Chuletón de ternera', price: 22 }, { id: 'mollejas', name: 'Mollejas de cordero a la plancha', price: 19.5 },
      { id: 'paletilla', name: 'Paletilla de cordero al horno', price: 22 }, { id: 'rabo', name: 'Rabo de toro', price: 18.5 },
      { id: 'callos', name: 'Callos a la madrileña', price: 16 }
    ]
  },
  {
    id: 'arroces', label: 'Arroces', items: [
      { id: 'arroz-marisco', name: 'Arroz de marisco', price: 28 }, { id: 'arroz-negro', name: 'Arroz negro', price: 24 },
      { id: 'arroz-bogavante', name: 'Arroz de bogavante', price: 40 }, { id: 'arroz-pulpo', name: 'Arroz de pulpo con gambas', price: 28 },
      { id: 'paella', name: 'Paella (por encargo)', price: 28 }
    ]
  },
  {
    id: 'frituras', label: 'Frituras', items: [
      { id: 'boq-m', name: 'Boquerones — Media Rac', price: 10 }, { id: 'boq-e', name: 'Boquerones — Entera', price: 14 },
      { id: 'cal-m', name: 'Calamares — Media Rac', price: 10 }, { id: 'cal-e', name: 'Calamares — Entera', price: 14 },
      { id: 'cho-m', name: 'Chocos — Media Rac', price: 10 }, { id: 'cho-e', name: 'Chocos — Entera', price: 14 },
      { id: 'chip-m', name: 'Chipirones — Media Rac', price: 10 }, { id: 'chip-e', name: 'Chipirones — Entera', price: 14 },
      { id: 'caz-m', name: 'Cazón en adobo — Media Rac', price: 10 }, { id: 'caz-e', name: 'Cazón en adobo — Entera', price: 14 },
      { id: 'punt-m', name: 'Puntillitas — Media Rac', price: 10 }, { id: 'punt-e', name: 'Puntillitas — Entera', price: 14 },
      { id: 'rej-m', name: 'Rejos — Media Rac', price: 10 }, { id: 'rej-e', name: 'Rejos — Entera', price: 14 },
      { id: 'surt-m', name: 'Surtido de pescado — Media Rac', price: 12 }, { id: 'surt-e', name: 'Surtido de pescado — Entera', price: 18 }
    ]
  },
  {
    id: 'plancha', label: 'Plancha', items: [
      { id: 'sepia', name: 'Sepia', price: 16 }, { id: 'chip-plancha', name: 'Chipirones', price: 15 },
      { id: 'gambas-pl', name: 'Gambas', price: 22 }, { id: 'gambones-pl', name: 'Gambones', price: 18 }
    ]
  },
  {
    id: 'pescados', label: 'Pescados y Mariscos', items: [
      { id: 'almejas', name: 'Almejas Marinera', price: 18 }, { id: 'gambas-huelva', name: 'Gambas de Huelva', price: 22 },
      { id: 'gambas-sal', name: 'Gambas a la sal', price: 22 }, { id: 'gambones-sal', name: 'Gambones a la sal', price: 19 },
      { id: 'bac-nr', name: 'Lomo de bacalao a las Nuevas Redes', price: 20 },
      { id: 'bac-verde', name: 'Lomo de bacalao en salsa verde con almejas', price: 20 },
      { id: 'bac-parr', name: 'Lomo de bacalao a la parrilla', price: 19 }
    ]
  },
  {
    id: 'raciones', label: 'Raciones', items: [
      { id: 'mej-m', name: 'Mejillones — Media Rac', price: 10 }, { id: 'mej-e', name: 'Mejillones — Entera', price: 16.5 },
      { id: 'pav-m', name: 'Pavías de bacalao — Media Rac', price: 10 }, { id: 'pav-e', name: 'Pavías de bacalao — Entera', price: 14 },
      { id: 'bacd-m', name: 'Bacalao dorado — Media Rac', price: 10 }, { id: 'bacd-e', name: 'Bacalao dorado — Entera', price: 14 },
      { id: 'croq-m', name: 'Croquetas — Media Rac', price: 10 }, { id: 'croq-e', name: 'Croquetas — Entera', price: 14 },
      { id: 'gambas-ajillo', name: 'Gambas al ajillo', price: 14 },
      { id: 'anchoas', name: 'Anchoas del Cantábrico', price: 2.5 },
      { id: 'pulpo-gallega', name: 'Pulpo a la Gallega', price: 18 },
      { id: 'pulpito', name: 'Pulpito a la parrilla al pimentón de la Vera', price: 20 },
      { id: 'rulo-cabra', name: 'Rulo de cabra con cebolla caramelizada', price: 5 }
    ]
  },
  {
    id: 'postres', label: 'Postres y Otros', items: [
      { id: 'postres', name: 'Postres caseros variados', price: 4.5 },
      { id: 'pan', name: 'Cesto de pan', price: 1 }
    ]
  }
];

// NAV
const navbar = document.getElementById('navbar'), navLinksAll = document.querySelectorAll('.nav-links a'), sections = document.querySelectorAll('section[id]');
function setActiveLink(sectionId) { navLinksAll.forEach(l => { const isCarta = l.getAttribute('href') === 'carta.html'; if (isCarta) return; const isActive = l.dataset.section === sectionId; l.classList.toggle('active', isActive); }); }
window.addEventListener('scroll', () => { navbar.classList.toggle('scrolled', window.scrollY > 60); let cur = 'inicio'; sections.forEach(s => { if (window.scrollY >= s.offsetTop - 150) cur = s.id; }); setActiveLink(cur); }, { passive: true });

// HAMBURGER
document.getElementById('hamburgerBtn').addEventListener('click', () => { document.getElementById('mobileMenu').classList.toggle('open'); });
function closeMobile() { document.getElementById('mobileMenu').classList.remove('open'); }

// HELPERS
function scrollToReservas() { document.getElementById('reservas').scrollIntoView({ behavior: 'smooth' }); }
function formatPrice(n) { return n.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 }); }

// SCROLL-DRIVEN VIDEO
(function () {
  const hero = document.getElementById('inicio'), video = document.getElementById('heroVideo'), fs = document.querySelector('.hero__frame--start'), fe = document.querySelector('.hero__frame--end'), pb = document.getElementById('heroProgressBar');
  if (!hero || !video) return; let dur = 0, ready = false, tick = false, last = -1;
  function onReady() { dur = video.duration; ready = true; video.currentTime = 0; }
  if (video.readyState >= 1) onReady(); else video.addEventListener('loadedmetadata', onReady, { once: true });
  video.pause();
  function update() {
    tick = false; if (!ready || !dur) return; const r = hero.getBoundingClientRect(), sh = hero.offsetHeight - window.innerHeight; if (sh <= 0) return; const p = Math.max(0, Math.min(1, -r.top / sh)); if (Math.abs(p - last) < 0.001) return; last = p;
    p < 0.03 ? fs.classList.remove('fade-out') : fs.classList.add('fade-out');
    p > 0.97 ? fe.classList.add('fade-in') : fe.classList.remove('fade-in');
    const t = p * dur; if (Math.abs(video.currentTime - t) > 0.03) video.currentTime = t;
    if (pb) pb.style.width = (p * 100) + '%';
  }
  window.addEventListener('scroll', () => { if (!tick) { tick = true; requestAnimationFrame(update); } }, { passive: true });
  requestAnimationFrame(update);
})();

// TIPO SERVICIO
document.querySelectorAll('.tipo-btn').forEach(b => { b.addEventListener('click', () => { document.querySelectorAll('.tipo-btn').forEach(x => x.classList.remove('tipo-btn--active')); b.classList.add('tipo-btn--active'); state.tipoServicio = b.dataset.tipo; }); });

// MODAL
const modalOverlay = document.getElementById('modalOverlay'), modalBody = document.getElementById('modalBody');
let tempSelectedIds = new Set(); const modalSearchInput = document.getElementById('modalSearch');

function buildModal(search = '') {
  modalBody.innerHTML = ''; const norm = s => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase(); const st = norm(search);
  MENU.forEach(cat => {
    const fi = cat.items.filter(i => norm(i.name).includes(st)); if (!fi.length) return;
    const ce = document.createElement('div'); ce.className = 'modal-category'; ce.innerHTML = `<h3 class="modal-category__title">${cat.label}</h3>`;
    const le = document.createElement('div'); le.className = 'modal-items';
    fi.forEach(item => {
      const el = document.createElement('div'), sel = tempSelectedIds.has(item.id); el.className = 'modal-item' + (sel ? ' selected' : ''); el.dataset.id = item.id;
      let dn = item.name, tag = ''; if (dn.includes(' — ')) { const p = dn.split(' — '); dn = p[0]; tag = `<span class="item-tag">${p[1] === 'Media Rac' ? 'Media' : p[1]}</span>`; }
      el.innerHTML = `<span class="modal-item__name">${dn}${tag}</span><span class="modal-item__price">${formatPrice(item.price)} €</span><span class="modal-item__check"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg></span>`;
      el.addEventListener('click', () => { if (tempSelectedIds.has(item.id)) { tempSelectedIds.delete(item.id); el.classList.remove('selected'); } else { tempSelectedIds.add(item.id); el.classList.add('selected'); } });
      le.appendChild(el);
    }); ce.appendChild(le); modalBody.appendChild(ce);
  });
  if (!modalBody.innerHTML) modalBody.innerHTML = '<div style="text-align:center;padding:2rem;color:var(--dark-60)">No se encontraron productos.</div>';
}

document.getElementById('openModalBtn').addEventListener('click', () => {
  tempSelectedIds.clear(); Object.values(state.orderItems).forEach(o => { let f = MENU.flatMap(c => c.items).find(i => i.name === o.name); if (f) tempSelectedIds.add(f.id); });
  if (modalSearchInput) modalSearchInput.value = ''; buildModal(); modalOverlay.classList.add('open'); document.body.style.overflow = 'hidden';
});
if (modalSearchInput) modalSearchInput.addEventListener('input', e => buildModal(e.target.value));
function closeModal() { modalOverlay.classList.remove('open'); document.body.style.overflow = ''; }
document.getElementById('closeModalBtn').addEventListener('click', closeModal);
document.getElementById('confirmModalBtn').addEventListener('click', () => {
  tempSelectedIds.forEach(id => { const item = MENU.flatMap(c => c.items).find(i => i.id === id); if (!Object.values(state.orderItems).find(o => o.name === item.name)) addToOrder(item.name, item.price); });
  Object.keys(state.orderItems).forEach(key => { const o = state.orderItems[key]; const fid = MENU.flatMap(c => c.items).find(i => i.name === o.name)?.id; if (fid && !tempSelectedIds.has(fid)) delete state.orderItems[key]; });
  renderOrderSummary(); closeModal();
});
modalOverlay.addEventListener('click', e => { if (e.target === modalOverlay) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

// ORDER
function addToOrder(name, price) { const k = Object.keys(state.orderItems).find(k => state.orderItems[k].name === name); if (k) { state.orderItems[k].qty++; } else { state.orderItems['i' + Date.now() + Math.floor(Math.random() * 1000)] = { name, price, qty: 1 }; } renderOrderSummary(); }

function loadExternalCart() {
  const cj = localStorage.getItem('barto_cart'); if (!cj) return;
  try { const items = JSON.parse(cj); items.forEach(pn => { let mi = MENU.flatMap(c => c.items).find(i => i.name === pn); if (!mi) mi = MENU.flatMap(c => c.items).find(i => i.name.includes(pn) || pn.includes(i.name)); if (mi) addToOrder(mi.name, mi.price); }); localStorage.removeItem('barto_cart'); if (items.length > 0) setTimeout(scrollToReservas, 500); } catch (e) { }
}
window.addEventListener('load', loadExternalCart);

function changeQty(key, delta) { if (!state.orderItems[key]) return; state.orderItems[key].qty += delta; if (state.orderItems[key].qty <= 0) delete state.orderItems[key]; renderOrderSummary(); }

function renderOrderSummary() {
  const summary = document.getElementById('orderSummary'), itemsEl = document.getElementById('orderItems'), totalEl = document.getElementById('orderTotal'), keys = Object.keys(state.orderItems);
  if (!keys.length) { summary.style.display = 'none'; return; } summary.style.display = 'block'; itemsEl.innerHTML = ''; let total = 0;
  keys.forEach(key => {
    const item = state.orderItems[key], lt = item.price * item.qty; total += lt;
    let dn = item.name, tag = ''; if (dn.includes(' — ')) { const p = dn.split(' — '); dn = p[0]; tag = `<span class="item-tag">${p[1] === 'Media Rac' ? 'Media' : p[1]}</span>`; }
    const el = document.createElement('div'); el.className = 'order-item';
    el.innerHTML = `<span class="order-item__name">${dn}${tag}</span><div class="order-item__qty"><button class="order-item__qty-btn" data-key="${key}" data-delta="-1">−</button><span class="order-item__qty-num">${item.qty}</span><button class="order-item__qty-btn" data-key="${key}" data-delta="1">+</button></div><span class="order-item__price">${formatPrice(lt)} €</span><button class="order-item__remove" data-key="${key}">✕</button>`;
    itemsEl.appendChild(el);
  });
  itemsEl.querySelectorAll('.order-item__qty-btn').forEach(b => b.addEventListener('click', () => changeQty(b.dataset.key, parseInt(b.dataset.delta))));
  itemsEl.querySelectorAll('.order-item__remove').forEach(b => b.addEventListener('click', () => { delete state.orderItems[b.dataset.key]; renderOrderSummary(); }));
  totalEl.classList.remove('bump'); void totalEl.offsetWidth; totalEl.textContent = formatPrice(total) + ' €'; totalEl.classList.add('bump');
}

// HORARIOS
const horaSelect = document.getElementById('hora');
const HORARIOS = { 0: [{ start: '12:00', end: '17:30' }], 1: [{ start: '12:00', end: '17:30' }], 2: null, 3: [{ start: '12:00', end: '17:30' }, { start: '20:30', end: '24:00' }], 4: [{ start: '12:00', end: '17:30' }, { start: '20:30', end: '24:00' }], 5: [{ start: '12:00', end: '17:30' }, { start: '20:30', end: '00:30' }], 6: [{ start: '12:00', end: '17:30' }, { start: '20:30', end: '00:30' }] };

function generateTimeSlots(dateStr) {
  const sd = new Date(dateStr), dow = sd.getDay(), ranges = HORARIOS[dow];
  horaSelect.innerHTML = '<option value="" disabled selected>Elige hora</option>';
  if (!ranges) { horaSelect.innerHTML = '<option value="" disabled selected>Cerrado este día</option>'; initCustomSelects(); return; }
  const now = new Date(), isToday = sd.toDateString() === now.toDateString();
  ranges.forEach(range => {
    let cur = range.start; const end = range.end;
    while (true) {
      let isPast = false; if (isToday) { const [h, m] = cur.split(':').map(Number); const st = new Date(sd); st.setHours(h, m, 0, 0); if (st < now) isPast = true; }
      if (!isPast) { const opt = document.createElement('option'); opt.value = cur; opt.textContent = cur; horaSelect.appendChild(opt); }
      let [h, m] = cur.split(':').map(Number); m += 30; if (m >= 60) { h++; m = 0; } if (h >= 24) h = 0;
      const next = `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
      if (next === end || next === '00:00' && end === '24:00') break;
      if (end === '24:00' && next === '00:00') break;
      if (end !== '24:00' && end !== '01:00' && next > end && cur < end) break;
      cur = next;
    }
  }); initCustomSelects();
}

const fp = flatpickr("#fecha", { locale: "es", minDate: "today", dateFormat: "Y-m-d", altInput: true, altFormat: "j \\de F, Y", disable: [function (date) { return date.getDay() === 2; }], onChange: function (sel, dateStr) { generateTimeSlots(dateStr); } });

// FORM SUBMIT
const form = document.getElementById('reservasForm');
form.addEventListener('submit', async e => {
  e.preventDefault();
  const nombre = document.getElementById('nombre').value.trim(), fecha = document.getElementById('fecha').value, hora = document.getElementById('hora').value, personas = document.getElementById('personas').value;
  if (!nombre || !fecha || !hora || !personas) { alert('Completa los campos obligatorios.'); return; }
  if (!state.tipoServicio) { alert('Indica si es para comer aquí o para llevar.'); return; }
  const submitBtn = document.getElementById('submitBtn'); submitBtn.disabled = true; submitBtn.innerHTML = 'Procesando...';
  const isoDateStr = fecha, fpI = document.getElementById('fecha')._flatpickr, dateStr = (fpI && fpI.altInput) ? fpI.altInput.value : isoDateStr;
  const isoDateTime = `${isoDateStr}T${hora}:00`;
  const notasStr = (document.getElementById('notas')?.value || '').trim();
  const serviceStr = state.tipoServicio === 'local' ? 'Comer Aquí' : 'Para Llevar';
  let orderItemsHtml = '', totalOrder = 0; const orderKeys = Object.keys(state.orderItems), pedidoStrings = [];
  if (orderKeys.length > 0) {
    orderKeys.forEach(key => {
      const item = state.orderItems[key], lt = item.price * item.qty; totalOrder += lt;
      let nb = item.name, tam = '';
      if (item.name.includes(' — ')) { const p = item.name.split(' — '); nb = p[0].trim(); tam = p[1].trim() === 'Media Rac' ? 'Media Ración' : p[1].trim() === 'Entera' ? 'Ración' : p[1].trim(); }
      let si = `x${item.qty} ${nb}`; if (tam) si += ` (${tam})`; pedidoStrings.push(si);
      let dn = item.name; if (dn.includes(' — ')) { const p = dn.split(' — '); dn = p[0] + (p[1] === 'Media Rac' ? ' (Media)' : ' (Entera)'); }
      orderItemsHtml += `<div class="success-details__item"><span class="success-details__item-name">${item.qty}x ${dn}</span><span>${formatPrice(lt)} €</span></div>`;
    });
  }
  const webhookData = { nombre, fecha: isoDateTime, hora, personas, servicio: serviceStr, pedido: pedidoStrings.join(' + '), totalPedido: formatPrice(totalOrder) + ' €', notas: notasStr };
  try { await fetch('https://hook.eu2.make.com/2k818xwbv3qxo1eyxvdqeyucrgajae57', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(webhookData) }); }
  catch (err) { console.error(err); alert('Error al procesar. Inténtalo de nuevo.'); submitBtn.disabled = false; submitBtn.innerHTML = 'Confirmar reserva <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>'; return; }
  const successHtml = `<div class="success-details__row"><span class="success-details__label">A nombre de</span><span class="success-details__val">${nombre}</span></div><div class="success-details__row"><span class="success-details__label">Fecha y Hora</span><span class="success-details__val">${dateStr} a las ${hora}</span></div><div class="success-details__row"><span class="success-details__label">Comensales</span><span class="success-details__val">${personas}</span></div><div class="success-details__row"><span class="success-details__label">Servicio</span><span class="success-details__val">${serviceStr}</span></div>${orderKeys.length > 0 ? `<div class="success-details__items">${orderItemsHtml}<div class="success-details__total"><span>Total pedido</span><span>${formatPrice(totalOrder)} €</span></div></div>` : ''}`;
  document.getElementById('successDetails').innerHTML = successHtml;
  document.getElementById('successModalOverlay').classList.add('open'); document.body.style.overflow = 'hidden';
  form.reset(); state.orderItems = {}; renderOrderSummary(); if (fp) fp.clear();
  horaSelect.innerHTML = '<option value="" disabled selected>Selecciona una fecha primero</option>';
  state.tipoServicio = null; document.querySelectorAll('.tipo-btn').forEach(b => b.classList.remove('tipo-btn--active')); initCustomSelects();
  submitBtn.disabled = false; submitBtn.innerHTML = 'Confirmar reserva <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>';
});

function resetAndCloseSuccess() {
  document.getElementById('successModalOverlay').classList.remove('open'); document.body.style.overflow = '';
  form.reset(); state.orderItems = {}; renderOrderSummary();
  const fpI = document.getElementById('fecha')._flatpickr; if (fpI) fpI.clear();
  horaSelect.innerHTML = '<option value="" disabled selected>Selecciona una fecha primero</option>';
  state.tipoServicio = null; document.querySelectorAll('.tipo-btn').forEach(b => b.classList.remove('tipo-btn--active')); initCustomSelects();
}
document.getElementById('closeSuccessModalBtn').addEventListener('click', resetAndCloseSuccess);
document.getElementById('finishSuccessBtn').addEventListener('click', resetAndCloseSuccess);
document.getElementById('successModalOverlay').addEventListener('click', e => { if (e.target.id === 'successModalOverlay') resetAndCloseSuccess(); });

// SCROLL REVEAL
const revealEls = document.querySelectorAll('.section__header,.reservas__form,.reservas__aside,.aside-card,.carta-banner__content');
const revObs = new IntersectionObserver(entries => { entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('reveal', 'revealed'); revObs.unobserve(e.target); } }); }, { threshold: 0.15 });
revealEls.forEach(el => { el.classList.add('reveal'); revObs.observe(el); });

// CUSTOM SELECT
function initCustomSelects() {
  document.querySelectorAll('.form-select').forEach(select => {
    let w = select.parentElement;
    if (!w.classList.contains('custom-select-wrapper')) {
      w = document.createElement('div'); w.className = 'custom-select-wrapper'; select.parentNode.insertBefore(w, select); w.appendChild(select);
      const tr = document.createElement('div'); tr.style.cssText = 'position:absolute;inset:0;cursor:pointer;'; w.appendChild(tr);
      const ol = document.createElement('div'); ol.className = 'custom-select-options'; w.appendChild(ol);
      tr.addEventListener('click', e => { e.stopPropagation(); const isO = w.classList.contains('open'); document.querySelectorAll('.custom-select-wrapper.open').forEach(x => x.classList.remove('open')); if (!isO) w.classList.add('open'); });
    }
    const ol = w.querySelector('.custom-select-options'); ol.innerHTML = '';
    Array.from(select.options).forEach((opt, i) => {
      const od = document.createElement('div'); od.className = 'custom-select-option'; if (opt.disabled) od.classList.add('disabled'); if (opt.selected) od.classList.add('selected'); od.textContent = opt.text;
      if (!opt.disabled) od.addEventListener('click', e => { e.stopPropagation(); select.selectedIndex = i; select.dispatchEvent(new Event('change')); Array.from(ol.children).forEach(c => c.classList.remove('selected')); od.classList.add('selected'); w.classList.remove('open'); });
      ol.appendChild(od);
    });
  });
}
initCustomSelects();
document.addEventListener('click', () => { document.querySelectorAll('.custom-select-wrapper.open').forEach(w => w.classList.remove('open')); });
