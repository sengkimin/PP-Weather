// async function loadForecastData() {
//     const url =
//       "https://weatherapi-com.p.rapidapi.com/forecast.json?q=phnom%20penh&days=3";
      
//     const options = {
//       method: "GET",
//       headers: {
//         "X-RapidAPI-Key": "b3e198fe5emsh36dbd925d853c3bp122ec5jsnf58b929daf98",
//         "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
//       },
//     };
  
//     try {
//       const response = await fetch(url, options);
//       const result = await response.json();
  
//       for (let i = 1; i <= 2; i++) {
//         const forecast = result.forecast.forecastday[i];
       
//         if (forecast) {
//             const forecastWeatherInfo = {
//                 date: new Date(forecast.date).toDateString(),
//                 temperature: forecast.day.avgtemp_c,
//                 condition: forecast.day.condition.text,
//                 feelsLike: forecast.day.avgtemp_c,
//                 humidity: forecast.day.avghumidity,
//                 windSpeed: forecast.day.maxwind_kph,
//                 uv: forecast.day.uv,
//                 country: result.location.country,
//                 zone: result.location.tz_id,
//                 icon: forecast.day.condition.icon,
//             };
    
         
//             document.getElementById(`forecast${i}`).innerHTML = `
//                 <div class="left">
//                     <h3>Weather</h3>
//                     <div class="date">${forecastWeatherInfo.date}</div>
//                     <img src="${forecastWeatherInfo.icon}" alt="" /> 
//                     <div class="num"><h1>${forecastWeatherInfo.temperature}</h1><h5>°C</h5></div>
//                     <p>${forecastWeatherInfo.condition}</p>
//                 </div>
//                 <div class="right">
//                     <h3>Conditions</h3>
//                     <div class="box-right">
//                         <div class="title">
//                             <p>Feels Like</p>
//                             <p>Humidity</p>
//                             <p>Wind (Kph)</p>
//                             <p>UV</p>
//                         </div>
//                         <div class="number">
//                             <p>${forecastWeatherInfo.feelsLike} C</p>
//                             <p>${forecastWeatherInfo.humidity}%</p>
//                             <p>${forecastWeatherInfo.windSpeed}</p>
//                             <p>${forecastWeatherInfo.uv}</p>
//                         </div>
//                     </div>
//                     <div class="border"></div>
//                     <div class="box-right">
//                         <div class="title">
//                             <p>Country</p>
//                             <p>Zone</p>
//                         </div>
//                         <div class="number">
//                             <p>${forecastWeatherInfo.country}</p>
//                             <p>${forecastWeatherInfo.zone}</p>
//                         </div>
//                     </div>
//                 </div>
//             `;
//         } else {
          
//             document.getElementById(`forecast${i}`).innerHTML = `<p>No forecast data available for this day</p>`;
//         }
//     }
    
      
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   }
  
//   window.onload = loadForecastData;
