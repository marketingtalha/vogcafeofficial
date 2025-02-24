// Add active class to the current navigation item
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-links a');
  
  // Cart functionality
  const cartIcon = document.querySelector('.cart-icon');
  const body = document.querySelector('body');
  const searchContainer = document.querySelector('.search-container');
  const searchIcon = searchContainer.querySelector('.search-icon');
  const searchInput = searchContainer.querySelector('.search-input');
  
  // Create the cart container
  const cartContainer = document.createElement('div');
  cartContainer.classList.add('cart-container');
  cartContainer.innerHTML = `
      <div class="cart-header">
          <h2>Shopping Cart</h2>
          <span class="close-cart">&times;</span>
      </div>
      <div class="LIBERICA COFFEE">
          <div class="cart-item">
              <img src="https://via.placeholder.com/50" alt="Item 1">
              <span>LIBERICA BEANS</span>
              <span>$08.11/-</span>
          </div>
          <div class="cart-item">
              <img src="https://via.placeholder.com/50" alt="Item 2">
              <span>ARABICA BEANS</span>
              <span>$06.99/-</span>
          </div>
          <div class="cart-item">
              <img src="https://via.placeholder.com/50" alt="Item 3">
              <span>ROBUSTA BEANS</span>
              <span>$03.23/-</span>
          </div>
          <div class="cart-item">
              <img src="https://via.placeholder.com/50" alt="Item 4">
              <span>EXCELSA BEANS</span>
              <span>$07.99/-</span>
          </div>
      </div>
      <button class="checkout-btn">Checkout Now</button>
  `;
  body.appendChild(cartContainer);
  
  // Open cart with animation
  cartIcon.addEventListener('click', () => {
      cartContainer.style.right = '0';
  });
  
  // Close cart with animation
  document.querySelector('.close-cart').addEventListener('click', () => {
      cartContainer.style.right = '-300px';
  });

  // Search animation functionality
  searchIcon.addEventListener('click', () => {
      searchContainer.classList.toggle('active');
      if (searchContainer.classList.contains('active')) {
          searchInput.focus();
      }
  });

  // Close search when clicking outside
  document.addEventListener('click', (e) => {
      if (!searchContainer.contains(e.target) && !searchIcon.contains(e.target)) {
          searchContainer.classList.remove('active');
      }
  });

  // Product card hover effects
  document.querySelectorAll('.product-card').forEach(card => {
      const buttons = card.querySelector('.action-buttons');
      
      card.addEventListener('mouseenter', () => {
          buttons.style.opacity = '1';
          buttons.style.transform = 'translateX(0)';
      });
      
      card.addEventListener('mouseleave', () => {
          buttons.style.opacity = '0';
          buttons.style.transform = 'translateX(20px)';
      });
  });
  
  // Action buttons click effects
  document.querySelectorAll('.action-buttons button').forEach(button => {
      button.addEventListener('click', (e) => {
          e.preventDefault();
          button.style.transform = 'scale(0.95)';
          setTimeout(() => {
              button.style.transform = 'scale(1)';
          }, 100);
      });
  });

  // Map zoom controls
  let zoom = 14;

  window.zoomIn = function() {
      zoom = Math.min(zoom + 1, 20);
      updateMapZoom();
  };

  window.zoomOut = function() {
      zoom = Math.max(zoom - 1, 1);
      updateMapZoom();
  };

  function updateMapZoom() {
      const iframe = document.querySelector('.map-container iframe');
      const src = iframe.src;
      const newSrc = src.replace(/!(\d+)z/, `!${zoom}z`);
      iframe.src = newSrc;
  }

  // Form handling
  window.handleSubmit = function(event) {
      event.preventDefault();
      
      const form = event.target;
      const formData = new FormData(form);
      
      console.log('Form submitted:', {
          name: formData.get('name'),
          email: formData.get('email'),
          number: formData.get('number')
      });
      
      form.reset();
      alert('Thank you for your message. We will contact you soon!');
  };

  // Blog card hover effects
  document.querySelectorAll('.blog-card').forEach(card => {
      card.addEventListener('mouseenter', () => {
          card.style.transform = 'translateY(-5px)';
      });
      
      card.addEventListener('mouseleave', () => {
          card.style.transform = 'translateY(0)';
      });
  });
  
  // Read more button click handlers
  document.querySelectorAll('.read-more').forEach(button => {
      button.addEventListener('click', () => {
          console.log('Read more clicked');
      });
  });

  // Smooth scrolling for navigation links
  navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
          e.preventDefault();
          const targetId = link.getAttribute('href').substring(1);
          const targetSection = document.getElementById(targetId);
          
          if (targetSection) {
              targetSection.scrollIntoView({ behavior: 'smooth' });
          }
      });
  });

  // Update active navigation link on scroll
  function updateActiveLink() {
      const fromTop = window.scrollY + 100;

      sections.forEach(section => {
          const link = document.querySelector(`.nav-links a[href="#${section.id}"]`);
          
          if (
              section.offsetTop <= fromTop &&
              section.offsetTop + section.offsetHeight > fromTop
          ) {
              link.classList.add('active');
          } else {
              link.classList.remove('active');
          }
      });
  }

  window.addEventListener('scroll', updateActiveLink);
  updateActiveLink();
});
// Add this code at the beginning of your existing JavaScript
document.addEventListener('DOMContentLoaded', () => {
    const cartIcon = document.querySelector('.cart-icon');
    const cartContainer = document.querySelector('.cart-container');
    const closeCart = document.querySelector('.close-cart');
    const body = document.body;
  
    // Toggle cart
    cartIcon.addEventListener('click', () => {
      cartContainer.style.right = '0';
      body.style.overflow = 'hidden'; // Prevent scrolling when cart is open
    });
  
    // Close cart
    closeCart.addEventListener('click', () => {
      cartContainer.style.right = '-100%';
      body.style.overflow = ''; // Restore scrolling
    });
  
    // Close cart when clicking outside
    document.addEventListener('click', (e) => {
      if (!cartContainer.contains(e.target) && !cartIcon.contains(e.target)) {
        cartContainer.style.right = '-100%';
        body.style.overflow = '';
      }
    });
  
    // Quantity buttons functionality
    document.querySelectorAll('.quantity-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const input = btn.parentElement.querySelector('.quantity-input');
        const currentValue = parseInt(input.value);
        
        if (btn.classList.contains('decrease') && currentValue > 1) {
          input.value = currentValue - 1;
        } else if (btn.classList.contains('increase')) {
          input.value = currentValue + 1;
        }
      });
    });
  });