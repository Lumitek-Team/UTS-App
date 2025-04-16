document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const leftSidebar = document.querySelector('.left-sidebar');
    const container = document.querySelector('.container');
    
    // Create overlay element
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    overlay.style.display = 'none';
    document.body.appendChild(overlay);
    
    // Toggle left sidebar on mobile
    mobileMenuToggle.addEventListener('click', function() {
        leftSidebar.classList.toggle('active');
        
        // if (leftSidebar.classList.contains('active')) {
        //     overlay.style.display = 'block';
        //     document.body.style.overflow = 'hidden'; // Prevent scrolling
        // } else {
        //     overlay.style.display = 'none';
        //     document.body.style.overflow = ''; // Allow scrolling
        // }
    });
    
    // Close sidebar when clicking on overlay
    // overlay.addEventListener('click', function() {
    //     leftSidebar.classList.remove('active');
    //     overlay.style.display = 'none';
    //     document.body.style.overflow = ''; // Allow scrolling
    // });
    
    // Create a placeholder avatar image if needed
    const avatarPlaceholder = '../assets/img/avatar-placeholder.png';
    const avatars = document.querySelectorAll('.avatar img, .user-avatar img, .suggestion-avatar img');
    
    // Check if we need to create a placeholder avatar image
    const checkImage = (img) => {
        img.onerror = function() {
            this.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><circle cx="20" cy="20" r="20" fill="%23444"/><text x="50%" y="50%" font-size="20" text-anchor="middle" dy=".3em" fill="%23666">U</text></svg>';
        };
    };
    
    avatars.forEach(checkImage);
});

document.addEventListener('DOMContentLoaded', () => {
    const scrollButtons = document.querySelectorAll('.scroll-btn');

    let imageContainers = document.getElementsByClassName('image-container')[0];
    // get width imagecontainer
    let imageContainerWidth = imageContainers.offsetWidth;
    
    scrollButtons.forEach(button => {
        button.addEventListener('click', () => {
            const direction = button.classList.contains('left') ? -1 : 1;
            const wrapper = button.parentElement.querySelector('.images-wrapper');
            wrapper.scrollBy({
                left: (direction * imageContainerWidth) + 15,
                behavior: 'smooth'
            });
        });
    });
});