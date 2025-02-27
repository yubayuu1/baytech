// Navbar Fixed
// Fungsi ini akan menjaga navbar tetap di atas saat di-scroll
window.onscroll = function () {
  const header = document.querySelector("header"); // Selektor untuk elemen header
  const fixedNav = header.offsetTop; // Mendapatkan offset top dari header untuk menentukan kapan navbar harus tetap di atas
  const toTop = document.querySelector("#to-top"); // Selektor untuk tombol kembali ke atas

  // Jika scroll window melebihi offset top dari header, maka tambahkan kelas navbar-fixed untuk menjaga navbar tetap di atas
  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed"); // Menambahkan kelas navbar-fixed untuk menjaga navbar tetap di atas
    toTop.classList.remove("hidden"); // Menampilkan tombol kembali ke atas
    toTop.classList.add("flex"); // Menambahkan kelas flex untuk tombol kembali ke atas agar terlihat
  } else {
    header.classList.remove("navbar-fixed"); // Menghapus kelas navbar-fixed untuk mengembalikan navbar ke posisi semula
    toTop.classList.remove("flex"); // Menghapus kelas flex untuk tombol kembali ke atas agar tersembunyi
    toTop.classList.add("hidden"); // Menyembunyikan tombol kembali ke atas
  }
};

// Hamburger
// Fungsi ini akan menampilkan menu navigasi saat hamburger di-klik
const hamburger = document.querySelector("#hamburger"); // Selektor untuk tombol hamburger
const navMenu = document.querySelector("#nav-menu"); // Selektor untuk menu navigasi

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active"); // Mengubah kelas hamburger untuk menampilkan atau menyembunyikan menu
  navMenu.classList.toggle("hidden"); // Mengubah kelas menu untuk menampilkan atau menyembunyikan
});

// Klik di luar hamburger
// Fungsi ini akan menyembunyikan menu navigasi saat di-klik di luar hamburger
window.addEventListener("click", function (e) {
  // Jika klik diluar tombol hamburger dan menu navigasi, maka sembunyikan menu navigasi
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove("hamburger-active"); // Menghapus kelas hamburger-active untuk menyembunyikan menu
    navMenu.classList.add("hidden"); // Menyembunyikan menu navigasi
  }
});

// Darkmode toggle
// Fungsi ini akan mengatur tema gelap atau terang
document.addEventListener("DOMContentLoaded", function () {
  const darkToggle = document.querySelector("#dark-toggle"); // Selektor untuk tombol toggle tema
  const html = document.documentElement; // Selektor untuk elemen html

  // Fungsi untuk mengatur tema berdasarkan localStorage atau sistem
  function applyTheme() {
    // Cek apakah tema gelap aktif atau tidak berdasarkan localStorage atau preferensi sistem
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      html.classList.add("dark"); // Menambahkan kelas dark untuk mengaktifkan tema gelap
      darkToggle.checked = true; // Mengaktifkan tombol toggle tema
      localStorage.theme = "dark"; // Menyimpan tema sebagai 'dark' di localStorage
    } else {
      html.classList.remove("dark"); // Menghapus kelas dark untuk mengaktifkan tema terang
      darkToggle.checked = false; // Menonaktifkan tombol toggle tema
      localStorage.theme = "light"; // Menyimpan tema sebagai 'light' di localStorage
    }
  }

  // Panggil fungsi untuk menetapkan tema saat halaman dimuat
  applyTheme();

  // Tambahkan event listener untuk toggle
  darkToggle.addEventListener("click", function () {
    // Jika tombol toggle tema di-klik, maka ubah tema berdasarkan status toggle
    if (darkToggle.checked) {
      html.classList.add("dark"); // Mengaktifkan tema gelap
      localStorage.theme = "dark"; // Menyimpan tema sebagai 'dark' di localStorage
    } else {
      html.classList.remove("dark"); // Mengaktifkan tema terang
      localStorage.theme = "light"; // Menyimpan tema sebagai 'light' di localStorage
    }
  });
});

// Agar default muncul versi dark mode
// Fungsi ini akan membuat tema gelap menjadi default saat halaman dimuat
document.documentElement.classList.add("dark"); // Mengaktifkan tema gelap secara default
localStorage.setItem("theme", "dark"); // Menyimpan tema sebagai 'dark' di localStorage secara default

