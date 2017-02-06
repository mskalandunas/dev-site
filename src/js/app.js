'use strict';

const projects = [...document.querySelectorAll(`a[data-project]`)];
const active   = {
  'redirect'     : false,
  'architect'    : false,
  'riverine' : false,
  'mosaicmusic'  : false
};

function toggleActive(e) {
  e.preventDefault();
  let project = this.dataset.project;
  let current = document.querySelector(`div[data-description=${project}]`);

  for (let i in active) {
    if (active[i] && i !== project) {
      let a = document.querySelector(`a[data-project="${i}"]`);
      let b = document.querySelector(`div[data-description=${i}]`);

      a.classList.toggle('active');
      b.classList.toggle('hidden');
      active[i] = false;
    };
  };

  !active[project] ? active[project] = true : active[project] = false;
  this.classList.toggle('active');
  current.classList.toggle('hidden');
};

projects.forEach(project => project.addEventListener('click', toggleActive));
