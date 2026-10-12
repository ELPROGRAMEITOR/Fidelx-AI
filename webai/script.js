document.body.classList.add('page-enter');

const progress = document.createElement('div');
progress.className = 'scroll-progress';
progress.innerHTML = '<span></span>';
document.body.prepend(progress);

const progressBar = progress.firstElementChild;
const updateProgress = () => {
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  progressBar.style.width = `${maxScroll ? (window.scrollY / maxScroll) * 100 : 0}%`;
};
window.addEventListener('scroll', updateProgress, { passive: true });
updateProgress();

document.querySelectorAll('.nav a').forEach((link) => {
  const linkPath = link.getAttribute('href');
  if (linkPath && !linkPath.startsWith('#') && window.location.pathname.endsWith(linkPath)) {
    link.classList.add('active');
  }
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

const form = document.querySelector('.contact-form');
form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const note = document.createElement('p');
  note.className = 'form-success';
  note.textContent = 'Mensaje registrado en modo demo. Conecta un servicio de envío para recibirlo por correo.';
  form.querySelector('.form-success')?.remove();
  form.append(note);
});
