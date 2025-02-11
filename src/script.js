const container1 = document.getElementById('container1');

function clearAndAnimateContainer() {
  container1.innerHTML = '';
  container1.classList.remove('animate');
  void container1.offsetWidth;
  container1.classList.add('animate');
}

document.getElementById('nav1').addEventListener('click', function () {

    clearAndAnimateContainer();

    const section = document.createElement('section');
    section.classList.add('content-body');

    const img = document.createElement('img');
    img.src = 'images/face1.png';
    img.alt = 'portrait-photo';
    img.id = 'portrait-photo';

    const textContent = document.createElement('div');
    textContent.classList.add('text-content');

    const heading = document.createElement('h1');
    heading.textContent = "Hello I'm Carl !";

    const paragraph1 = document.createElement('p');
    paragraph1.textContent =
      "I'm a (aspiring) Full Stack developer and student studying .NET development at Nackademin in Stockholm, Sweden.";
    const paragraph2 = document.createElement('p');
    paragraph2.textContent =  "I love solving problems and learning more every day.";
    
    textContent.appendChild(heading);
    textContent.appendChild(paragraph1);
    textContent.appendChild(paragraph2);

    section.appendChild(img);
    section.appendChild(textContent);

    document.getElementById('container1').appendChild(section);
});

document.getElementById('nav2').addEventListener('click', function () {

  clearAndAnimateContainer();


  const section = document.createElement('section');
  section.classList.add('content-body');

  const heading = document.createElement('h1');
  heading.textContent = "Skills:";

  const skillsList = document.createElement('ul');
  skillsList.classList.add('skills-list');

  const skill1 = document.createElement('li');
  skill1.textContent = 'C#';
  const skill2 = document.createElement('li');
  skill2.textContent = 'HTML / CSS';
  const skill3 = document.createElement('li');
  skill3.textContent = 'Javascript';
  const skill4 = document.createElement('li');
  skill4.textContent = 'React';
  const skill5 = document.createElement('li');
  skill5.textContent = 'SQL / ADO.NET / Entity Framework';
  const skill6 = document.createElement('li');
  skill6.textContent = 'Python';


  skillsList.appendChild(skill1);
  skillsList.appendChild(skill2);
  skillsList.appendChild(skill3);
  skillsList.appendChild(skill4);
  skillsList.appendChild(skill5);
  skillsList.appendChild(skill6);

  section.appendChild(heading);
  section.appendChild(skillsList);

  container1.appendChild(section);
});

document.getElementById('nav4').addEventListener('click', function () {

  clearAndAnimateContainer();

  const section = document.createElement('section');
  section.classList.add('content-body');

  const heading = document.createElement('h1');
  heading.textContent = "Links:";

  const linksList = document.createElement('ul');
  linksList.classList.add('links-list');

  const link1 = document.createElement('li');
  const githubLink = document.createElement('a');
  githubLink.href = 'https://github.com/mapamapa1'; 
  githubLink.target = '_blank'; 
  githubLink.rel = 'noopener noreferrer'; 

  const githubIcon = document.createElement('i');
  githubIcon.classList.add('fab', 'fa-github'); 
  githubIcon.style.marginRight = '10px'; 

  const githubText = document.createTextNode('GitHub');
  githubLink.appendChild(githubIcon);
  githubLink.appendChild(githubText);
  link1.appendChild(githubLink);

  const link2 = document.createElement('li');
  const linkedinLink = document.createElement('a');
  linkedinLink.href = 'https://www.linkedin.com/in/carl-winter-139a64338/'; 
  linkedinLink.target = '_blank'; 
  linkedinLink.rel = 'noopener noreferrer'; 

  const linkedinIcon = document.createElement('i');
  linkedinIcon.classList.add('fab', 'fa-linkedin'); 
  linkedinIcon.style.marginRight = '10px'; 

  const linkedinText = document.createTextNode('LinkedIn');
  linkedinLink.appendChild(linkedinIcon);
  linkedinLink.appendChild(linkedinText);
  link2.appendChild(linkedinLink);

  linksList.appendChild(link1);
  linksList.appendChild(link2);

  section.appendChild(heading);
  section.appendChild(linksList);

  container1.appendChild(section);
});

document.getElementById('nav3').addEventListener('click', function () {

  clearAndAnimateContainer();

  const section = document.createElement('section');
  section.classList.add('content-body');

  const heading = document.createElement('h1');
  heading.textContent = "Resume / References:";

  const linksList = document.createElement('ul');
  linksList.classList.add('links-list');

  const cv = document.createElement('li');
  const cvlink = document.createElement('a');
  cvlink.href = 'CV.text'; 
  cvlink.download = 'CV.text';

  const downloadicon = document.createElement('i');
  downloadicon.classList.add('fa-solid', 'fa-file-arrow-down'); 
  downloadicon.style.marginRight = '10px'; 

  const cvtext = document.createTextNode('Download CV');
  cvlink.appendChild(downloadicon);
  cvlink.appendChild(cvtext);
  cv.appendChild(cvlink);
  
  linksList.appendChild(cv);

  section.appendChild(heading);
  section.appendChild(linksList);

  container1.appendChild(section);
});

const navButtons = document.querySelectorAll('.navbutton');

navButtons.forEach(button => {
    button.addEventListener('click', function () {

        navButtons.forEach(btn => btn.classList.remove('active'));

        this.classList.add('active');
    });
});

const introductionButton = document.getElementById('nav1');

window.addEventListener('DOMContentLoaded', function () {
  introductionButton.click();
});
