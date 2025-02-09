// languageToggle.js
function setupLanguageToggle() {
    const languageToggle = document.getElementById('languageToggle');
    let isEnglish = localStorage.getItem('isEnglish') === 'true';

    // Set initial state
    languageToggle.checked = isEnglish;

    function updateLanguage() {
      document.documentElement.lang = isEnglish ? 'en' : 'es';
      document.querySelectorAll('[data-lang]').forEach(el => {
        el.classList.toggle('hidden', el.getAttribute('data-lang') !== (isEnglish ? 'en' : 'es'));
      });
    }

    languageToggle.addEventListener('change', () => {
      isEnglish = languageToggle.checked;
      localStorage.setItem('isEnglish', isEnglish.toString());
      updateLanguage();
    });

    // Initial language set
    updateLanguage();
}

  // Run the setup function when the DOM is ready
  document.addEventListener('astro:page-load', setupLanguageToggle);

  // Also run it immediately in case we're not using View Transitions
  setupLanguageToggle();