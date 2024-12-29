const container1 = document.getElementById('container1');


document.getElementById('nav1').addEventListener('click', function () {

    container1.innerHTML = '';

    if (document.querySelector('.content-body')) {
        return;
    }

    const section = document.createElement('section');
    section.classList.add('content-body');

    const img = document.createElement('img');
    img.src = 'images/face.png';
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
  // Clear any existing content
  container1.innerHTML = '';

  // Create new content for nav2
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
  skill3.textContent = 'SQL / ADO.NET / Entity Framework';
  const skill4 = document.createElement('li');
  skill4.textContent = 'React';
  const skill5 = document.createElement('li');
  skill5.textContent = 'Python';

  skillsList.appendChild(skill1);
  skillsList.appendChild(skill2);
  skillsList.appendChild(skill3);
  skillsList.appendChild(skill4);
  skillsList.appendChild(skill5);


  section.appendChild(heading);
  section.appendChild(skillsList);

  container1.appendChild(section);
});
