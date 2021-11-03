window.addEventListener('load', () => {


    
    // inicial
    let slide = 1;

    // total de slide
    let slides = document.querySelectorAll(".slider ul li");
    total = slides.length;

    // mostrar primer lado
    showSlide(1);

    next = document.querySelector(".next");
    prev = document.querySelector(".prev")

    /* siguiente*/
        next.addEventListener('click', (evt) => {
            evt.preventDefault();
            slide++;
            if (slide > total) { slide = 1; }
            showSlide(slide);
        })
    
    /*previo*/
    prev.addEventListener("click", (evt) => {
        evt.preventDefault();
        slide--;
        if (slide < 1) { slide = total; }
        showSlide(slide);
    })

    /**
     * show slides
     * 
     * @param {number} n 
     * @return {null}
     * 
     */
    function showSlide(n) {
        n--; // decrement 1
        for (i = 0; i < slides.length; i++) {
            (i == n) ? slides[n].style.display = "block" : slides[i].style.display = "none";
        }
    }
    

})
/*https://desarrollo.artegrafico.net/laboratory/javascript/examples/effects/slider/*/