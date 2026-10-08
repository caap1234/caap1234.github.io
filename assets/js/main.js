document.addEventListener('DOMContentLoaded', () => {
  // ==========================================================================
  // THEME SWITCHER LOGIC (DARK / LIGHT MODE)
  // ==========================================================================
  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  
  // 1. Check local storage or system preferences
  const savedTheme = localStorage.getItem('theme');
  const systemPrefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
  
  let currentTheme = 'dark'; // Default to dark
  if (savedTheme) {
    currentTheme = savedTheme;
  } else if (systemPrefersLight) {
    currentTheme = 'light';
  }
  
  // Apply initial theme
  setTheme(currentTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const newTheme = (document.documentElement.getAttribute('data-theme') === 'light') ? 'dark' : 'light';
      setTheme(newTheme);
    });
  }

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
    if (themeIcon) {
      if (theme === 'light') {
        themeIcon.className = 'fas fa-sun';
        themeToggleBtn.setAttribute('title', 'Cambiar a Modo Oscuro');
      } else {
        themeIcon.className = 'fas fa-moon';
        themeToggleBtn.setAttribute('title', 'Cambiar a Modo Claro');
      }
    }
  }

  // ==========================================================================
  // COMMAND COPY FUNCTIONALITY
  // ==========================================================================
  const copyButtons = document.querySelectorAll('.copy-btn');
  
  copyButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      let textToCopy = '';
      
      if (targetId) {
        const el = document.getElementById(targetId);
        if (el) textToCopy = el.innerText || el.textContent;
      } else {
        const cmdBox = btn.closest('.cmd-box');
        if (cmdBox) {
          const cmdText = cmdBox.querySelector('.cmd-text');
          if (cmdText) textToCopy = cmdText.innerText || cmdText.textContent;
        }
      }
      
      if (textToCopy) {
        navigator.clipboard.writeText(textToCopy.trim()).then(() => {
          const originalText = btn.innerHTML;
          btn.innerHTML = '✓ Copiado';
          btn.classList.add('copied');
          
          setTimeout(() => {
            btn.innerHTML = originalText;
            btn.classList.remove('copied');
          }, 2000);
        }).catch(err => {
          console.error('Error al copiar comando: ', err);
        });
      }
    });
  });

  // ==========================================================================
  // FILTER BUTTONS FOR HTB WRITEUPS
  // ==========================================================================
  const filterBtns = document.querySelectorAll('.filter-btn');
  const writeupCards = document.querySelectorAll('.writeup-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      const filter = btn.getAttribute('data-filter');
      
      writeupCards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-difficulty') === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
});
