const projects = document.querySelectorAll('.project');

projects.forEach((project) => {
    const star = document.createElement('img');
    star.src = 'images/star.svg';
    star.classList.add('star-img');
    const eye = document.createElement('img');
    eye.src = 'images/eye.svg';
    eye.classList.add('eye-img');
    const fork = document.createElement('img');
    fork.src = 'images/fork.svg';
    fork.classList.add('fork-img');
    project.appendChild(star);
    project.appendChild(eye);
    project.appendChild(fork);
});