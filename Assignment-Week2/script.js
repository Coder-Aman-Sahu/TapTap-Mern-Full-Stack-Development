document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const options = document.querySelectorAll('.option');
    
    menuToggle.addEventListener('click', function() {
      menuToggle.classList.toggle('active');
      dropdownMenu.classList.toggle('active');
    });
    
    options.forEach(option => {
      option.addEventListener('click', function() {
        const value = this.getAttribute('data-value');
        const text = this.querySelector('.text').textContent;
        
        menuToggle.querySelector('.text').textContent = text;
        
        const toggleIcon = menuToggle.querySelector('.icon');
        toggleIcon.classList.remove('linkedin', 'facebook', 'youtube', 'twitter');
        
        toggleIcon.classList.add(value);
        
        toggleIcon.innerHTML = this.querySelector('.icon').innerHTML;
        
        menuToggle.classList.remove('active');
        dropdownMenu.classList.remove('active');
      });
    });
    
    document.addEventListener('click', function(e) {
      const isClickInside = menuToggle.contains(e.target) || dropdownMenu.contains(e.target);
      
      if (!isClickInside && dropdownMenu.classList.contains('active')) {
        menuToggle.classList.remove('active');
        dropdownMenu.classList.remove('active');
      }
    });
  });