document.addEventListener("DOMContentLoaded", function () {
  // Cek localStorage untuk mode gelap
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark"); // Mengaktifkan tema gelap jika tema gelap aktif di localStorage atau preferensi sistem
  } else {
    document.documentElement.classList.remove("dark"); // Mengaktifkan tema terang jika tema gelap tidak aktif di localStorage atau preferensi sistem
  }

  // Toggle dark mode
  const toggleButton = document.getElementById("theme-toggle"); // Selektor untuk tombol toggle tema
  if (toggleButton) {
    toggleButton.addEventListener("click", () => {
      // Mengubah tema berdasarkan status toggle
      document.documentElement.classList.toggle("dark"); // Mengubah kelas dark untuk mengaktifkan atau menonaktifkan tema gelap
      localStorage.setItem(
        "theme",
        document.documentElement.classList.contains("dark")
          ? "dark" // Menyimpan tema sebagai 'dark' di localStorage jika tema gelap aktif
          : "light" // Menyimpan tema sebagai 'light' di localStorage jika tema gelap tidak aktif
      );
    });
  }

  // Script Typed.js
  new Typed("#typed-text", {
    strings: ["UI/UX Designer", "Software Engineer", "Quality Assurance"],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 1500,
    startDelay: 500,
    loop: true,
  });
});

// Script Pop Up Image
// Fungsi ini akan menampilkan popup saat gambar di-klik
document.addEventListener("DOMContentLoaded", function () {
  const popup = document.getElementById("popup");
  const popupContent = popup.querySelector(".popup-content");
  const popupImg = document.getElementById("popup-img");
  const closeBtn = document.getElementById("close-btn");

  // Seleksi navbar (misal, elemen <header>)
  const navbar = document.querySelector("header");

  // Fungsi untuk membuka popup
  function openPopup(imageSrc) {
    popupImg.src = imageSrc;

    // Tampilkan popup dengan mengubah kelas
    popup.classList.remove("hidden");
    popup.classList.add("flex");

    // Sembunyikan navbar
    if (navbar) {
      navbar.classList.add("hidden");
    }

    // Pastikan reflow terjadi sebelum menambahkan transisi
    requestAnimationFrame(() => {
      popup.classList.remove("opacity-0");
      popup.classList.add("opacity-100");
      popupContent.classList.remove("scale-95");
      popupContent.classList.add("scale-100");
    });
  }

  // Fungsi untuk menutup popup
  function closePopup(event) {
    // Tutup popup jika klik di area overlay atau tombol close
    if (event.target === popup || event.target === closeBtn) {
      popup.classList.remove("opacity-100");
      popup.classList.add("opacity-0");
      popupContent.classList.remove("scale-100");
      popupContent.classList.add("scale-95");

      setTimeout(() => {
        popup.classList.remove("flex");
        popup.classList.add("hidden");

        // Tampilkan kembali navbar
        if (navbar) {
          navbar.classList.remove("hidden");
        }
      }, 300); // Durasi sesuai transisi CSS (300ms)
    }
  }

  closeBtn.addEventListener("click", closePopup);
  popup.addEventListener("click", closePopup);

  // Jadikan openPopup global agar bisa dipanggil langsung dari HTML
  window.openPopup = openPopup;
});

// Tombol Kembali ke Atas
window.onscroll = function () {
  const header = document.querySelector("header"); // Selektor untuk elemen header
  const fixedNav = header.offsetTop; // Mendapatkan offset top dari header untuk menentukan kapan navbar harus tetap di atas
  const toTop = document.querySelector("#to-top"); // Selektor untuk tombol kembali ke atas

  // Jika scroll window melebihi offset top dari header, maka tambahkan kelas navbar-fixed untuk menjaga navbar tetap di atas
  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed"); // Menambahkan kelas navbar-fixed untuk menjaga navbar tetap di atas
    toTop.classList.remove("hidden"); // Menampilkan tombol kembali ke atas
    toTop.classList.add("flex"); // Menambahkan kelas flex untuk tombol kembali ke atas agar terlihat
  } else {
    header.classList.remove("navbar-fixed"); // Menghapus kelas navbar-fixed untuk mengembalikan navbar ke posisi semula
    toTop.classList.remove("flex"); // Menghapus kelas flex untuk tombol kembali ke atas agar tersembunyi
    toTop.classList.add("hidden"); // Menyembunyikan tombol kembali ke atas
  }
};

// Menginisialisasi AOS setelah halaman selesai dimuat
window.addEventListener("load", () => {
  // Mengatur konfigurasi AOS
  AOS.init({
    duration: 1000, // Durasi transisi
    offset: window.innerWidth < 768 ? 300 : 200, // Mengatur offset berbeda untuk mobile dan desktop
    delay: window.innerWidth < 768 ? 200 : 100, // Mengatur delay berbeda untuk mobile dan desktop
  });

  // Menunda refresh AOS untuk memastikan elemen telah selesai dimuat
  setTimeout(() => {
    AOS.refreshHard();
  }, 500); // Menunda 500ms untuk memastikan elemen telah selesai dimuat
});

// Dokumen diinisialisasi
document.addEventListener("DOMContentLoaded", function () {
  // Mengatur nilai input
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";
  // Menyembunyikan peringatan
  document.getElementById("email-warning").style.display = "none";
  document.getElementById("name-warning").style.display = "none";
  document.getElementById("message-warning").style.display = "none";
});

