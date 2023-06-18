document.addEventListener('DOMContentLoaded', function(event) {
    const menu = document.querySelector('.menu');
  
    function updateMenuPosition() {
      const menuHeight = menu.offsetHeight;
      const currentOffset = window.pageYOffset || document.documentElement.scrollTop;
  
      if (currentOffset >= menuHeight) {
        menu.classList.add('fixed');
      } else {
        menu.classList.remove('fixed');
      }
    }
  
    updateMenuPosition();
  
    window.addEventListener('scroll', function() {
      updateMenuPosition();
    });
  
    window.addEventListener('resize', function() {
      updateMenuPosition();
    });
  });
    