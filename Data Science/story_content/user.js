window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
var getKeyDown = player.getKeyDown;
var keydown = player.keydown;
var keyup = player.keyup;
window.Script1 = function()
{
  const title = object('6FiRYWmcGH9');
const line = object('6PF9KXvDnHr');
const subtitle = object('60gQs41vxUZ');
const button = object('5nqQkelk3M4');

// Title animation
addToTimeline(
  title.animate([
    { scale: '0.5 0.5', opacity: 0 },
    { scale: '1.2 1.2', opacity: 0.8 },
    { scale: '1 1', opacity: 1 }
  ], { duration: 1200, fill: 'forwards', easing: 'ease-out' })
);

// Line animation
line.style.opacity = 0;
addToTimeline(
  line.animate([
    { translate: '-200px 0', opacity: 0 },
    { translate: '0 0', opacity: 1 }
  ], { duration: 800, delay: 300, fill: 'forwards', easing: 'ease-in-out' })
);

// Subtitle animation
subtitle.style.opacity = 0;
addToTimeline(
  subtitle.animate([
    { opacity: 0, translate: '0 20px' },
    { opacity: 1, translate: '0 0' }
  ], { duration: 1000, delay: 600, fill: 'forwards', easing: 'ease-out' })
);

// Button animation
button.style.opacity = 0;
addToTimeline(
  button.animate([
    { opacity: 0, translate: '0 40px', scale: '0.8 0.8' },
    { opacity: 1, translate: '0 0', scale: '1 1' }
  ], { duration: 1000, delay: 1000, fill: 'forwards', easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)' })
);
}

};
