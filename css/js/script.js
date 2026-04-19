function toggleTheme() {
document.body.classList.toggle("dark");
}

function validateLogin() {
let email = document.getElementById("email").value;
let password = document.getElementById("password").value;

if(email === "" || password === "") {
alert("Fill all fields");
return false;
}

alert("Login success");
return true;
}

function searchFood() {
let input = document.getElementById("searchBox").value.toLowerCase();
let foods = document.querySelectorAll("#foods p");

foods.forEach(food => {
if(food.innerText.toLowerCase().includes(input)) {
food.style.display = "block";
} else {
food.style.display = "none";
}
});
}
