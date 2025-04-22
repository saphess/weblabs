//1
document.getElementById('to-text-to').addEventListener('click', function (event) {
  event.preventDefault();
  var inputText = document.getElementById('input-text').value;
  document.getElementById('output-text').innerText = inputText;
});

//2
document.getElementById('process-text').addEventListener('click', function (event) {
  event.preventDefault();
  var textareaText = document.getElementById('input-textarea').value;
  var words = textareaText.split(/\s+/);
  document.getElementById('output-text').innerText = words.join(', ');
});

//3
const table = document.getElementById('random-table');

for (let i = 0; i < 20; i++) {
  const row = document.createElement('tr');
  for (let j = 0; j < 20; j++) {
    const cell = document.createElement('td');
    const randomNum = Math.floor(Math.random() * 900) + 100; // от 100 до 999
    cell.textContent = randomNum;
    row.appendChild(cell);
  }
  table.appendChild(row);
}

//4
document.getElementById('show-srcs').addEventListener('click', function (event) {
  event.preventDefault();
  const images = document.querySelectorAll('img');
  const srcList = [];

  images.forEach(img => {
    srcList.push(img.getAttribute('src'));
  });

  document.getElementById('output-img').innerText = srcList.join('\n');
});

//5
document.getElementById('show-image').addEventListener('click', function (event) {
  event.preventDefault();
  const img = document.getElementById('dynamic-img');
  img.src = 'img1.png'
  img.style.display = 'block';
});

//6
function updateTime() {
  const now = new Date();
  const currentTimeEl = document.getElementById('current-time');
  const newYearTimeEl = document.getElementById('new-year-time');

  currentTimeEl.textContent = now.toLocaleTimeString();

  const nextYear = now.getFullYear() + 1;
  const newYear = new Date(`January 1, ${nextYear} 00:00:00`);

  const diff = newYear - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  newYearTimeEl.textContent = `${days} дн. ${hours} ч. ${minutes} мин. ${seconds} сек.`;
}

setInterval(updateTime, 1000);

updateTime();

