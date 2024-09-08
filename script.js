const inputValue = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');
const apiKey = "b41f818ad82e9cf95349873f7418373f";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const paragraphError = document.getElementsByTagName('p')[0];
console.log(paragraphError);

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    let data = await response.json();
    console.log(data);

if (data.cod === '404'){
    inputValue.classList.add('error');
    paragraphError.style.display = 'block';
    document.querySelector(".weather").style.display = "none";

    
    
}else{
    document.querySelector(".city").innerHTML = data.name;
    inputValue.classList.remove('error');
    document.querySelector(".weather").style.display = "block";
    paragraphError.style.display = 'none';


}
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "assets/img/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "assets/img/clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "assets/img/rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "assets/img/drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "assets/img/mist.png";
    }

   
   

    }


searchBtn.addEventListener('click', () => {

    if(inputValue.value === ""){
        alert("Please insert the correct city");
    }else{
        checkWeather(inputValue.value);

    }

});

