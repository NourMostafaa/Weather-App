
let h1 = document.querySelector(".text1 h1");
let h2 = document.querySelector(".text1 h2");
let p1 = document.querySelector(".text2 p");
let p2 = document.querySelector(".text2 .p2");
let date = document.querySelector(".text1 p");
date.innerHTML = new Date().toDateString();
async function getdata(city){
    const api = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0eddd0f0a69a92d4d0067c4f47ea390a&units=metric`);
    const data = await api.json();
    console.log(data)
    h1.innerHTML = data.name;
    h2.innerHTML = Math.ceil(data.main.temp) + "°C";
    p1.innerHTML = data.main.humidity + "%";
    p2.innerHTML = data.wind.speed + " km/h";
}
let search = document.querySelector(".searchBox .searchInput");
console.log(search)
let btn = document.querySelector(".searchBox button");
btn.addEventListener("click", (e) =>{
    e.preventDefault();
    getdata(search.value)
})