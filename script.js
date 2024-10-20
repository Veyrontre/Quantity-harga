document.getElementById("priceForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Ambil nilai dari input
    const price = document.getElementById("price").value;
    const quantity = document.getElementById("quantity").value;

    // Hitung total harga
    const total = price * quantity;

    // Tampilkan hasilnya
    document.getElementById("totalPrice").textContent = `Rp ${total.toLocaleString('id-ID')}`;
});
