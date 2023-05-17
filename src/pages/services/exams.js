function showMore(){
    const div = document.getElementById("hidden-div");
    if (div.classList) {
        div.classList.remove("d-none")
        div.classList.add("d-block");
    }
    else div.className += "d-block";

    const buttonMore = document.getElementById("show-more-button");
    if (buttonMore.classList) {
        buttonMore.classList.remove("d-block")
        buttonMore.classList.add("d-none");
    }
    else buttonMore.className += "d-none";

    const buttonLess = document.getElementById("show-less-button");
    if (buttonLess.classList) {
        buttonLess.classList.remove("d-none")
        buttonLess.classList.add("d-block");
    }
    else buttonLess.className += "d-block";
}

function showLess(){
    const div = document.getElementById("hidden-div");
    if (div.classList) {
        div.classList.remove("d-block")
        div.classList.add("d-none");
    }
    else elemento.className += "d-none";

    const buttonMore = document.getElementById("show-more-button");
    if (buttonMore.classList) {
        buttonMore.classList.remove("d-none")
        buttonMore.classList.add("d-block");
    }
    else buttonMore.className += "d-block";

    const buttonLess = document.getElementById("show-less-button");
    if (buttonLess.classList) {
        buttonLess.classList.remove("d-block")
        buttonLess.classList.add("d-none");
    }
    else buttonLess.className += "d-none";
}