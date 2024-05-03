
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

        // Update HTML elements with weather information
        document.getElementById("temperature").textContent = `${data.current.temp_c}°C`;
        document.getElementById("condition").textContent = data.current.condition.text;
        document.getElementById("uv").textContent = data.current.uv;
        document.getElementById("wind-speed").textContent = `${data.current.wind_kph} km/h`;
        document.getElementById("feels-like").textContent = `${data.current.feelslike_c}°C`;
        document.getElementById("humidity").textContent = `${data.current.humidity}%`;
        document.getElementById("country").textContent = data.location.country;
        document.getElementById("zone").textContent = data.location.region;
        document.getElementById("last-update").textContent = data.current.last_updated;
        document.getElementById("cloud").textContent = `${data.current.cloud}%`;
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

fetchWeather();
