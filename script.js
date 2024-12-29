const container1 = document.getElementById('container1');

document.getElementById('nav1').addEventListener('click', () => {
    const box = document.createElement('div');
    box.className = 'box1';
    box.textContent = 'Box1';
    container1.appendChild(box);
  });

