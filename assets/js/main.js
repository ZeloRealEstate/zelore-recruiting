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

// ─── Grafico "Dove finisce il tuo tempo": le percentuali contano fino al valore reale ───
// Il conteggio segue la crescita delle barre (stessa durata e stesso ritardo del CSS).
(function () {
  var chart = document.querySelector('.timechart');
  if (!chart) return;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce || !('IntersectionObserver' in window) || !window.requestAnimationFrame) return;

  var DURATION = 1200;
  var nums = chart.querySelectorAll('.tc-num');
  nums.forEach(function (n) { n.textContent = '0'; });

  function easeOut(t) { return 1 - Math.pow(1 - t, 4); }

  function count(el, delay) {
    var to = parseInt(el.getAttribute('data-to'), 10);
    var start = null;
    setTimeout(function () {
      function step(ts) {
        if (start === null) start = ts;
        var t = Math.min((ts - start) / DURATION, 1);
        el.textContent = Math.round(to * easeOut(t));
        if (t < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    }, delay);
  }

  var io = new IntersectionObserver(function (entries) {
    if (!entries[0].isIntersecting) return;
    io.disconnect();
    nums.forEach(function (el) {
      count(el, el.closest('.tc-row-zelo') ? 1000 : 350);
    });
  }, { threshold: 0.12 });

  io.observe(chart);
})();

// ─── Invio candidatura al webhook n8n ───
(function () {
  var WEBHOOK_URL = 'https://n8n.fyco.ai/webhook/6a7c1c4e-eb54-4ce4-8cdc-c052e66aa363';
  // Indirizzo da mostrare se l'invio non va a buon fine
  var CONTACT_EMAIL = 'info@zelore.it';
  var TIMEOUT_MS = 15000;

  var form = document.getElementById('candidatura-form');
  if (!form) return;

  var statusEl = document.getElementById('form-status');
  var button = form.querySelector('.btn-submit');
  var buttonLabel = button ? button.innerHTML : '';
  var submitting = false;

  // Rimuove eventuali tag HTML dai valori inseriti
  function sanitize(value) {
    return String(value == null ? '' : value).replace(/<[^>]*>/g, '').trim();
  }

  // Esito positivo: il form lascia il posto al messaggio di conferma
  function showSuccess() {
    var success = document.getElementById('form-success');
    if (!success) {
      showStatus('Candidatura ricevuta.', 'success');
      return;
    }
    var box = success.parentNode;
    Array.prototype.forEach.call(box.children, function (el) {
      if (el !== success && el.tagName !== 'NOSCRIPT') el.hidden = true;
    });
    success.hidden = false;
    success.focus();
  }

  function showStatus(message, kind) {
    if (!statusEl) return;
    statusEl.textContent = message;
    statusEl.className = 'form-status ' + (kind === 'error' ? 'is-error' : 'is-success');
    statusEl.hidden = false;
  }

  // ─── Validazione per campo, con messaggi inline ───
  function phoneOk(v) {
    var digits = v.replace(/\D/g, '');
    return /^\+?[\d\s().\-\/]+$/.test(v) && digits.length >= 8 && digits.length <= 15;
  }

  function emailOk(v) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
  }

  function linkedinOk(v) {
    return v === '' || /(linkedin\.com\/(in|pub|company)\/[^\s\/]+|lnkd\.in\/\S+)/i.test(v);
  }

  var rules = {
    nome: function (v) { return v ? '' : 'Inserisci il tuo nome.'; },
    cognome: function (v) { return v ? '' : 'Inserisci il tuo cognome.'; },
    telefono: function (v) {
      if (!v) return 'Inserisci un numero di telefono.';
      return phoneOk(v) ? '' : 'Controlla il numero: usa cifre, spazi e prefisso, es. +39 333 123 4567.';
    },
    email: function (v) {
      if (!v) return 'Inserisci la tua email.';
      return emailOk(v) ? '' : 'Controlla l’email: deve essere nel formato nome@dominio.it.';
    },
    abilitazione: function (v) { return v ? '' : 'Scegli una risposta sull’abilitazione.'; },
    esperienza: function (v) { return v ? '' : 'Indica i tuoi anni di esperienza.'; },
    linkedin: function (v) {
      return linkedinOk(v) ? '' : 'Incolla il link al tuo profilo LinkedIn (es. linkedin.com/in/nome) oppure lascia il campo vuoto.';
    },
    privacy: function (v, el) { return el.checked ? '' : 'Per inviare la candidatura serve il consenso al trattamento dei dati.'; }
  };

  function setFieldError(name, message) {
    var el = form.elements[name];
    var err = document.getElementById('err-' + name);
    if (!el || !err) return;
    err.textContent = message;
    err.hidden = !message;
    if (message) el.setAttribute('aria-invalid', 'true');
    else el.removeAttribute('aria-invalid');
  }

  function validateField(name) {
    var el = form.elements[name];
    var message = rules[name](sanitize(el.value), el);
    setFieldError(name, message);
    return message;
  }

  function validateAll() {
    var firstInvalid = null;
    Object.keys(rules).forEach(function (name) {
      if (validateField(name) && !firstInvalid) firstInvalid = form.elements[name];
    });
    return firstInvalid;
  }

  // Dopo il primo errore, il campo si ricontrolla mentre l'utente corregge
  Object.keys(rules).forEach(function (name) {
    var el = form.elements[name];
    if (!el) return;
    var evt = (el.type === 'checkbox' || el.tagName === 'SELECT') ? 'change' : 'input';
    el.addEventListener(evt, function () {
      if (el.getAttribute('aria-invalid') === 'true') validateField(name);
    });
    el.addEventListener('blur', function () {
      if (el.value && el.type !== 'checkbox') validateField(name);
    });
  });

  function setBusy(busy, label) {
    submitting = busy;
    if (!button) return;
    button.disabled = busy;
    button.setAttribute('aria-busy', busy ? 'true' : 'false');
    if (label) button.textContent = label;
  }

  form.addEventListener('submit', function (ev) {
    ev.preventDefault();
    if (submitting) return;
    if (statusEl) statusEl.hidden = true;

    // Honeypot: se compilato è quasi certamente un bot. Mostriamo lo stesso esito
    // positivo per non segnalargli il filtro, ma non inviamo nulla.
    if (form.sito_web && form.sito_web.value.trim() !== '') {
      showSuccess();
      return;
    }

    var firstInvalid = validateAll();
    if (firstInvalid) {
      firstInvalid.focus();
      return;
    }

    var payload = {
      nome: sanitize(form.nome.value),
      cognome: sanitize(form.cognome.value),
      telefono: sanitize(form.telefono.value),
      email: sanitize(form.email.value),
      area: sanitize(form.area.value),
      abilitazione: sanitize(form.abilitazione.value),
      esperienza: sanitize(form.esperienza.value),
      linkedin: sanitize(form.linkedin.value),
      privacy: form.privacy.checked
    };

    setBusy(true, 'Invio in corso…');

    var controller = 'AbortController' in window ? new AbortController() : null;
    var timer = controller ? setTimeout(function () { controller.abort(); }, TIMEOUT_MS) : null;

    fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      signal: controller ? controller.signal : undefined
    })
      .then(function (res) {
        if (timer) clearTimeout(timer);
        if (!res.ok) throw new Error('HTTP ' + res.status);
        form.reset();
        // Resta disabilitato: evita invii doppi della stessa candidatura
        setBusy(true, 'Candidatura inviata');
        showSuccess();

        // Evento dataLayer per il tag di conversione Google Ads in GTM.
        // Nome evento dedicato (diverso da "lead_form_submit" usato su LP1/LP3)
        // per non confondere la conversione recruiting con quella venditori.
        if (window.dataLayer) {
          window.dataLayer.push({ event: 'recruiting_form_submit', area: payload.area });
        }
      })
      .catch(function (err) {
        if (timer) clearTimeout(timer);
        var why = err && err.name === 'AbortError'
          ? 'Il server non ha risposto in tempo.'
          : 'Non siamo riusciti a inviare la candidatura.';
        showStatus(why + ' I dati che hai inserito sono ancora qui: riprova tra poco, oppure scrivici a ' + CONTACT_EMAIL + '.', 'error');
        setBusy(false);
        if (button) button.innerHTML = buttonLabel;
      });
  });
})();

// ─── Video di Filippo nella candidatura ───
// Compare solo se nell'HTML è indicato un file (data-src); altrimenti resta nascosto.
(function () {
  var box = document.querySelector('.form-video');
  var src = box && box.getAttribute('data-src');
  if (!src) return;

  var video = document.createElement('video');
  video.controls = true;
  video.preload = 'metadata';
  video.playsInline = true;
  var poster = box.getAttribute('data-poster');
  if (poster) video.poster = poster;
  video.src = src;
  box.appendChild(video);
  box.hidden = false;
})();
