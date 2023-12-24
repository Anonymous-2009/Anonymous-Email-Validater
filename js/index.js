let submit = document.getElementById('submit-button'); 

let div = document.getElementByClassName('resultCont');
 submit.addEventListener("click", async (event) => {
    event.preventDefault();
    event.stopPropagation();
    resultCont.innerHTML = `<img width="123" src="img/loading.svg" alt="">`
   let email = document.getElementById('email').value
   let url = `https://emailvalidation.abstractapi.com/v1/?api_key=60d04e1b23d64c9fabcbffdd4c03b84d&email=${email}`;
   let result = await fetch(url);
   let response = await result.json();
   div.innerHTML =   response["deliverability"];
})