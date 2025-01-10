document.getElementById('saveButton').addEventListener('click', function() {
    const accountData = document.getElementById('accountData').value;
    if (accountData.trim() === '') {
        alert('Por favor, ingrese los datos de la cuenta.');
        return;
    }

    const currentDate = new Date();
    const purchaseDate = currentDate.toLocaleDateString();

    document.getElementById('accountDetails').innerText = `Datos de la cuenta: ${accountData}`;
    document.getElementById('purchaseDate').innerText = `Fecha de compra: ${purchaseDate}`;
    document.getElementById('accountInfo').style.display = 'block';
});

document.getElementById('updateButton').addEventListener('click', function() {
    const buyerEmail = document.getElementById('buyerEmail').value;
    if (!buyerEmail.includes('@')) {
        alert('Por favor, ingrese un correo válido.');
        return;
    }

    document.getElementById('accountStatus').innerText = 'Estado: VENDIDO';
    const currentDate = new Date();
    const expirationDate = new Date(currentDate);
    expirationDate.setDate(currentDate.getDate() + 30);
    document.getElementById('expirationDate').innerText = `Fecha de vencimiento: ${expirationDate.toLocaleDateString()}`;
});

document.getElementById('copyButton').addEventListener('click', function() {
    const accountDetails = document.getElementById('accountDetails').innerText;
    const purchaseDate = document.getElementById('purchaseDate').innerText;

    navigator.clipboard.writeText(`${accountDetails}\n${purchaseDate}`).then(function() {
        alert('Datos copiados al portapapeles.');
    }, function(err) {
        alert('Error al copiar los datos.');
    });
});