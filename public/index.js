// Global variables
let movetime = 0;
let opLines = [
  "I’d ask Cupid to aim for you, but I think my heart’s already hit the target.",
  "Is your name Google? Because you’ve got everything I’m searching for this Valentine’s Day.",
  "I was going to ask Cupid for help, but I realized I’d rather shoot my shot myself.",
  "What's cooking, good looking?"
];

// Extract the name from the URL (e.g., /greet/YourName)


// When the page loads, display a greeting and a random opening line.
window.onload = function() {
  const randomIndex = Math.floor(Math.random() * opLines.length);
  const name = window.location.pathname.split('/').pop();
  document.getElementById('Name1').innerText = `Hello, ${decodeURIComponent(name)}!`;
  document.getElementById('opline').innerText = opLines[randomIndex];
};

// Function to start the rose petal shower effect using three petal images.
function startRosePetalShower() {
  const petalImages = [
    '/rose1.png',
    '/rose2.png',
    '/rose3.png'
  ]; // Ensure these images exist in your public folder

  const interval = setInterval(() => {
    // Create a container for each petal so it can be easily removed later.
    const petalContainer = document.createElement('div');
    petalContainer.classList.add('petals-container');

    // Create the petal image element and assign a random petal image.
    const petal = document.createElement('img');
    const randomIndex = Math.floor(Math.random() * petalImages.length);
    petal.src = petalImages[randomIndex];
    petal.classList.add('petal');

    // Randomize the horizontal start position and animation duration.
    petal.style.left = Math.random() * 100 + "vw";
    petal.style.animationDuration = (Math.random() * 3 + 2) + "s"; // 2s to 5s

    // Append the petal to its container, and the container to the document.
    petalContainer.appendChild(petal);
    document.body.appendChild(petalContainer);

    // Remove the petal container after 5 seconds (end of animation)
    setTimeout(() => {
      petalContainer.remove();
    }, 5000);
  }, 300);

  // Stop creating new petals after 5 seconds.
  setTimeout(() => clearInterval(interval), 5000);
}

// Function to trigger confetti using the canvas-confetti library.
function triggerConfetti() {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
  });
}

// This function transitions from the "opening" section to the "ask out" section.
function handleNext(){
  document.getElementById("opening").classList.add("hidden");
  document.getElementById("askout").classList.remove("hidden");
  const name = window.location.pathname.split('/').pop();
  document.getElementById('Name2').innerText = `${decodeURIComponent(name)}!`;
}

// Function to move the "No" button randomly, making it playful.
function moveButton() {
  movetime++;
  const noBtn = document.getElementById("noBtn");
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 50);
  if (movetime < 5) {
    noBtn.style.position = "absolute";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
  } else {
    noBtn.classList.add("hidden");
  }
}

// Function executed when the user clicks "Yes" to ask them out.
function handleYes() {
  const audio = document.getElementById('audio');
  // Attempt to play the audio; if autoplay restrictions apply, this is triggered by a user action.
  audio.play().then(() => {
    console.log('Playback started successfully!');
  }).catch((err) => {
    console.error('Playback failed:', err);
  });
    
  // Reveal the message and hide other elements.
  document.getElementById("message").classList.remove("hidden");
  document.getElementById("message").classList.remove("hidden");
  document.getElementById("message").innerHTML = `<video src="/v2.mp4" autoplay="autoplay" loop="loop" muted=""></video><h2>Yay! 💕</h2><p>You've made me the happiest person in the world! 🥰</p>`;
  document.getElementById("a-btn").classList.add("hidden");
  document.getElementById("ques").classList.add("hidden"); 
  document.getElementById('Name2').classList.add("hidden");
  document.getElementById('vid').classList.add("hidden");

  // Trigger celebratory animations.
  triggerConfetti();
  startHeartsRain();
  startRosePetalShower();
}

// Function to create a rain of heart emojis.
function startHeartsRain() {
  const heartsContainer = document.getElementById("hearts");
  const interval = setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("heart-emoji");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 3 + 2) + "s";
    heartsContainer.appendChild(heart);

    // Remove the heart after 5 seconds.
    setTimeout(() => heart.remove(), 5000);
  }, 300);

  // Stop creating new hearts after 5 seconds.
  setTimeout(() => clearInterval(interval), 5000);
}

// Start an initial hearts animation when the page loads.
startHeartsRain();
