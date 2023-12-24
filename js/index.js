

submitBtn.addEventListener("click", async (event) => {
    event.preventDefault();
    event.stopPropagation();
    console.log("Clicked!")
    resultCont.innerHTML = `<img width="123" src="img/loading.svg" alt="">`
    let key = "60d04e1b23d64c9fabcbffdd4c03b84d"
    let email = document.getElementById("username").value 
    let url = `https://emailvalidation.abstractapi.com/v1/?api_key=${key}&email=${email}`
    let res = await fetch(url)
    let result = await res.json()
    let str = ``
    for (key of Object.keys(result)) {
        if(result[key] !== "" && result[key]!== " "){ 
            str = str + `<div>${key}: ${result[key]}</div>`
        }
    }

    console.log(str)
    resultCont.innerHTML = str
})