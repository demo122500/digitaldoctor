// active state js
document.addEventListener('DOMContentLoaded', () => {
  const menuLinks = document.querySelectorAll('.nav-bar ul li .menu-link');

  // Function to set the active link based on localStorage
  const setActiveLink = () => {
    const activeLink = localStorage.getItem('activeLink');
    if (activeLink) {
      menuLinks.forEach(link => {
        link.classList.remove('active');
        if (link.href === activeLink) {
          link.classList.add('active');
        }
      });
    }
  };

  // Set the active link on page load
  setActiveLink();

  menuLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      // Check if the link is one of the specified menu items
      const menuItem = event.currentTarget.textContent.trim();
      const specificMenus = ["ABOUT US", "LATEST NEWS", "SHOP", "CONTACT US"];

      if (specificMenus.includes(menuItem.toUpperCase())) {
        // Save the clicked link to localStorage
        localStorage.setItem('activeLink', event.currentTarget.href);

        // Add active class to the clicked menu link
        menuLinks.forEach(link => link.classList.remove('active'));
        event.currentTarget.classList.add('active');
      } else {
        // Remove active class if it's not a specified menu item
        localStorage.removeItem('activeLink');
      }
    });
  });
});