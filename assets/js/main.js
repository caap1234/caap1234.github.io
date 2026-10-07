document.addEventListener('DOMContentLoaded', () => {
  // Command Copy Functionality
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

  // Filter Buttons for HTB Writeups
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
