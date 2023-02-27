const temp1=document.getElementById("temp1")
const temp2=document.getElementById("temp2")
const p1=document.getElementById("got1")
const p2=document.getElementById("got2")
const feels_like=document.getElementById("feels_like")
const humidity=document.getElementById("humidity")
const pressure=document.getElementById("pressure")
const visiblity=document.getElementById("visiblity")
const discription=document.getElementById("discription")
const wind_speed=document.getElementById("wind_speed")
const image=document.getElementById("img")

option={
   methord:'GET'
}
function getwether(city){
    temp1.innerText=city
    
    let iconcode
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8309b8f0f5e135597d20d8d61fd02045`,option)
.then(response=>response.json())
.then((response)=>{
    console.log(response)

let g=Math.round((response.main.feels_like - 273)*100)/100
let tempo=Math.round((response.main.temp -273)*100)/100

temp2.innerText= tempo
feels_like.innerText= ` Feels Like : `+g +` °C` 
humidity.innerText= ` Humidity : `+response.main.humidity + ` %`
pressure.innerText=` Pressure : `+response.main.pressure + ` hpa`
visiblity.innerText=` Visiblity : `+response.visibility + ` M`
discription.innerText=` Discription : `+response.weather[0].description
wind_speed.innerText=` Wind Speed : `+response.wind.speed+` meter/sec`
iconcode=response.weather[0].icon
image.src="http://openweathermap.org/img/w/" + iconcode + ".png";

})
.catch((err)=>{
    console.log(err)
})

}



got2.onclick=(e)=>{
    console.log(got1.value)
    e.preventDefault()
    getwether(got1.value)
   
}
getwether("delhi");