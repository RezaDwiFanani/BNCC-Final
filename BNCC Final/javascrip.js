document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener('scroll', reveal);
    
    function reveal() {
        var reveals = document.querySelectorAll('.reveal');
        
        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 150;
            
            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add('active');
            } else {
                reveals[i].classList.remove('active');
            }
        }
    }
});

function fetchWeather() {
    fetch('https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=London')
        .then(response => response.json())
        .then(data => {
            document.getElementById('weather-result').innerHTML = `
                <p>Location: ${data.location.name}</p>
                <p>Temperature: ${data.current.temp_c}°C</p>
                <p>Condition: ${data.current.condition.text}</p>
            `;
        })
        .catch(error => console.error('Error fetching weather data:', error));
}
