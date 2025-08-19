function tampilkanUcapan() {
  let nama = document.getElementById("nama").value;
  let pesan = document.getElementById("pesan").value;

  if (nama === "" || pesan === "") {
    alert("Harap isi nama dan pesan terlebih dahulu!");
    return;
  }

  document.getElementById("outputNama").innerHTML = "🎉 Selamat Ulang Tahun, " + nama + " 🎂";
  document.getElementById("outputPesan").innerHTML = pesan;

  document.getElementById("formUcapan").style.display = "none";
  document.getElementById("hasilUcapan").style.display = "block";

  // Jalankan efek konfeti
  konfeti();

  // Jalankan efek balon
  tampilkanBalon();
}

function ulang() {
  document.getElementById("formUcapan").style.display = "block";
  document.getElementById("hasilUcapan").style.display = "none";
  document.getElementById("nama").value = "";
  document.getElementById("pesan").value = "";
  document.getElementById("balloons").innerHTML = "";
}

function konfeti() {
  var duration = 3 * 1000;
  var end = Date.now() + duration;

  (function frame() {
    confetti({
      particleCount: 5,
      angle: 60,
      spread: 55,
      origin: { x: 0 }
    });
    confetti({
      particleCount: 5,
      angle: 120,
      spread: 55,
      origin: { x: 1 }
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  }());
}

function tampilkanBalon() {
  let container = document.getElementById("balloons");
  container.innerHTML = "";

  for (let i = 0; i < 6; i++) {
    let img = document.createElement("img");
    img.src = "img/balloon.png";
    img.className = "balloon";
    img.style.left = Math.random() * 90 + "vw";
    img.style.animationDelay = (Math.random() * 5) + "s";
    container.appendChild(img);
  }
}