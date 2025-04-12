const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  document.body.classList.toggle('no-scroll');
});

document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
  document.body.classList.remove('no-scroll');
}));

const projects = [
  {
    id: 'bg-pro1',
    name: 'E-Short Courses',
    description: 'This is an app designed to allow students to take KNUST facilitated Short courses. Enrolled pupils learn and take quizzes online',
    featuredImage: './img/shortcourse.png',
    technologies: ['React', 'Redux', 'JavaScript', 'Firebase'],
    seeProject: 'See Project',
    linkLive: '<a href="short-courses-eight.vercel.app" target="blank">See Live</a>',
    linkSource: '<a href="https://github.com/Mylo16/short-courses" target="blank">See Source</a>',
  },
  {
    id: 'bg-pro2',
    name: 'Student Dashboard',
    description: 'This app allows a logged in student to take quizzes and track their records as well as getting access to course materials.',
    featuredImage: './img/ee-prep.png',
    technologies: ['React/Redux', 'Ruby on Rails', 'JavaScript',],
    seeProject: 'See Project',
    linkLive: '<a href="https://ee-prep.vercel.app/" target="blank">See Live</a>',
    linkSource: '<a href="https://github.com/Mylo16/ee-prep" target="blank">See Source</a>',
  },
  {
    id: 'bg-pro3',
    name: 'E-Stock Management',
    description: 'This app helps manage inventory and resources at the KNUST E-Learning centre.',
    featuredImage: './img/estock.png',
    technologies: ['React', 'Redux', 'JavaScript',],
    seeProject: 'See Project',
    linkLive: '<a href="http://inventory-management-gold-five.vercel.app/inventory" target="blank">See Live</a>',
    linkSource: '<a href="https://github.com/Mylo16/inventory-management" target="blank">See Source</a>',
  },
  {
    id: 'bg-pro4',
    name: 'Space Travelers',
    description: 'In this project, I collaborated with my partners to use Kanban board to distribute tasks. Data was fetched from an external API. We used Redux store to update the state of the application.',
    featuredImage: './img/space.JPG',
    technologies: ['React', 'Redux', 'JavaScript'],
    seeProject: 'See Project',
    linkLive: '<a href="https://react-redux-group-project.onrender.com/" target="blank">See Live</a>',
    linkSource: '<a href="https://github.com/fpsapc/reactreduxgroupproject" target="blank">See Source</a>',
  },
  {
    id: 'bg-pro5',
    name: 'To Do List',
    description: 'You can add or remove your daily tasks list here and tick every task acording to its completion.',
    featuredImage: './img/todos.png',
    technologies: ['React', 'Redux', 'JavaScript'],
    seeProject: 'See Project',
    linkLive: '<a href="https://todo-list-gubw.onrender.com/" target="blank">See Live</a>',
    linkSource: '<a href="https://github.com/Mylo16/react-todo" target="blank">See Source</a>',
  },
  {
    id: 'bg-pro6',
    name: 'Dani-Mylo Movies',
    description: 'API-based web application built with Vanilla JavaScript ES6 and pure CSS. I collaborated with my partner to use a range of tools and best practices to ensure high-quality code and effective collaboration.',
    featuredImage: './img/movies.png',
    technologies: ['Jest', 'Webpacks', 'JavaScript',],
    seeProject: 'See Project',
    linkLive: '<a href="https://danifromecuador.github.io/api-webapp/dist/" target="blank">See Live</a>',
    linkSource: '<a href="https://github.com/danifromecuador/api-webapp" target="blank">See Source</a>',
  },
];

const projectsContainer = document.getElementById('projects-container');

projects.map((card) => {
  projectsContainer.innerHTML += `
  <div id="${card.id}" class="project-card">
          <div class="card-text flex flex-column">
            <h2 class="work-subtitle protitle">
            ${card.name}
            </h2>
            <p class="work-details prodetails">${card.description}
            </p>
            <div class="flex">
              <p class="flex-item item2 proitem2">${card.technologies[0]}</p>
              <p class="flex-item item3 proitem3">${card.technologies[1]}</p>
              <p class="flex-item item1 proitem1">${card.technologies[2]}</p>
            </div>
          </div>
          <button class="work-button probutton ">
          ${card.seeProject}
          </button>
  </div>
  `;
  return ('');
});

