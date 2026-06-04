const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        button.innerText = "Added ✓";

        setTimeout(() => {
            button.innerText = "Add to Cart";
        }, 2000);
    });
});

window.addEventListener("scroll", () => {
    const nav = document.querySelector(".navbar");

    if(window.scrollY > 50){
        nav.style.padding = "15px 8%";
    } else {
        nav.style.padding = "20px 8%";
    }
});
