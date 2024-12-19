let noBtn = document.getElementById('no-btn');
let yesBtn = document.getElementById('yes-btn');
let answer = document.getElementById('answer');

yesBtn.addEventListener('click', () => {
    answer.textContent = 'Love you too 💕';
});

noBtn.addEventListener('mouseover', () => {
    noBtn.style.position = 'absolute';
    noBtn.style.top = `${Math.random() * (window.innerHeight - 50)}px`;
    noBtn.style.left = `${Math.random() * (window.innerWidth - 150)}px`;
});

noBtn.addEventListener('mousemove', (e) => {
    noBtn.style.top = `${e.clientY + 20}px`;
    noBtn.style.left = `${e.clientX + 20}px`;
});