// Mendapatkan elemen input dan peringatan
const emailInput = document.getElementById("email");
const emailWarning = document.getElementById("email-warning");
const nameInput = document.getElementById("name");
const nameWarning = document.getElementById("name-warning");
const messageInput = document.getElementById("message");
const messageWarning = document.getElementById("message-warning");
const form = document.querySelector("form");

// Mendengarkan perubahan pada input email
emailInput.addEventListener("input", function () {
  // Jika input email kosong, tampilkan peringatan
  if (emailInput.value.trim() === "") {
    emailWarning.style.display = "block";
    emailWarning.textContent = "Email tidak boleh kosong.";
  } else if (!emailInput.validity.valid) {
    // Jika input email tidak valid, tampilkan peringatan
    emailWarning.style.display = "block";
    emailWarning.textContent = "Invalid email!";
  } else {
    // Jika input email valid, sembunyikan peringatan
    emailWarning.style.display = "none";
  }
});

// Mendengarkan perubahan pada input nama
nameInput.addEventListener("input", function () {
  // Jika input nama kosong, tampilkan peringatan
  if (nameInput.value.trim() === "") {
    nameWarning.style.display = "block";
    nameWarning.textContent = "Name cannot be empty.";
  } else {
    // Jika input nama tidak kosong, sembunyikan peringatan
    nameWarning.style.display = "none";
  }
});

// Mendengarkan perubahan pada input pesan
messageInput.addEventListener("input", function () {
  // Jika input pesan kosong, tampilkan peringatan
  if (messageInput.value.trim() === "") {
    messageWarning.style.display = "block";
    messageWarning.textContent = "Message cannot be empty.";
  } else {
    // Jika input pesan tidak kosong, sembunyikan peringatan
    messageWarning.style.display = "none";
  }
});

// Mendengarkan pengiriman form
form.addEventListener("submit", function (event) {
  let isValid = true;

  // Validasi input nama
  if (nameInput.value.trim() === "") {
    nameWarning.style.display = "block";
    nameWarning.textContent = "Name cannot be empty.";
    isValid = false;
  }

  // Validasi input email
  if (emailInput.value.trim() === "") {
    emailWarning.style.display = "block";
    emailWarning.textContent = "Email cannot be empty.";
    isValid = false;
  } else if (!emailInput.validity.valid) {
    emailWarning.style.display = "block";
    emailWarning.textContent = "Invalid email!";
    isValid = false;
  }

  // Validasi input pesan
  if (messageInput.value.trim() === "") {
    messageWarning.style.display = "block";
    messageWarning.textContent = "Message cannot be empty.";
    isValid = false;
  }

  // Mencegah pengiriman form jika ada yang salah
  if (!isValid) {
    event.preventDefault();
  }
});

// === Kode untuk Certificates ===
const loadMoreCertif = document.getElementById("load-more-certif-btn");
const certificateItems = document.querySelectorAll(
  "#certificates-container .certificates-card.display-none"
);

loadMoreCertif.addEventListener("click", function () {
  // Tampilkan semua item certificate yang tersembunyi
  certificateItems.forEach((item) => {
    item.classList.remove("display-none");
  });

  // Sembunyikan tombol Load More Certificates setelah diklik
  loadMoreCertif.classList.add("hidden");

  // Refresh AOS agar animasi diterapkan pada item yang baru muncul
  AOS.refresh();
});

/// Mendapatkan tombol Load More dan item portfolio yang tersembunyi
const loadMoreButton = document.getElementById("loadMoreBtn");
const portfolioItems = document.querySelectorAll(
  "#portfolio-container .portfolio-card.display-hidden"
);

// Menambahkan event listener untuk tombol Load More
loadMoreButton.addEventListener("click", function () {
  // Menampilkan semua item portfolio yang tersembunyi dengan menghapus kelas "display-hidden"
  portfolioItems.forEach((item) => {
    item.classList.remove("display-hidden");
  });

  // Menyembunyikan tombol Load More setelah diklik
  loadMoreButton.classList.add("hidden");

  // Jika menggunakan AOS, refresh agar animasi diterapkan pada item yang baru muncul
  AOS.refresh();
});

// Fungsi untuk memperbarui AOS Footer
function updateAOS() {
  const element = document.getElementById("newsletter");
  if (window.innerWidth < 640) {
    // Jika ukuran layar adalah sm: atau lebih kecil
    element.setAttribute("data-aos", "fade-right");
  } else {
    element.setAttribute("data-aos", "fade-left");
  }
  AOS.refresh(); // Refresh AOS agar perubahan animasi langsung berlaku
}

// Panggil fungsi saat halaman dimuat
updateAOS();

// Perbarui saat ukuran layar berubah
window.addEventListener("resize", updateAOS);
