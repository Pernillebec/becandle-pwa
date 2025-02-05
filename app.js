function scanQRCode() {
    alert("QR-skanning kommer snart! 📷");
}

function setReminder(minutes) {
    const time = minutes * 60 * 1000;
    setTimeout(() => {
        alert(`⏰ Husk å sjekke lyset! (${minutes} min har gått)`);
    }, time);
    alert(`Påminnelse satt for ${minutes} min!`);
}
