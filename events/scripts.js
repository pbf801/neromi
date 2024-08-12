document.addEventListener('DOMContentLoaded', function () {
    // Configurar la fecha y hora de desbloqueo
    const unlockDate = new Date('2024-08-13T16:45:10').getTime();
    const lockedButton = document.getElementById('locked-button');
    const unlockedButton = document.getElementById('unlocked-button');
    const countdownElement = document.getElementById('countdown');

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = unlockDate - now;

        if (distance <= 0) {
            // Si la cuenta atrás ha terminado, mostrar el botón desbloqueado
            lockedButton.style.display = 'none';
            unlockedButton.style.display = 'inline-block';
            countdownElement.innerHTML = '¡Desbloqueado!';
            clearInterval(countdownInterval); // Detener la cuenta atrás
        } else {
            // Calcular el tiempo restante
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Mostrar la cuenta atrás
            countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        }
    }

    // Actualizar la cuenta atrás cada segundo
    const countdownInterval = setInterval(updateCountdown, 1000);

    // Inicializar la cuenta atrás al cargar la página
    updateCountdown();
});
