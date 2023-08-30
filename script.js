const hoverElement = document.querySelector('.photo-container');
let audio=new Audio('starwars-cantinasong.mp3');

hoverElement.addEventListener('mouseover', () => {
  audio.play(); // Sound abspielen
});

hoverElement.addEventListener('mouseout', () => {
  audio.pause(); // Sound stoppen
//   audio.currentTime = 0; // Zurückspulen
});