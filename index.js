const activeElement = document.getElementById("active");
const toggleButton = document.getElementById("act1");
const nvb = document.getElementById("nvb");

// İlk tıklama için kayma değeri
let isMoved = true;

toggleButton.addEventListener("click", function () {
  // 'active' class'ı var mı kontrol et, yoksa ekle, varsa çıkar
  activeElement.classList.toggle("active");
  nvb.classList.toggle("active");

  // Eğer daha önce hareket etmemişse, sola kaydır
  if (!isMoved) {
    toggleButton.style.left = "19px"; // 5px sola kaydır
    isMoved = true; // Artık hareket etti
  } else {
    // Eğer daha önce hareket ettiyse, geri eski haline al
    toggleButton.style.left = "0px";
    isMoved = false; // Tekrar hareket etmemiş gibi ayarla
  }
});
const atButton = document.querySelector(".at");
const imgMain = document.querySelector(".img-main");
const sleiderElements = document.querySelectorAll(".sleider");

let translateX = 0; // Resimlerin ne kadar kaydırıldığını takip etmek için

atButton.addEventListener("click", function () {
  const imgWidth = document.querySelector(".sleider").offsetWidth; // Her bir resmin genişliği
  const totalWidth =
    imgWidth * sleiderElements.length + 10 * (sleiderElements.length - 1); // Tüm resimlerin toplam genişliği (margin ile)

  // Eğer son elemana ulaşılmışsa, en başa döndür
  if (Math.abs(translateX) >= totalWidth - imgMain.offsetWidth) {
    translateX = 0; // Başa döndür
  } else {
    translateX -= imgWidth + 10; // Her tıklamada bir resim kadar sola kaydır (10px margin ile)
  }

  imgMain.style.transform = `translateX(${translateX}px)`; // Resimleri sola kaydır
});
