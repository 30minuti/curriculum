document.addEventListener("DOMContentLoaded", function() {
    const radioButtons = document.querySelectorAll("input[name='carousel']");
    const carouselImages = document.querySelector(".carousel-images");
    const nextButton = document.querySelector(".carousel-button-right");
    const prevButton = document.querySelector(".carousel-button-left");

    // Event listener per i radio button per aggiornare il carosello
    radioButtons.forEach((button, index) => {
        button.addEventListener("change", () => {
            const offset = -100 * index; // Sposta l'immagine del carosello
            carouselImages.style.transform = `translateX(${offset}%)`;
        });
    });

    // Funzione per trovare il prossimo radio button ciclicamente
    function getNextRadio(current) {
        let index = Array.from(radioButtons).indexOf(current);
        return radioButtons[(index + 1) % radioButtons.length]; // Cicla in avanti
    }

    // Funzione per trovare il radio button precedente ciclicamente
    function getPrevRadio(current) {
        let index = Array.from(radioButtons).indexOf(current);
        return radioButtons[(index - 1 + radioButtons.length) % radioButtons.length]; // Cicla all'indietro
    }

    // Pulsante "Avanti"
    nextButton.addEventListener("click", () => {
        let selectedRadio = document.querySelector("input[name='carousel']:checked");
        let nextRadio = getNextRadio(selectedRadio);
        nextRadio.checked = true;
        nextRadio.dispatchEvent(new Event("change"));
    });

    // Pulsante "Indietro"
    prevButton.addEventListener("click", () => {
        let selectedRadio = document.querySelector("input[name='carousel']:checked");
        let prevRadio = getPrevRadio(selectedRadio);
        prevRadio.checked = true;
        prevRadio.dispatchEvent(new Event("change"));
    });
});

