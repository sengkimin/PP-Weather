const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=phnom%20penh';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'a45120af22mshf4a00bd14efd46cp11fe1ejsn662f694b6d87',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
};

fetch(url, options)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log(data); // Here you can handle the data as needed
    })
    .catch(error => {
        console.error('There was a problem with your fetch operation:', error);
    });