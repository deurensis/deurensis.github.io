let gethp = document.getElementById('ohp');
let yogethp = document.getElementById('y_ohp');
let ma = document.getElementById('ma');
let yo = document.getElementById('yo');
let hpcount = 30;
let yohpcount = 30;
function changeImage() {
  if (hpcount <= 10) {
    ma.src = "kill.jpg";
  }
  if (hpcount <= 0) {
    ma.src = "kill2.jpg";
    yo.src = "yongsa_win.jpg";
  }
}
function changeImage_ma_win() {
    if (yohpcount <= 0) {
      ma.src = 'ma_win.jpg';
      yo.src = 'yongsa_kill.jpg'
    }
}
function minus(attack) {
  if (hpcount > 0) {
    hpcount-=attack;
    gethp.innerHTML = hpcount;
  }
  changeImage();
}
setInterval(function() {
  if (yohpcount > 0 && hpcount > 0) {
    yohpcount-=3;
    yogethp.innerHTML = yohpcount;
  }
changeImage_ma_win();
},1000);
