let btnElement = document.querySelector("#switch button");

btnElement.addEventListener("click", e => {
    e.preventDefault();

    const htmlElement = document.querySelector("html");

    // if(!htmlElement.classList.contains("light")) {
    //     return htmlElement.classList.add("light"); 
    // }

    // htmlElement.classList.remove("light");

    htmlElement.classList.toggle("light");
})
