// Add this to your updateWeatherUI function
function updateWeatherUI(data) {
    // Clear previous weather classes
    document.getElementById('weatherIcon').className = 'weather-icon wi ' + data.current.icon;
    
    // Add weather-specific animations
    const condition = data.current.condition.toLowerCase();
    const iconElement = document.getElementById('weatherIcon');
    
    if (condition.includes('rain')) {
      iconElement.classList.add('rainy');
    } else if (condition.includes('snow')) {
      iconElement.classList.add('snowy');
    } else if (condition.includes('wind') || condition.includes('breeze')) {
      iconElement.classList.add('windy');
    }
    
    // Rest of your existing UI update code...
  }