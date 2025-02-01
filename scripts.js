function updateUTCTime() {
    const now = new Date();
    const utcTime = now.toUTCString();
    document.getElementById('utc-time').textContent = utcTime;
  }
  
  // Update time on page load
  updateUTCTime();
  
  // Update time every second
  setInterval(updateUTCTime, 1000);



document.addEventListener('DOMContentLoaded', function() {

    const card = document.querySelector('.profile-card');

    // onclick confetti 
    card.addEventListener('click', createConfetti);
    //createConfetti(); 
});

function createConfetti() {
    for(let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'absolute';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.background = `hsl(${Math.random() * 360}deg, 70%, 60%)`;
        //confetti.style.borderRadius = '50%';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = '-50px';
        confetti.style.animation = `fall ${Math.random() * 3 + 2}s linear`;
        document.body.appendChild(confetti);

        setTimeout(() => confetti.remove(), 5000);
    }
}

//keyframe animation
const style = document.createElement('style');
style.textContent = `
@keyframes fall {
    to {
        transform: translateY(calc(100vh + 50px)) rotate(360deg);
    }
}`;
document.head.appendChild(style);