'use strict';

const projects = [...document.querySelectorAll(`a[data-project]`)];

function toggleActive(e) {
  e.preventDefault();
  let project = document.querySelector(`div[data-description=${this.dataset.project}]`);

  this.classList.toggle('active');
  project.classList.toggle('hidden');
};

projects.forEach(project => project.addEventListener('click', toggleActive));
