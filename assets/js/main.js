// ─── Reveal on scroll ───
// Disattivato se l'utente preferisce ridurre il movimento.
(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var els = document.querySelectorAll('.reveal');

  if (reduce || !('IntersectionObserver' in window)) {
    els.forEach(function (el) { el.classList.add('in'); });
    return;
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  els.forEach(function (el) { io.observe(el); });
})();

// ─── Invio candidatura al webhook n8n ───
(function () {
  var WEBHOOK_URL = 'https://n8n.fyco.ai/webhook/6a7c1c4e-eb54-4ce4-8cdc-c052e66aa363';

  var form = document.getElementById('candidatura-form');
  if (!form) return;

  var statusEl = document.getElementById('form-status');
  var button = form.querySelector('.btn-submit');
  var buttonLabel = button ? button.textContent : '';

  // Rimuove eventuali tag HTML dai valori inseriti
  function sanitize(value) {
    return String(value == null ? '' : value).replace(/<[^>]*>/g, '').trim();
  }

  function showStatus(message, kind) {
    if (!statusEl) return;
    statusEl.textContent = message;
    statusEl.className = 'form-status ' + (kind === 'error' ? 'is-error' : 'is-success');
    statusEl.hidden = false;
  }

  form.addEventListener('submit', function (ev) {
    ev.preventDefault();

    // Honeypot: se compilato, è un bot → esci senza inviare
    if (form.azienda && form.azienda.value.trim() !== '') return;

    // Validazione nativa del browser (required, email, ecc.)
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    var payload = {
      nome: sanitize(form.nome.value),
      cognome: sanitize(form.cognome.value),
      telefono: sanitize(form.telefono.value),
      email: sanitize(form.email.value),
      area: sanitize(form.area.value),
      esperienza: sanitize(form.esperienza.value),
      linkedin: sanitize(form.linkedin.value)
    };

    if (button) {
      button.disabled = true;
      button.textContent = 'Invio in corso…';
    }
    if (statusEl) statusEl.hidden = true;

    fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
      .then(function (res) {
        if (!res.ok) throw new Error('HTTP ' + res.status);
        form.reset();
        showStatus('✓ Candidatura ricevuta — ti ricontattiamo al più presto.', 'success');
        if (button) button.textContent = 'Candidatura inviata ✓';

        // Evento dataLayer per il tag di conversione Google Ads in GTM.
        // Nome evento dedicato (diverso da "lead_form_submit" usato su LP1/LP3)
        // per non confondere la conversione recruiting con quella venditori.
        if (window.dataLayer) {
          window.dataLayer.push({ event: 'recruiting_form_submit', area: payload.area });
        }
      })
      .catch(function () {
        showStatus('Qualcosa è andato storto. Riprova o scrivici via email.', 'error');
        if (button) {
          button.disabled = false;
          button.textContent = buttonLabel;
        }
      });
  });
})();

// ─── Pre-selezione del ruolo dai CTA di corsia ("Candidati come Agente/Marketing") ───
(function () {
  var area = document.getElementById('area');
  if (!area) return;

  document.querySelectorAll('[data-area]').forEach(function (link) {
    link.addEventListener('click', function () {
      area.value = link.getAttribute('data-area');
    });
  });
})();
