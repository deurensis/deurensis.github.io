let gethp = document.getElementById('ohp');
let ma = document.getElementById('ma');
let yo = document.getElementById('yo');
let hpcount = 30;
function changeImage() {
  if (hpcount <= 10) {
    ma.src = "kill.jpg";
  }
  if (hpcount <= 0) {
    ma.src = "kill2.jpg";
    yo.src = "yongsa_win.jpg";
  }
}
function minus(attack) {
  if (hpcount > 0) {
    hpcount-=attack;
    gethp.innerHTML = hpcount;
  }
  changeImage();
}
