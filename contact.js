let inputText = document.getElementById('inputText');
let inputEmail = document.getElementById('inputEmail');
let submitBtn = document.getElementById('submitBtn');


inputText.addEventListener("click", ()=> {
    inputText.value = "";
});
inputEmail.addEventListener("click", ()=> {
    inputEmail.value="";
});

submitBtn.addEventListener("click", () => {
        alert('Merci pour votre message !');
});
    





