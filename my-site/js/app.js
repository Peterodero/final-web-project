// NAV TOGGLE (mobile)
const menuBtn = document.getElementById('menuBtn');
const mainNav = document.getElementById('mainNav');
if(menuBtn){
  menuBtn.addEventListener('click', () => {
    const isOpen = mainNav.style.display === 'flex';
    mainNav.style.display = isOpen ? '' : 'flex';
    menuBtn.setAttribute('aria-expanded', String(!isOpen));
  });
}

// SIMPLE CONTACT FORM VALIDATION (if contact page includes #contactForm)
const form = document.getElementById('contactForm');
if(form){
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.querySelector('[name="name"]').value.trim();
    const email = form.querySelector('[name="email"]').value.trim();
    const msg = form.querySelector('[name="message"]').value.trim();
    let ok = true;
    if(!name){ ok=false; alert('Please enter your name');}
    if(!/\S+@\S+\.\S+/.test(email)){ ok=false; alert('Enter a valid email');}
    if(msg.length < 10){ ok=false; alert('Message too short');}
    if(ok){
      // in real site: send to backend; here show success
      alert('Form submitted (demo). Thank you!');
      form.reset();
    }
  });
}
