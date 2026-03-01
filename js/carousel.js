document.addEventListener("DOMContentLoaded", () => {
    const track = document.getElementById("carousel-track");
    const prevBtn = document.getElementById("carousel-prev");
    const nextBtn = document.getElementById("carousel-next");

    let slides = Array.from(track.children);
    const slideCount = slides.length;
    let index = 1;
    const intervalTime = 4000;

    // Clone first & last slides
    const firstClone = slides[0].cloneNode(true);
    const lastClone = slides[slides.length - 1].cloneNode(true);

    firstClone.id = "first-clone";
    lastClone.id = "last-clone";

    track.appendChild(firstClone);
    track.insertBefore(lastClone, slides[0]);

    slides = Array.from(track.children);

    function getSlideWidth() {
        return slides[0].offsetWidth;
    }

    function setPosition(animate = true) {
        track.style.transition = animate ? "transform 0.7s ease-in-out" : "none";
        track.style.transform = `translateX(-${index * getSlideWidth()}px)`;
    }

    // Initial position (real first slide)
    setPosition(false);

    function nextSlide() {
        if (index >= slides.length - 1) return;
        index++;
        setPosition();
    }

    function prevSlide() {
        if (index <= 0) return;
        index--;
        setPosition();
    }

    track.addEventListener("transitionend", () => {
        if (slides[index].id === "first-clone") {
            index = 1;
            setPosition(false);
        }

        if (slides[index].id === "last-clone") {
            index = slides.length - 2;
            setPosition(false);
        }
    });

    nextBtn.addEventListener("click", () => {
        nextSlide();
        resetAutoSlide();
    });

    prevBtn.addEventListener("click", () => {
        prevSlide();
        resetAutoSlide();
    });

    let autoSlide = setInterval(nextSlide, intervalTime);

    function resetAutoSlide() {
        clearInterval(autoSlide);
        autoSlide = setInterval(nextSlide, intervalTime);
    }

    window.addEventListener("resize", () => {
        setPosition(false);
    });
});