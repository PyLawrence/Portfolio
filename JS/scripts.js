let formOpen = false;


function handleForm() {
    if (formOpen) {
        document.getElementById("myForm").style.display = "none";
    }
    else {
        document.getElementById("myForm").style.display = "block";
    }

    formOpen = !formOpen;
    return;
}

// not needed anymore, but will keep for now
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

//////

function scrollUp() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


var slideShowAutomatic = true;
var slideIndex = 1;
showSlides(slideIndex);



function plusSlides(n, auto = true) {
    showSlides(slideIndex += n);
    // if auto is not its default value, it will disable the auto slide show functionality
    slideShowAutomatic = auto;
}


function currentSlide(n) {
    showSlides(slideIndex = n);
    // also need to stop auto function if we click a dot
    slideShowAutomatic = false;
}

// // pretty much word for word what is on the site
function showSlides(n) {
    var i;
    var dots = document.getElementsByClassName("dot");
    var slides = document.getElementsByClassName("mySlides");

    if (n > slides.length) { slideIndex = 1 }

    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        // learned why we need spaces before the class name -_-
        dots[i].className = dots[i].className.replace(" active", "");
    }


    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


// my timer, acts more of a time.sleep() from python than the above timer.
function sleep(ms) {
    // when the promise is fulfilled, it can then continue, allowing the timeout to work here a little better.
    return new Promise(resolve => setTimeout(resolve, ms));
}

// async function so we can use the await keyword
// async is used in this case to wait for the defined "promise" to be fulfilled
async function AutoSlideShow() {
    await sleep(3000);

    //checks to see if the user manually changed slides
    //if they did, stop the auto slide show
    if (slideShowAutomatic) {
        showSlides(slideIndex += 1);
        AutoSlideShow();
    }
}