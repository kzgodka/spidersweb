var present = document.getElementById("present");
var presentTop = document.getElementById("box-top");
var greetings = document.getElementById("greetings");

present.addEventListener("click", openBox);

function openBox() {
  presentTop.classList.add("box-top-animate");
  greetings.classList.add("greetings-animation");
  makeItConfetti();
};

var confettiPlayers = [];

function makeItConfetti() {
  var confetti = document.querySelectorAll('.confetti');
  
  if (!confetti[0].animate) {
    return false;
  }

  for (var i = 0, len = confetti.length; i < len; ++i) {
    var snowball = confetti[i];
    snowball.innerHTML = '<div class="rotate"><div class="askew"></div></div>';
    var scale = Math.random() * .8 + .2;
    var player = snowball.animate([
      { transform: 'translate3d(' + (i/len*100) + 'vw,0,0) scale(' + scale + ')', opacity: scale },
      { transform: 'translate3d(' + (i/len*100-10) + 'vw,100vh,0) scale(' + scale + ')', opacity: 1 }
    ], {
      duration: Math.random() * 3000 + 3000,
      iterations: 2,
      delay: -(Math.random() * 5000)
    });
    confettiPlayers.push(player);
  }
}

