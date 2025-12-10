// script.js — FlowMaster Plumbing

// Wait for DOM
document.addEventListener('DOMContentLoaded', function(){
  // Hamburger menu toggle (works across pages)
  const hamburger = document.getElementById('hamburger');
  const mainNav = document.getElementById('mainNav');
  if(hamburger && mainNav){
    hamburger.addEventListener('click', function(){
      mainNav.classList.toggle('active');
      hamburger.classList.toggle('active');
    });
  }

  // Initialize Leaflet map if #map exists (contact page)
  if(document.getElementById('map')){
    try{
      const map = L.map('map').setView([-33.9249, 18.4241], 13);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap contributors'
      }).addTo(map);

      // Custom marker
      const marker = L.marker([-33.9249, 18.4241]).addTo(map);
      marker.bindPopup('<b>FlowMaster Plumbing HQ</b><br>Always here for you!');
    }catch(e){
      console.error('Leaflet map failed to initialize:', e);
    }
  }

  // Form validation for enquiry form
  const enquiryForm = document.getElementById('enquiryForm');
  if(enquiryForm){
    enquiryForm.addEventListener('submit', function(e){
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const serviceType = document.getElementById('serviceType').value.trim();
      const message = document.getElementById('message').value.trim();

      if(!name || !email || !serviceType || !message){
        alert('Please fill in all fields');
        return;
      }

      alert('Thank you! Your request has been sent to FlowMaster.');
      enquiryForm.reset();
    });
  }

  // Form validation for contact form
  const contactForm = document.getElementById('contactForm');
  if(contactForm){
    contactForm.addEventListener('submit', function(e){
      e.preventDefault();
      const cname = document.getElementById('cname').value.trim();
      const cemail = document.getElementById('cemail').value.trim();
      const cphone = document.getElementById('cphone').value.trim();
      const cmessage = document.getElementById('cmessage').value.trim();

      if(!cname || !cemail || !cphone || !cmessage){
        alert('Please fill in all fields');
        return;
      }

      alert('Thank you! Your request has been sent to FlowMaster.');
      contactForm.reset();
    });
  }

  // Services search filter (services.html)
  const searchBar = document.getElementById('searchBar');
  if(searchBar){
    const items = document.querySelectorAll('.service-item');
    searchBar.addEventListener('keyup', function(e){
      const term = e.target.value.toLowerCase();
      items.forEach(function(item){
        const txt = item.innerText.toLowerCase();
        if(txt.indexOf(term) === -1){
          item.style.display = 'none';
        } else {
          item.style.display = 'block';
        }
      });
    });
  }

});
