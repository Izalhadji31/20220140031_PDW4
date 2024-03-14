function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Periksa apakah username dan password sesuai
    if (username === "izal" && password === "umy") {
        // Jika sesuai, tampilkan layanan 
        document.getElementById("loginForm").style.display = "none";
        document.getElementById("services").style.display = "block";
    } else {
        // Jika tidak sesuai, beri pesan kesalahan
        alert("Username atau password salah. Silakan coba lagi.");
    }
}

function showService(service) {
    // Tampilkan konten layanan sesuai tombol yang diklik
    var serviceContent = document.getElementById("serviceContent");
    if (service === "oil") {
        serviceContent.innerHTML = "<p>Oil change service description goes here.</p>";
    } else if (service === "service") {
        serviceContent.innerHTML = "<p>Routine service description goes here.</p>";
    } else if (service === "repaint") {
        serviceContent.innerHTML = "<p>Repaint service description goes here.</p>";
    }
}
