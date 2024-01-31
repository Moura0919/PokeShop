document.addEventListener("DOMContentLoaded", function() {
    var progress = document.querySelector('.progress');
    var counter = 0;

    var interval = setInterval(function() {
        counter++;
        progress.textContent = counter + '%';

        if (counter === 100) {
            clearInterval(interval);
        }
    }, 50); // Altere o valor do intervalo conforme necessário para ajustar a velocidade do contador
});

document.addEventListener("DOMContentLoaded", function() {
    var progress = document.querySelector('.progress');
    var counter = 0;

    var interval = setInterval(function() {
        counter++;
        progress.textContent = counter + '%';

        if (counter === 100) {
            clearInterval(interval);
            // Redirecionar para outra página quando a contagem atingir 100%
            window.location.href = '../index.html';
        }
    }, 50); // Altere o valor do intervalo conforme necessário para ajustar a velocidade do contador
});
