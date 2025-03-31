// ====== DOM Elements ======
const navLinks = document.querySelectorAll('nav a');
const header = document.querySelector('header');
const modal = document.querySelector('.modal');
const modalImg = document.querySelector('.modal-doc');
const closeModal = document.querySelector('.close-modal');
const viewBtn = document.querySelector('.view-btn');

// ====== Smooth Scrolling ======
function smoothScrollTo(targetId) {
    const target = document.querySelector(targetId);
    if (target) {
        const headerHeight = header.offsetHeight;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = targetPosition - headerHeight;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
}

// Attach to all navigation links
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        smoothScrollTo(this.getAttribute('href'));
    });
});

// ====== Modal Handling ======
function openModal() {
    const certificateImg = document.querySelector('.certificate-preview img').src;
    modalImg.src = certificateImg;
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeModalHandler() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Event Listeners
viewBtn.addEventListener('click', openModal);
closeModal.addEventListener('click', closeModalHandler);
modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModalHandler();
});

// ====== Scroll Animations ======
function animateOnScroll() {
    const elements = document.querySelectorAll('.animate-slide');
    const windowHeight = window.innerHeight;
    const triggerOffset = windowHeight * 0.8;

    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;

        if (elementPosition < triggerOffset) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// ====== Initialize ======
window.addEventListener('scroll', () => {
    // Header shadow on scroll
    header.classList.toggle('scrolled', window.scrollY > 50);
    
    // Trigger animations
    animateOnScroll();
});

window.addEventListener('load', () => {
    // Handle direct anchor links on page load
    if (window.location.hash) {
        setTimeout(() => {
            smoothScrollTo(window.location.hash);
        }, 100);
    }
    
    // Initial animation trigger
    animateOnScroll();
});

// Initialize animation states
document.querySelectorAll('.animate-slide').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
});
document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const modal = document.querySelector('.modal');
    const modalImg = document.querySelector('.modal-image');
    const closeBtn = document.querySelector('.close-modal');
    const viewBtn = document.querySelector('.view-btn');
    const certificateImg = document.querySelector('.certificate-preview img');
  
    // Open modal when view button is clicked
    viewBtn.addEventListener('click', function() {
      if (certificateImg && certificateImg.src) {
        modal.style.display = 'flex';
        modalImg.src = certificateImg.src;
        document.body.style.overflow = 'hidden'; // Prevent scrolling behind modal
      }
    });
  
    // Close modal when X is clicked
    closeBtn.addEventListener('click', function() {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    });
  
    // Close modal when clicking outside image
    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
      }
    });
  
    // Close modal with ESC key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && modal.style.display === 'flex') {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
      }
    });
  });