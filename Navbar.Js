const tabs = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('section');

tabs.forEach(tab => {
  tab.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = tab.getAttribute('data-target');
    sections.forEach(section => {
      section.classList.add("hide");
      section.classList.remove("show");
    });

    document.getElementById(targetId).classList.remove("hide");
    document.getElementById(targetId).classList.add("show");
  });
});