const allProjects = [
  {
    id: 'projects',
    name: 'Student Dashboard',
    description: 'This app allows a logged-in user to book appointment with a doctor of choice from a clinic.',
    featuredImage: './img/ee-prep.png',
    technologies: ['React', 'Redux', 'Ruby on Rails'],
    seeProject: 'See Project',
    linkLive: '<a href="https://ee-prep.vercel.app/" target="blank">See Live</a>',
    linkSource: '<a href="https://github.com/Mylo16/ee-prep/" target="blank">See Source</a>',
  },
  {
    id: 'bg-pro1',
    name: 'E-Short Courses',
    description: 'This is an app designed to allow students to take KNUST facilitated Short courses. Enrolled pupils learn and take quizzes online',
    featuredImage: './img/shortcourse.png',
    technologies: ['React', 'Redux', 'JavaScript', 'Firebase'],
    seeProject: 'See Project',
    linkLive: '<a href="http://short-courses-eight.vercel.app" target="blank">See Live</a>',
    linkSource: '<a href="https://github.com/Mylo16/short-courses" target="blank">See Source</a>',
  },
  {
    id: 'bg-pro2',
    name: 'Student Dashboard',
    description: 'This app allows a logged in user to take quizzes and track their records as well as getting access to course materials',
    featuredImage: './img/ee-prep.png',
    technologies: ['React/Redux', 'Ruby on Rails', 'JavaScript',],
    seeProject: 'See Project',
    linkLive: '<a href="https://ee-prep.vercel.app/" target="blank">See Live</a>',
    linkSource: '<a href="https://github.com/Mylo16/ee-prep" target="blank">See Source</a>',
  },
  {
    id: 'bg-pro3',
    name: 'E-Stock Management',
    description: 'This app helps manage inventory and resources at the KNUST E-Learning centre.',
    featuredImage: './img/estock.png',
    technologies: ['React', 'Redux', 'JavaScript',],
    seeProject: 'See Project',
    linkLive: '<a href="http://inventory-management-gold-five.vercel.app/inventory" target="blank">See Live</a>',
    linkSource: '<a href="https://github.com/Mylo16/inventory-management" target="blank">See Source</a>',
  },
  {
    id: 'bg-pro4',
    name: 'Space Travelers',
    description: 'In this project, I collaborated with my partners to use Kanban board to distribute tasks. Data was fetched from an external API. We used Redux store to update the state of the application.',
    featuredImage: './img/space.JPG',
    technologies: ['React', 'Redux', 'JavaScript'],
    seeProject: 'See Project',
    linkLive: '<a href="https://react-redux-group-project.onrender.com/" target="blank">See Live</a>',
    linkSource: '<a href="https://github.com/fpsapc/reactreduxgroupproject" target="blank">See Source</a>',
  },
  {
    id: 'bg-pro5',
    name: 'To Do List',
    description: 'You can add or remove your daily tasks list here and tick every task acording to its completion.',
    featuredImage: './img/todos.png',
    technologies: ['React', 'Redux', 'JavaScript'],
    seeProject: 'See Project',
    linkLive: '<a href="https://todo-list-gubw.onrender.com/" target="blank">See Live</a>',
    linkSource: '<a href="https://github.com/Mylo16/react-todo" target="blank">See Source</a>',
  },
  {
    id: 'bg-pro6',
    name: 'Dani-Mylo Movies',
    description: 'API-based web application built with Vanilla JavaScript ES6 and pure CSS. I collaborated with my partner to use a range of tools and best practices to ensure high-quality code and effective collaboration.',
    featuredImage: './img/movies.png',
    technologies: ['Jest', 'Webpacks', 'JavaScript',],
    seeProject: 'See Project',
    linkLive: '<a href="https://danifromecuador.github.io/api-webapp/dist/" target="blank">See Live</a>',
    linkSource: '<a href="https://github.com/danifromecuador/api-webapp" target="blank">See Source</a>',
  },
];
// pop-up section
const seeProject = document.querySelectorAll('.work-button');
const popMenu = document.querySelector('.seePopup');

seeProject.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    document.body.classList.toggle('no-scroll');
    popMenu.classList.add('act');
    popMenu.innerHTML = `    
    <section id="popup" class="popup">
        <div id="popup-title">
          <h3 class="popup-heading flex">${allProjects[index].name}<h3>
            <span class="close-btn">&#x2715;</span>
            <div class="flex
            flex-start">
              <p class="flex-item">${allProjects[index].technologies[0]}
              </p>
              <p class="flex-item">${allProjects[index].technologies[1]}
              </p>
              <p class="flex-item">${allProjects[index].technologies[2]}
              </p>
          </div>
        </div>
          <div class="popup-card">
             <div id="popup-image"><img src="${allProjects[index].featuredImage}" alt="something here">
              </div>
              <div class="flex flex-column">
                <p class="popup-details">
                ${allProjects[index].description}
                </p>
                <div class="flex popup-textbtn">
                  <button id= "see-live" 
                  class="work-button">${allProjects[index].linkLive}
                  <img src="./img/live.png" alt="live icon">
                  </button>
                  <button id= "see-source" 
                  class="work-button">
                  ${allProjects[index].linkSource}
                   <img src="./img/project.png" alt="source icon">
                  </button>
                </div>
              </div>
          </div>
     </section>
`;
    const popClose = document.querySelector('.close-btn');
    popClose.addEventListener('click', () => {
      popMenu.classList.remove('act');
      document.body.classList.remove('no-scroll');
    });
  });
});


const validate = (email) => {
  email.preventDefault();
  const inputMail = document.getElementById('email').value;
  const form = document.getElementById('getintouch-form');
  const reg = /^([a-z0-9_]+)@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/;
  if (reg.test(inputMail) === true) {
    form.action = 'https://formspree.io/f/xyyawbze';
    form.submit();
  } else {
    const throughError = document.getElementById('error-msg');
    throughError.innerHTML = 'Please enter a valid email address.';
  }
};
const form = document.getElementById('getintouch-form');
form.addEventListener('submit', validate);

// local storage

const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#textarea');

// Load the data from local storage, if it exists
const savedData = JSON.parse(localStorage.getItem('formData'));

if (savedData) {
  nameInput.value = savedData.name;
  emailInput.value = savedData.email;
  messageInput.value = savedData.message;
}

function saveFormData() {
  const formData = {
    name: nameInput.value,
    email: emailInput.value,
    message: messageInput.value,
  };

  // Save the data to local storage as a single entry
  localStorage.setItem('formData', JSON.stringify(formData));
}
nameInput.addEventListener('input', saveFormData);
emailInput.addEventListener('input', saveFormData);
messageInput.addEventListener('input', saveFormData);
