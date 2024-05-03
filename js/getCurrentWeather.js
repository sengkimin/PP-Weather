


async function fetchWeather() {
    try {
        
        const response = await fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=phnom%20penh', {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '847d45cf39msh6a906104c7ebdb2p188ce1jsn5faedbbfd0b1',
                'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
            }
        });

        const data = await response.json();

  
        const card = document.getElementById("in");

    
        card.innerHTML += `UV: ${data.current.uv}<br>`;
        card.innerHTML += `Wind (Kph): ${data.current.wind_kph} km/h<br>`;
        card.innerHTML += `Feels Like: ${data.current.feelslike_c}°C<br>`;
        card.innerHTML += `Humidity: ${data.current.humidity}%<br>`;
        card.innerHTML += `Country: ${data.location.country}<br>`;
        card.innerHTML += `Zone: ${data.location.region}<br>`;
        card.innerHTML += `Last Update: ${data.current.last_updated}<br>`;
        card.innerHTML += `Cloud Cover: ${data.current.cloud}<br>`;

        
        console.log(data);
    } catch (error) {
       
        console.error('Error fetching weather data:', error);
    }
}


fetchWeather();

