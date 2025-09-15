// Toca ou pausa a música de fundo ao clicar no canto inferior
document.addEventListener('DOMContentLoaded', function () {
  const audio = document.getElementById('bg-music');
  let musicOn = true;

  audio.volume = 0.2;

  const btn = document.createElement('button');
  btn.textContent = "🔊 Música";
  btn.style.position = "fixed";
  btn.style.bottom = "16px";
  btn.style.right = "16px";
  btn.style.zIndex = "99";
  btn.style.background = "#ffb88e";
  btn.style.color = "#fff";
  btn.style.border = "none";
  btn.style.borderRadius = "20px";
  btn.style.padding = "8px 16px";
  btn.style.cursor = "pointer";
  btn.style.fontSize = "1.2em";

  btn.onclick = function () {
    musicOn = !musicOn;
    if (musicOn) {
      audio.play();
      btn.textContent = "🔊 Música";
    } else {
      audio.pause();
      btn.textContent = "🔇 Música";
    }
  };
  document.body.appendChild(btn);
});