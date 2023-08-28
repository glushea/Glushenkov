
  var visitedCities = 0;
  var visitedCountries = 0;
  var countriesVisited = [];

 var citiesData = [
 { name: "New York", lat: 40.7128, lon: -74.0060, country: "USA" },
  { name: "Seattle", lat: 47.6062, lon: -122.3321, country: "USA" },
  { name: "San Francisco", lat: 37.7749, lon: -122.4194, country: "USA" },
  { name: "Palo Alto", lat: 37.4419, lon: -122.1430, country: "USA" },
  { name: "Los Angeles", lat: 34.0522, lon: -118.2437, country: "USA" },
  { name: "Las Vegas", lat: 36.1716, lon: -115.1391, country: "USA" },
  { name: "Denver", lat: 39.7392, lon: -104.9903, country: "USA" },
  { name: "Palm Beach", lat: 26.7056, lon: -80.0364, country: "USA" },
  { name: "Mexico City", lat: 19.4326, lon: -99.1332, country: "Mexico" },
  { name: "Buenos Aires", lat: -34.6037, lon: -58.3816, country: "Argentina" },
  { name: "Santiago", lat: -33.4489, lon: -70.6693, country: "Chile" },
  { name: "Johannesburg", lat: -26.2041, lon: 28.0473, country: "South Africa" },

  { name: "Paris", lat: 48.8566, lon: 2.3522, country: "France" },
  { name: "London", lat: 51.5286416, lon: -0.1015987, country: "UK" },
  { name: "Tel Aviv", lat: 32.0853, lon: 34.7818, country: "Israel" },
  { name: "Jerusalem", lat: 31.7683, lon: 35.2137, country: "Israel" },
  { name: "Minsk", lat: 53.9006, lon: 27.5590, country: "Belarus" },
  { name: "Druskininkai", lat: 54.0049, lon: 23.9864, country: "Lithuania" },
  { name: "Moscow", lat: 55.7558, lon: 37.6173, country: "Russia" },
  { name: "Saint Petersburg", lat: 59.9311, lon: 30.3609, country: "Russia" },
  { name: "Anapa", lat: 44.8936, lon: 37.3158, country: "Russia" },
  { name: "Saratov", lat: 51.5462, lon: 46.0154, country: "Russia" },
  { name: "Astana", lat: 51.1655, lon: 71.4272, country: "Kazakhstan" },
  { name: "Almaty", lat: 43.2380, lon: 76.8829, country: "Kazakhstan" },
  { name: "Kyiv", lat: 50.4501, lon: 30.5234, country: "Ukraine" },
  { name: "Warsaw", lat: 52.2297, lon: 21.0122, country: "Poland" },
  { name: "Tenerife", lat: 28.2916, lon: -16.6291, country: "Spain" },
  { name: "Madrid", lat: 40.4168, lon: -3.7038, country: "Spain" },
  { name: "Barcelona", lat: 41.3851, lon: 2.1734, country: "Spain" },
  { name: "Gibraltar", lat: 36.1408, lon: -5.3536, country: "Gibraltar" },
  { name: "Ronda", lat: 36.7468, lon: -5.1610, country: "Spain" },
  { name: "Cordoba", lat: 37.8882, lon: -4.7794, country: "Spain" },
  { name: "Seville", lat: 37.3886, lon: -5.9823, country: "Spain" },
  { name: "Marbella", lat: 36.5101, lon: -4.8828, country: "Spain" },
  { name: "Malaga", lat: 36.7213, lon: -4.4214, country: "Spain" },
  { name: "Nice", lat: 43.7102, lon: 7.2620, country: "France" },
  { name: "Prague", lat: 50.0755, lon: 14.4378, country: "Czech Republic" },
  { name: "Budapest", lat: 47.4979, lon: 19.0402, country: "Hungary" },
  { name: "Cologne", lat: 50.9375, lon: 6.9603, country: "Germany" },
  { name: "Amsterdam", lat: 52.3676, lon: 4.9041, country: "Netherlands" },
  { name: "Belgrade", lat: 44.7866, lon: 20.4489, country: "Serbia" },
  { name: "Varna", lat: 43.2141, lon: 27.9147, country: "Bulgaria" },
  { name: "Anatolia", lat: 37.8739, lon: 32.4922, country: "Turkey" },
  { name: "Kos", lat: 36.8932, lon: 27.2877, country: "Greece" },
  { name: "Zakynthos", lat: 37.7823, lon: 20.8987, country: "Greece" },
  { name: "Crete", lat: 35.2401, lon: 24.8093, country: "Greece" },
  { name: "Rhodes", lat: 36.4344, lon: 28.2176, country: "Greece" },
  { name: "Bangkok", lat: 13.7563, lon: 100.5018, country: "Thailand" },
  { name: "Ko Phi Phi", lat: 7.7461, lon: 98.7784, country: "Thailand" },
  { name: "Phuket", lat: 7.8804, lon: 98.3923, country: "Thailand" },
  { name: "Ko Samui", lat: 9.5120, lon: 100.0136, country: "Thailand" },
  { name: "Ko Pha-ngan", lat: 9.7319, lon: 100.0136, country: "Thailand" },
  { name: "Maldives", lat: 3.2028, lon: 73.2207, country: "Maldives" },
  { name: "Railay Beach", lat: 8.0119, lon: 98.8376, country: "Thailand" },
  { name: "Rome", lat: 41.9028, lon: 12.4964, country: "Italy" },
  { name: "Monaco", lat: 43.7384, lon: 7.4246, country: "Monaco" },
  { name: "Bern", lat: 46.8182, lon: 8.2275, country: "Switzerland" },
  { name: "Geneva", lat: 46.2044, lon: 6.1432, country: "Switzerland" },
  { name: "Budva", lat: 42.2911, lon: 18.8403, country: "Montengro" },
  { name: "Kotor", lat: 42.4247, lon: 18.7712, country: "Montengro" },
  { name: "Zabljak", lat: 43.1555, lon: 19.1226, country: "Montengro" }
  // Add more cities with their latitudes, longitudes, and countries as needed
];



function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: 0, lng: 0 },
      zoom: 2,
      minZoom: 2,
      maxZoom: 18,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    // Add custom markers with city names as labels
    citiesData.forEach(function(city) {
      var marker = new google.maps.Marker({
        position: { lat: city.lat, lng: city.lon },
        map: map,
        label: city.name,
        title: city.name
      });

      var infowindow = new google.maps.InfoWindow({
        content: city.name
      });

      marker.addListener('click', function() {
        infowindow.open(map, marker);
      });

      // Increment the visitedCities counter
      visitedCities++;

      // Check if the country of the new city has been visited
      if (!countriesVisited.includes(city.country)) {
        countriesVisited.push(city.country);
        visitedCountries++;
      }
    });

    // Add orange lines from Tel Aviv to other cities
    var telAvivCoordinates = { lat: 32.0853, lng: 34.7818 };
    citiesData.forEach(function(city) {
      var lineCoordinates = [
        telAvivCoordinates, // Start from Tel Aviv
        { lat: city.lat, lng: city.lon } // End at the coordinates of the city
      ];

      var line = new google.maps.Polyline({
        path: lineCoordinates,
        geodesic: true,
        strokeColor: '#f60',
        strokeOpacity: 1.0,
        strokeWeight: 2,
        map: map
      });
    });

    // Update the counter values in the HTML
    document.getElementById("citiesCount").innerText = visitedCities;
    document.getElementById("countriesCount").innerText = visitedCountries;
  }


  async function getWeather(city) {
    const apiKey = '49ba7ac280b04707627056facf6a5a8b';
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    const data = await response.json();
    return data;
  }

  async function getLocalTime(timezone) {
    const apiUrl = `https://worldtimeapi.org/api/timezone/${timezone}`;
    
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching local time:", error);
      return null;
    }
  }
  const timezoneIdentifiers = [
    'Asia/Jerusalem',
    'Europe/Moscow',
    'Europe/Minsk',
    'Europe/Paris',
    'America/Argentina/Buenos_Aires',
    'Europe/London',
    'Asia/Tel_Aviv',
    'America/New_York'
  ];  


async function updateWeather() {
    const cities = ['Jerusalem', 'Moscow', 'Minsk', 'Paris', 'Buenos Aires', 'London', 'Tel Aviv', 'New York'];
  
    for (let i = 0; i < cities.length; i++) {
      const city = cities[i];
      const timezone = timezoneIdentifiers[i];

      const weatherData = await getWeather(city);
      const localTimeData = await getLocalTime(timezone);

      const carouselItem = document.getElementById(`carousel-item-${i}`);
      const weatherInfo = document.createElement('div');
      weatherInfo.classList.add('carousel-weather');
  
      const weatherIcon = document.createElement('i');
      weatherIcon.classList.add('fas', `fa-${getWeatherIcon(weatherData.weather[0].icon)}`);
      weatherInfo.appendChild(weatherIcon);
  
      const weatherDescription = document.createElement('p');
      weatherDescription.innerHTML = `<b>Current Weather: ${weatherData.weather[0].description}</b>`;
      weatherInfo.appendChild(weatherDescription);
  
      const temperature = document.createElement('p');
      temperature.innerHTML = `<b>Current Temperature: ${weatherData.main.temp} °C</b>`;
      weatherInfo.appendChild(temperature);
  
      if (localTimeData) {
        const localTime = document.createElement('p');
        const localTimeDate = new Date(localTimeData.utc_datetime);
        
        // Display local time with the city's timezone offset
        const formattedLocalTime = localTimeDate.toLocaleTimeString(undefined, {
          timeZone: localTimeData.timezone,
          hour: 'numeric',
          minute: 'numeric'
        });
  
        localTime.innerHTML = `<b>Local Time: ${formattedLocalTime}</b>`;
        weatherInfo.appendChild(localTime);
      }
    
      carouselItem.querySelector('.carousel-caption .carousel-weather').appendChild(weatherInfo);
    }
  }

  // Helper function to map weather icon codes to Font Awesome icons
  function getWeatherIcon(iconCode) {
    const iconMap = {
      '01d': 'sun', // clear sky day
      '01n': 'moon', // clear sky night
      '02d': 'cloud-sun', // few clouds day
      '02n': 'cloud-moon', // few clouds night
      '03d': 'cloud', // scattered clouds day
      '03n': 'cloud', // scattered clouds night
      '04d': 'cloud', // broken clouds day
      '04n': 'cloud', // broken clouds night
      '09d': 'cloud-showers-heavy', // shower rain day
      '09n': 'cloud-showers-heavy', // shower rain night
      '10d': 'cloud-rain', // rain day
      '10n': 'cloud-rain', // rain night
      '11d': 'bolt', // thunderstorm day
      '11n': 'bolt', // thunderstorm night
      '13d': 'snowflake', // snow day
      '13n': 'snowflake', // snow night
      '50d': 'smog', // mist day
      '50n': 'smog', // mist night
    };
    return iconMap[iconCode] || 'question'; // 'question' icon for unknown/unsupported codes
  }
  

// Function to get the current date and time in local computer timezone without seconds
function getCurrentDateTime() {
  const now = new Date();
  const options = {
    year: 'numeric',
    // month: '2-digit',
    month: 'long', // Display month as full name (e.g., January)

    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false // Use 24-hour format
  };
  return now.toLocaleString('en-US', options);
}


// Function to get the current timezone offset in "GMT±hh:mm" format
function getTimezoneOffset() {
  const timezoneOffsetMinutes = new Date().getTimezoneOffset();
  const timezoneOffsetHours = timezoneOffsetMinutes / 60;
  const timezoneOffsetDirection = timezoneOffsetHours > 0 ? "-" : "+";
  const timezoneOffsetAbs = Math.abs(timezoneOffsetHours);
  const timezoneHours = String(Math.floor(timezoneOffsetAbs)).padStart(2, "0");
  const timezoneMinutes = String((timezoneOffsetAbs * 60) % 60).padStart(2, "0");

  return `GMT${timezoneOffsetDirection}${timezoneHours}:${timezoneMinutes}`;
}
  
// Function to fetch country information based on the IP address
async function getCountryByIP() {
  const apiKey = 'e4b510c7e55037'; // Replace with your actual API key
  const apiUrl = `https://ipinfo.io?token=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data.country || 'Unknown Country';
  } catch (error) {
    console.error('Error fetching country information:', error);
    return 'Unknown Country';
  }
}

  // Update the content of the spans with the current date, time, and timezone
  async function updateDateTime() {
    document.getElementById("currentDateTime").textContent = getCurrentDateTime();
    const timezoneOffset = getTimezoneOffset();
    document.getElementById("timezone").textContent = timezoneOffset;
    const countryName = await getCountryByIP();
    document.getElementById("timezoneCity").textContent = `Country: ${countryName}`;
  }
  // Add an event listener to DOMContentLoaded
document.addEventListener('DOMContentLoaded', async () => {
  // Call the updateDateTime function to set the initial values
  updateDateTime();
  // Call the updateWeather function to fetch and display weather information
  await updateWeather();
});
document.addEventListener("DOMContentLoaded", function () {
  const dropdownRes = document.querySelector(".dropdownRes");
  const chevronIcon = document.querySelector(".chevron-icon");
  const dropdownToggle2 = document.getElementById("dropdownToggle"); // Get the dropdown toggle element

  // Toggle the dropdown content when clicking on the chevron icon
  chevronIcon.addEventListener("click", function () {
    dropdownRes.classList.toggle("show");
  });
  dropdownToggle2.addEventListener("click", function () {
    dropdownRes.classList.toggle("show");
  });
 

  // Select a destination
  const destinationList = document.querySelectorAll(".destination-list li");
  destinationList.forEach(li => {
    li.addEventListener("click", function () {
      const location = document.querySelector(".location");
      location.textContent = li.textContent;
      dropdownRes.classList.remove("show");
    });
    
  });
   // Update restaurant cards for the default selection ("Jerusalem")
   updateRestaurantCards("Jerusalem");
});

const dropdownToggle = document.querySelector('.dropdownRes-toggle');
const destinationList = document.querySelector('.destination-list');

const restaurantCardsContainer = document.getElementById('restaurantCardsContainer');
const sitesCardsContainer = document.getElementById('sitesCardsContainer');


dropdownToggle.addEventListener('click', () => {
  destinationList.classList.toggle('active');
});

destinationList.addEventListener('click', (event) => {
  if (event.target.tagName === 'LI') {
    const selectedCity = event.target.textContent;
    updateRestaurantCards(selectedCity);
  }
});

const restaurantsData = {
  Jerusalem: [
    {
      name: "Machneyuda",
      address: "Beit Ya'akov St 10",
      website: "https://www.machneyuda.co.il/",
      image: "https://res.cloudinary.com/dxsuizt1v/image/upload/v1691761548/Restaurants/Jerusalem/Machneyuda_pvd6zr.webp"
    },
    {
      name: "Mona",
      address: "Shmu'el ha-Nagid St 12",
      website: "https://tabitisrael.co.il/online-reservations/create-reservation?step=search&orgId=61c04e9a61d16c6cfaa550f7&source=google",
      image: "https://res.cloudinary.com/dxsuizt1v/image/upload/v1691761544/Restaurants/Jerusalem/mona_ep2ed2.webp"
    },
    {
      name: "Azura",
      address: "Ha-Eshkol St 4",
      website: "https://www.facebook.com/AZURARESTURANT/?rf=246605802020055",
      image: "https://res.cloudinary.com/dxsuizt1v/image/upload/v1691761548/Restaurants/Jerusalem/azura_qryso3.webp"
    },
    {
      name: "Ishtabach",
      address: "Beit Ya'akov St 1",
      website: "https://tabitisrael.co.il/tabit-order?siteName=ishtabach&step=enter",
      image: "https://res.cloudinary.com/dxsuizt1v/image/upload/v1691761546/Restaurants/Jerusalem/ishtabach_ikuksa.webp"
    },
    {
      name: "Hazot",
      address: "Agripas St 121",
      website: "https://hatzot.co.il/homepage/",
      image: "https://res.cloudinary.com/dxsuizt1v/image/upload/v1691761549/Restaurants/Jerusalem/hazot_wnfrl4.webp"
    },
    
    // ... more restaurants for Moscow
  ],
  Moscow: [
    {
      name: "Grand Cafe Dr. Jhivago",
      address: "Mokhovaya St, 15с1",
      website: "https://drzhivago.ru/en/",
      image: "https://res.cloudinary.com/dxsuizt1v/image/upload/v1691761544/Restaurants/moscow/doctor_ohepry.webp"
    },
    {
      name: "Cafe Pushkin",
      address: "Tverskoy Blvd, 26А",
      website: "https://cafe-pushkin.ru/en/",
      image: "https://res.cloudinary.com/dxsuizt1v/image/upload/v1691761544/Restaurants/moscow/puskin_ezhpis.webp"
    },
    {
      name: "Khachapuri",
      address: "Bolshoy Gnezdnikovskiy pereulok, 10",
      website: "https://hacha.ru/en/",
      image: "https://res.cloudinary.com/dxsuizt1v/image/upload/v1691761543/Restaurants/moscow/Khachapuri_qvlvj8.webp"
    },
    {
      name: "Mari Vanna",
      address: "Spiridon'yevskiy Pereulok, 10a",
      website: "https://ginza.ru/msk/restaurant/marivanna",
      image: "https://res.cloudinary.com/dxsuizt1v/image/upload/v1691761543/Restaurants/moscow/vanna_mgrlaa.webp"
    },
    {
      name: "Megobari",
      address: "Ulitsa Maroseyka, 15",
      website: "https://megobari.wine/",
      image: "https://res.cloudinary.com/dxsuizt1v/image/upload/v1691761544/Restaurants/moscow/megobari_r5tggp.webp"
    },
    // ... more restaurants for Moscow
  ],
  Minsk: [
    {
      name: "Wood & Fire",
      address: "vulica Francyska Skaryny 1",
      website: "https://woodfire.by/",
      image: "https://res.cloudinary.com/dxsuizt1v/image/upload/v1691761546/Restaurants/minsk/WoodFire_mflu6x.webp"
    },
    {
      name: "Pinky Bandinsky",
      address: "Kamsamoĺskaja vulica 13А",
      website: "https://pinkybandinsky.by/",
      image: "https://res.cloudinary.com/dxsuizt1v/image/upload/v1691761544/Restaurants/minsk/pinky_lsxkjj.webp"
    },
    // ..
    {
      name: "Ember",
      address: "Prospekte Pobeditelei 9",
      website: "https://ember.by/en/",
      image: "https://res.cloudinary.com/dxsuizt1v/image/upload/v1691761544/Restaurants/minsk/ember_hlq0fx.webp"
    },
    // ..
    {
      name: "Lebiažy",
      address: "Ulitsa Ratomskaya 2а",
      website: "https://lebyaziy.by/",
      image: "https://res.cloudinary.com/dxsuizt1v/image/upload/v1691761554/Restaurants/minsk/Lebyazhii_vrsk9z.webp"
    },
    // ..
    {
      name: "FABRIQ",
      address: "Prospekte Pobeditelei 1",
      website: "https://fabriq.by/",
      image: "https://res.cloudinary.com/dxsuizt1v/image/upload/v1691761545/Restaurants/minsk/fabriq_of8sis.webp"
    },
    // ..
    // ... more restaurants for Minsk
  ],
  Paris: [
    {
      name: "L'Atelier de Joël Robuchon Étoile",
      address: "133 Av. des Champs-Élysées",
      website: "http://atelier-robuchon-etoile.com/en/accueil.php",
      image: "https://res.cloudinary.com/dxsuizt1v/image/upload/v1691761543/Restaurants/paris/Atelier_ihyht4.webp"
    },
    {
      name: "ALCAZAR",
      address: "62 Rue Mazarine",
      website: "http://www.alcazar.fr/?lang=en",
      image: "https://res.cloudinary.com/dxsuizt1v/image/upload/v1691761543/Restaurants/paris/ALCAZAR_kahazr.webp"
    },
    // ..
    {
      name: "Angelina",
      address: "226 Rue de Rivoli",
      website: "https://www.angelina-paris.fr/?y_source=1_MTE5MzAwODYtNzE1LWxvY2F0aW9uLndlYnNpdGU%3D",
      image: "https://res.cloudinary.com/dxsuizt1v/image/upload/v1691761543/Restaurants/paris/angelina_y6melm.webp"
    },
    // ..
    {
      name: "Epicure",
      address: "12 Rue du Faubourg Saint-Honoré",
      website: "https://www.oetkercollection.com/hotels/le-bristol-paris/restaurants-bar/epicure/",
      image: "https://res.cloudinary.com/dxsuizt1v/image/upload/v1691761553/Restaurants/paris/Epicure_zyobtv.webp"
    },
    // ..
    {
      name: "Relais de l’Entrecôte",
      address: "15 Rue Marbeuf",
      website: "https://www.relaisentrecote.fr/?page_id=396&lang=en_GB",
      image: "https://res.cloudinary.com/dxsuizt1v/image/upload/v1691761543/Restaurants/paris/relais-de-l-entrecote_dihgvs.webp"
    },
    // ..
    // ... more restaurants for Minsk
  ],
  "Buenos Aires": [
    {
      name: "El Desnivel, San Telmo",
      address: "Defensa 855, C1065 AAO",
      website: "https://webdato.com/services/qr/desnivel/carta/",
      image: "https://res.cloudinary.com/dxsuizt1v/image/upload/v1691761547/Restaurants/Buenos/el-desnivel-san-telmo_ypoak8.webp"
    },
    {
      name: "Puerto Cristal",
      address: "Av. Alicia Moreau de Justo 1082",
      website: "https://www.puerto-cristal.com.ar/en/",
      image: "https://res.cloudinary.com/dxsuizt1v/image/upload/v1691761545/Restaurants/Buenos/PuertoCristal_eufjm9.webp"
    },
    // ..
    {
      name: "Parrilla La Brigada",
      address: "Estados Unidos 465, C1066 CABA",
      website: "https://labrigada.com.ar/labrigada/",
      image: "https://res.cloudinary.com/dxsuizt1v/image/upload/v1691761546/Restaurants/Buenos/ParrillaLaBrigada_fworpl.webp"
    },
    // ..
    {
      name: "Don Julio",
      address: "Guatemala 4699, C1425 CABA",
      website: "https://www.parrilladonjulio.com/https://restaurant1-minsk.com",
      image: "https://res.cloudinary.com/dxsuizt1v/image/upload/v1691761545/Restaurants/Buenos/DonJulio_nthbwd.webp"
    },
    // ..
    {
      name: "Santos Manjares",
      address: "Paraguay 938, C1057 AAN",
      website: "https://www.instagram.com/santosmanjares/?hl=en",
      image: "https://res.cloudinary.com/dxsuizt1v/image/upload/v1691761545/Restaurants/Buenos/santos-manjares_aupy0k.webp"
    },
    // ..
    // ... more restaurants for Minsk
  ],
  London: [
    {
      name: "Masala Zone Soho",
      address: "9 Marshall St",
      website: "https://www.masalazone.com/locations/soho/",
      image: "https://res.cloudinary.com/dxsuizt1v/image/upload/v1691761545/Restaurants/London/MasalaZoneSoho_ngws9l.webp"
    },
    {
      name: "Blacklock Shoreditch",
      address: "28-30 Rivington St",
      website: "https://theblacklock.com/restaurants/shoreditch/",
      image: "https://res.cloudinary.com/dxsuizt1v/image/upload/v1691761558/Restaurants/London/Blacklock_zku774.webp"
    },
    // ..
    {
      name: "Flat Iron Covent Garden",
      address: "17-18 Henrietta St",
      website: "https://flatironsteak.co.uk/",
      image: "https://res.cloudinary.com/dxsuizt1v/image/upload/v1691761550/Restaurants/London/Flat-Iron-Food-Steak-2_coz55l.webp"
    },
    // ..
    {
      name: "Dishoom Covent Garden",
      address: "12 Upper St Martin's Ln",
      website: "https://www.dishoom.com/",
      image: "https://res.cloudinary.com/dxsuizt1v/image/upload/v1691761547/Restaurants/London/Dishoom_vy24wp.webp"
    },
    // ..
    {
      name: "The Vault",
      address: "3 Greek St",
      website: "https://milroys.co.uk/pages/soho-the-vault",
      image: "https://res.cloudinary.com/dxsuizt1v/image/upload/v1691761549/Restaurants/London/TheVault_qp9rul.webp"
    },
    // ..
    // ... more restaurants for Minsk
  ],
  "Tel Aviv - Jaffa": [
    {
      name: "Turkiz",
      address: "Herzl Rosenblum St 6",
      website: "https://www.turkiz-rest.co.il/",
      image: "https://res.cloudinary.com/dxsuizt1v/image/upload/v1691761548/Restaurants/TelAviv/Turkiz_fmcbqg.webp"
    },
    {
      name: "Hudson Brasserie",
      address: "HaBarzel St 27",
      website: "https://hudson-tlv.com/ramat-hahayal/",
      image: "https://res.cloudinary.com/dxsuizt1v/image/upload/v1691761546/Restaurants/TelAviv/Hudson-Brasserie-9_ehp2rr.webp"
    },
    // ..
    {
      name: "Port Sa'id",
      address: "Har Sinai St 5",
      website: "https://www.instagram.com/port_said/?igshid=MzRlODBiNWFlZA%3D%3D",
      image: "https://res.cloudinary.com/dxsuizt1v/image/upload/v1691761554/Restaurants/TelAviv/PortSaid_cfl1yb.webp"
    },
    // ..
    {
      name: "OCD TLV",
      address: "Tirtsa St 17",
      website: "https://www.ocdtlv.com/en/",
      image: "https://res.cloudinary.com/dxsuizt1v/image/upload/v1691761545/Restaurants/TelAviv/ocd_nhuxbo.webp"
    },
    // ..
    {
      name: "Mashya",
      address: "Mendele Mokher Sfarim St 5",
      website: "https://www.mashya.co.il/",
      image: "https://res.cloudinary.com/dxsuizt1v/image/upload/v1691761545/Restaurants/TelAviv/Mashya_vcmviu.webp"
    },
    // ..
    // ... more restaurants for Minsk
  ],
  "New York": [
    {
      name: "Katz's Delicatessen",
      address: "205 E Houston St",
      website: "https://katzsdelicatessen.com/",
      image: "https://res.cloudinary.com/dxsuizt1v/image/upload/v1691761544/Restaurants/NewYork/KatzDelicatessen_bhlpmf.webp"
    },
    {
      name: "Nusr-Et Steakhouse",
      address: "60 W 53rd St",
      website: "https://nusretusa.com/ny-midtown/menu",
      image: "https://res.cloudinary.com/dxsuizt1v/image/upload/v1691761546/Restaurants/NewYork/Nusr-Et_gf6hsh.webp"
    },
    // ..
    {
      name: "Jacob's Pickles",
      address: "509 Amsterdam Ave",
      website: "https://www.jacobspickles.com/",
      image: "https://res.cloudinary.com/dxsuizt1v/image/upload/v1691761552/Restaurants/NewYork/jacobs-pickles2_oxkow0.webp"
    },
    // ..
    {
      name: "Gallaghers Steakhouse",
      address: "228 W 52nd St",
      website: "https://www.gallaghersnysteakhouse.com/menu.php?venue_id=1&menu_id=1",
      image: "https://res.cloudinary.com/dxsuizt1v/image/upload/v1691761544/Restaurants/NewYork/Gallaghers_ogucvl.webp"
    },
    // ..
    {
      name: "Boucherie West Village",
      address: "99 7th Ave S",
      website: "https://www.boucherieus.com/hours-and-locations/",
      image: "https://res.cloudinary.com/dxsuizt1v/image/upload/v1691761559/Restaurants/NewYork/Boucherie_anyhru.webp"
    },
    // ..
    // ... more restaurants for Minsk
  ],
  // ... and so on for other cities
};

const sitesData = {
  Jerusalem: [
    {
      name: "Western Wall & Tunnel",
      address: "Western Wall, Old City",
      website: "https://thekotel.org/en/",
      image: "https://res.cloudinary.com/dxsuizt1v/image/upload/v1691761579/Sites/Jerusalem/western_ha1znz.webp"
    },
    {
      name: "City of David",
      address: "Ma'alot Ir David St 17",
      website: "https://cityofdavid.org.il/",
      image: "https://res.cloudinary.com/dxsuizt1v/image/upload/v1691761578/Sites/Jerusalem/cityOfDavid_bwk93h.webp"
    },
    {
      name: "The Israel Museum",
      address: "Derech Ruppin 11",
      website: "https://www.imj.org.il/",
      image: "https://res.cloudinary.com/dxsuizt1v/image/upload/v1691761577/Sites/Jerusalem/Museum_rpnozv.webp"
    },
    {
      name: "Machaneh Yehudah",
      address: "Agripas St 90",
      website: "https://en.wikipedia.org/wiki/Mahane_Yehuda_Market",
      image: "https://res.cloudinary.com/dxsuizt1v/image/upload/v1691761592/Sites/Jerusalem/MachanehYehudah_yzzjyv.webp"
    },
    {
      name: "Holy Sepulchre Church",
      address: "Old City",
      website: "https://en.wikipedia.org/wiki/Church_of_the_Holy_Sepulchre",
      image: "https://res.cloudinary.com/dxsuizt1v/image/upload/v1691761586/Sites/Jerusalem/HolySepulchreChurch_zxig06.webp"
    },
    
    // ... more restaurants for Moscow
  ],
  Moscow: [
    {
      name: "Red square and Kremlin",
      address: "Red square",
      website: "https://um.mos.ru/places/krasnaya_ploshchad/",
      image: "https://res.cloudinary.com/dxsuizt1v/image/upload/v1691761576/Sites/moscow/red_g0zgsk.webp"
    },
    {
      name: "Bolshoi Theatre",
      address: "Theatre Square, 1",
      website: "https://bolshoi.ru/en",
      image: "https://res.cloudinary.com/dxsuizt1v/image/upload/v1691761578/Sites/moscow/Bolshoi-Theatre-Moscow-feature_k8dabs.webp"
    },
    {
      name: "Vdnkh",
      address: "Prospekt Mira, 119",
      website: "https://vdnh.ru/",
      image: "https://res.cloudinary.com/dxsuizt1v/image/upload/v1691761591/Sites/moscow/Vdnkh_fgzqrv.webp"
    },
    {
      name: "Gorky Park",
      address: "Krymsky Val, 9",
      website: "https://park-gorkogo.com/en/",
      image: "https://res.cloudinary.com/dxsuizt1v/image/upload/v1691761576/Sites/moscow/GorkyPark_fghsqd.webp"
    },
    {
      name: "Izmaylovskiy Bazar",
      address: "Izmaylovskiy Proyezd, 73Жс5",
      website: "https://www.kremlin-izmailovo.com/",
      image: "https://res.cloudinary.com/dxsuizt1v/image/upload/v1691761578/Sites/moscow/IzmaylovskiyBazar_oo7pty.webp"
    },
    // ... more restaurants for Moscow
  ],
  Minsk: [
    {
      name: "Victory Square",
      address: "Victory Squar",
      website: "https://en.wikipedia.org/wiki/Victory_Square,_Minsk",
      image: "https://res.cloudinary.com/dxsuizt1v/image/upload/v1691761579/Sites/minsk/Victory-square_bxstve.webp"
    },
    {
      name: "Great Patriotic War Museum",
      address: "Prospekte Pobeditelei 8",
      website: "https://www.warmuseum.by/en/",
      image: "https://res.cloudinary.com/dxsuizt1v/image/upload/v1691761577/Sites/minsk/GreatPatrioticWarMuseum_jtebun.webp"
    },
    // ..
    {
      name: "Chaliuskincai Park",
      address: "prasp. Niezaliežnasci",
      website: "http://parki.by/All-parks/2",
      image: "https://res.cloudinary.com/dxsuizt1v/image/upload/v1691761577/Sites/minsk/park_vrintg.webp"
    },
    // ..
    {
      name: "Komarovsky Market",
      address: "vulica Viery Charužaj 8",
      website: "https://komarovka.by/",
      image: "https://res.cloudinary.com/dxsuizt1v/image/upload/v1691761577/Sites/minsk/Komarovsky_kmqs0m.webp"
    },
    // ..
    {
      name: "Circus",
      address: "Independence Ave 32",
      website: "http://circus.by/",
      image: "https://res.cloudinary.com/dxsuizt1v/image/upload/v1691761577/Sites/minsk/Circus_jhccc1.webp"
    },
    // ..
    // ... more restaurants for Minsk
  ],
  Paris: [
    {
      name: "Eiffel Tower",
      address: "Champ de Mars, 5 Av",
      website: "https://www.toureiffel.paris/en",
      image: "https://res.cloudinary.com/dxsuizt1v/image/upload/v1691761576/Sites/paris/eiffel-tower-paris-france-EIFFEL0217-6ccc3553e98946f18c893018d5b42bde_i2pin2.webp"
    },
    {
      name: "Louvre Museum",
      address: "75001 Paris",
      website: "https://www.louvre.fr/en",
      image: "https://res.cloudinary.com/dxsuizt1v/image/upload/v1691761575/Sites/paris/luver_jedsem.webp"
    },
    // ..
    {
      name: "Arc de Triomphe",
      address: "Pl. Charles de Gaulle",
      website: "https://www.paris-arc-de-triomphe.fr/en",
      image: "https://res.cloudinary.com/dxsuizt1v/image/upload/v1691761575/Sites/paris/arc_vkpeef.webp"
    },
    // ..
    {
      name: "Notre-Dame de Paris",
      address: "6 Parvis Notre-Dame - Pl",
      website: "https://www.notredamedeparis.fr/en/",
      image: "https://res.cloudinary.com/dxsuizt1v/image/upload/v1691761576/Sites/paris/Cathe%CC%81drale-Notre-Dame-de-Paris-Vue-depuis-le-parvis--630x405--_-LeifLinding_ematop.webp"
    },
    // ..
    {
      name: "Disneyland Paris",
      address: "Bd de Parc, 77700 Coupvray",
      website: "https://www.disneylandparis.com/en-usd/",
      image: "https://res.cloudinary.com/dxsuizt1v/image/upload/v1691761576/Sites/paris/disney_nwwv1l.webp"
    },
    // ..
  ],
  "Buenos Aires": [
    {
      name: "Museo Nacional de Bellas Artes",
      address: "Av. del Libertador 1473",
      website: "https://www.bellasartes.gob.ar/en/",
      image: "https://res.cloudinary.com/dxsuizt1v/image/upload/v1691761580/Sites/Buenos/MuseoNacionaldeBellasArtes_cpshct.webp"
    },
    {
      name: "Tres de Febrero Park",
      address: "Av. Infanta Isabel 110",
      website: "https://turismo.buenosaires.gob.ar/en/otros-establecimientos/parque-tres-de-febrero",
      image: "https://res.cloudinary.com/dxsuizt1v/image/upload/v1691761588/Sites/Buenos/TresdeFebreroPark_fhqhza.webp"
    },
    // ..
    {
      name: "Plaza de Mayo",
      address: "Balcarce 78",
      website: "https://turismo.buenosaires.gob.ar/en/otros-establecimientos/plaza-de-mayo",
      image: "https://res.cloudinary.com/dxsuizt1v/image/upload/v1691761583/Sites/Buenos/PlazadeMayo_v7vndj.webp"
    },
    // ..
    {
      name: "Feira de San Telmo",
      address: "Defensa 1086",
      website: "https://www.feriadesantelmo.com/",
      image: "https://res.cloudinary.com/dxsuizt1v/image/upload/v1691761581/Sites/Buenos/FeiradeSanTelmo_zknlom.webp"
    },
    // ..
    {
      name: "Teatro Colón",
      address: "Cerrito 628",
      website: "https://teatrocolon.org.ar/en",
      image: "https://res.cloudinary.com/dxsuizt1v/image/upload/v1691761579/Sites/Buenos/TeatroColon_xl7p50.webp"
    },
    // ..
    // ... more restaurants for Minsk 
  ],
  London: [
    {
      name: "City of Westminster",
      address: "Westminster",
      website: "https://en.wikipedia.org/wiki/City_of_Westminster",
      image: "https://res.cloudinary.com/dxsuizt1v/image/upload/v1691761582/Sites/London/Westminster_i2mgpi.webp"
    },
    {
      name: "Tower of London",
      address: "St Katharine's & Wapping",
      website: "https://www.hrp.org.uk/tower-of-london/",
      image: "https://res.cloudinary.com/dxsuizt1v/image/upload/v1691761578/Sites/London/TowerLondon_jjs4og.webp"
    },
    // ..
    {
      name: "British Museum",
      address: "Great Russell St, Bloomsbury",
      website: "https://www.britishmuseum.org/",
      image: "https://res.cloudinary.com/dxsuizt1v/image/upload/v1691761584/Sites/London/the-British-Museum_gm9sff.webp"
    },
    // ..
    {
      name: "Hyde Park",
      address: "Hyde Park",
      website: "https://www.royalparks.org.uk/parks/hyde-park",
      image: "https://res.cloudinary.com/dxsuizt1v/image/upload/v1691761582/Sites/London/HydePark_isvrhk.webp"
    },
    // ..
    {
      name: "London Eye",
      address: "Lambeth",
      website: "https://www.londoneye.com/",
      image: "https://res.cloudinary.com/dxsuizt1v/image/upload/v1691761590/Sites/London/London_Eye_jsaudy.webp"
    },
    // ..
    // ... more restaurants for Minsk
  ],
  "Tel Aviv - Jaffa": [
    {
      name: "Carmel Market",
      address: "HaCarmel St",
      website: "https://en.wikipedia.org/wiki/Carmel_Market",
      image: "https://res.cloudinary.com/dxsuizt1v/image/upload/v1691761578/Sites/TelAviv/CarmelMarket_h7oryw.webp"
    },
    {
      name: "Promenade (Tayelet)",
      address: "Promenade",
      website: "https://en.wikipedia.org/wiki/Tel_Aviv_Promenade",
      image: "https://res.cloudinary.com/dxsuizt1v/image/upload/v1691761577/Sites/TelAviv/Promenade_xxzoch.webp"
    },
    // ..
    {
      name: "Old Jaffa (Yafo)",
      address: "Old Jaffa",
      website: "https://en.wikipedia.org/wiki/Old_Jaffa",
      image: "https://res.cloudinary.com/dxsuizt1v/image/upload/v1691761580/Sites/TelAviv/city-port-Israel-Tel-Aviv-Yafo_fosro5.webp"
    },
    // ..
    {
      name: "Neve Tzedek",
      address: "Neve Tzedek",
      website: "https://en.wikipedia.org/wiki/Neve_Tzedek",
      image: "https://res.cloudinary.com/dxsuizt1v/image/upload/v1691761579/Sites/TelAviv/neve-tzdek-inside-min_fnijl0.webp"
    },
    // ..
    {
      name: "Sarona Market",
      address: "Kaplan St 3",
      website: "https://www.saronamarket.co.il/en",
      image: "https://res.cloudinary.com/dxsuizt1v/image/upload/v1691761580/Sites/TelAviv/SaronaMarket_p2hylk.webp"
    },
    // ..
    // ... more restaurants for Minsk
  ],
  "New York": [
    {
      name: "Times Square",
      address: "Manhattan",
      website: "https://www.timessquarenyc.org/",
      image: "https://res.cloudinary.com/dxsuizt1v/image/upload/v1691761576/Sites/NewYork/TimesSquare_breoww.webp"
    },
    {
      name: "Statue of Liberty",
      address: "Liberty Island",
      website: "https://www.nps.gov/stli/index.htm",
      image: "https://res.cloudinary.com/dxsuizt1v/image/upload/v1691761586/Sites/NewYork/StatueofLiberty_mfu57z.webp"
    },
    // ..
    {
      name: "Central Park",
      address: "Central Park",
      website: "https://www.centralparknyc.org/",
      image: "https://res.cloudinary.com/dxsuizt1v/image/upload/v1691761576/Sites/NewYork/CentralPark_zlac3f.webp"
    },
    // ..
    {
      name: "Empire State Building",
      address: "350 5th Ave",
      website: "https://www.esbnyc.com/",
      image: "https://res.cloudinary.com/dxsuizt1v/image/upload/v1691761578/Sites/NewYork/empire-state-building-in-new-york-top_cioqrv.webp"
    },
    // ..
    {
      name: "Chelsea Market",
      address: "75 9th Ave, New York, NY 10011",
      website: "https://www.chelseamarket.com/",
      image: "https://res.cloudinary.com/dxsuizt1v/image/upload/v1691761585/Sites/NewYork/ChelseaMarket_vpvstn.webp"
    },
    // ..
    // ... more restaurants for Minsk
  ],
  // ... and so on for other cities
};


function updateRestaurantCards(city) {
  restaurantCardsContainer.innerHTML = "";
  sitesCardsContainer.innerHTML="";

  // Get restaurant data for the selected city
  const restaurantsForCity = restaurantsData[city];
  const sitesForCity = sitesData[city];


  // Create and append restaurant cards
  restaurantsForCity.forEach(restaurant => {
    const card = document.createElement('div');
    card.className = 'restaurant-card';

    const image = document.createElement('img');
    image.src = restaurant.image;
    image.alt = restaurant.name;
    card.appendChild(image);

    const name = document.createElement('h3');
    const nameLink = document.createElement('a');
    nameLink.href=restaurant.website;
    nameLink.target = '_blank';
    nameLink.classList.add('black_link'); //
    name.textContent = restaurant.name;
    name.appendChild(nameLink)
    card.appendChild(name);

    const address = document.createElement('p');
    const addressLink = document.createElement('a');
    const restaurantLinkAdress=restaurant.address+","+city
    addressLink.href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(restaurantLinkAdress)}`;
    addressLink.target = '_blank';
    addressLink.classList.add('orange_link'); // Add a class to the <a> element
    addressLink.classList.add('line'); // Add a class to the <a> element

    addressLink.textContent = restaurant.address;
    address.appendChild(addressLink);
    card.appendChild(address);


    const websiteLink = document.createElement('a');
    websiteLink.target="_blank";
    websiteLink.href = restaurant.website;
    websiteLink.textContent = 'Check it out';
    websiteLink.classList.add('restaurant-card-link'); // Add a class to the <a> element

    card.appendChild(websiteLink);

    restaurantCardsContainer.appendChild(card);
  });

  // Create and append sites cards
  sitesForCity.forEach(restaurant => {
    const card = document.createElement('div');
    card.className = 'restaurant-card';

    const image = document.createElement('img');
    image.src = restaurant.image;
    image.alt = restaurant.name;
    card.appendChild(image);

    const name = document.createElement('h3');
    const nameLink = document.createElement('a');
    nameLink.href=restaurant.website;
    nameLink.target = '_blank';
    nameLink.classList.add('black_link'); //
    name.textContent = restaurant.name;
    name.appendChild(nameLink)
    card.appendChild(name);

    const address = document.createElement('p');
    const addressLink = document.createElement('a');
    const restaurantLinkAdress=restaurant.address+","+city
    addressLink.href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(restaurantLinkAdress)}`;
    addressLink.target = '_blank';
    addressLink.classList.add('orange_link'); // Add a class to the <a> element
    addressLink.classList.add('line'); // Add a class to the <a> element

    addressLink.textContent = restaurant.address;
    address.appendChild(addressLink);
    card.appendChild(address);


    const websiteLink = document.createElement('a');
    websiteLink.target="_blank";
    websiteLink.href = restaurant.website;
    websiteLink.textContent = 'Check it out';
    websiteLink.classList.add('restaurant-card-link'); // Add a class to the <a> element

    card.appendChild(websiteLink);

    sitesCardsContainer.appendChild(card);
  });
}


// document.addEventListener("DOMContentLoaded", function () {
//   const dropdownRes = document.querySelector(".dropdownRes");
//   const chevronIcon = document.querySelector(".chevron-icon");
  
//   // Toggle the dropdown content when clicking on the chevron icon
//   chevronIcon.addEventListener("click", function () {
//     dropdownRes.classList.toggle("show");
//   });

//   // Select a destination
//   const destinationList = document.querySelectorAll(".destination-list li");
//   destinationList.forEach(li => {
//     li.addEventListener("click", function () {
//       const location = document.querySelector(".location");
//       location.textContent = li.textContent;
//       dropdownRes.classList.remove("show");
//     });
//   });
// });




  // updateDateTime();
//  // Function to fetch the city name based on the timezone offset using TimeZoneDB API
  //  async function getTimezoneCity(timezoneOffset) {
  //   console.log(timezoneOffset);
  //   const apiKey = '281Y855Y9M4B'; // Replace with your actual API key
  //   const apiUrl = `http://api.timezonedb.com/v2.1/get-time-zone?key=${apiKey}&format=json&by=zone&zone=${timezoneOffset}`;
    
  //   try {
  //     const response = await fetch(apiUrl);
  //     const data = await response.json();
  //     if (data.status === 'OK') {
  //       // Extract the country name from the timezone response (if available)
  //       const country = data.countryName;
  //       return country ? `Country: ${country}` : 'Unknown Country';
  //     } else {
  //       return 'Unknown Country';
  //     }
  //   } catch (error) {
  //     console.error('Error fetching country name:', error);
  //     return 'Unknown Country';
  //   }
  // }

  // Function to get the city and region based on the latitude and longitude coordinates
// async function getCityAndRegionByCoordinates(latitude, longitude) {
//   const geocoder = new google.maps.Geocoder();
//   const latLng = new google.maps.LatLng(latitude, longitude);

//   return new Promise((resolve, reject) => {
//     geocoder.geocode({ location: latLng }, (results, status) => {
//       if (status === google.maps.GeocoderStatus.OK) {
//         const addressComponents = results[0]?.address_components;
//         let city = '';
//         let region = '';
//         if (addressComponents) {
//           for (const component of addressComponents) {
//             if (component.types.includes('locality')) {
//               city = component.long_name;
//             }
//             if (component.types.includes('administrative_area_level_1')) {
//               region = component.long_name;
//             }
//           }
//         }
//         resolve({ city, region });
//       } else {
//         reject('Geocoder failed due to: ' + status);
//       }
//     });
//   });
// }

  // async function updateDateTime() {
  //   document.getElementById("currentDateTime").textContent = getCurrentDateTime();
  //   const timezoneOffset = getTimezoneOffset();
  //   document.getElementById("timezone").textContent = timezoneOffset;
  
  //   // Get the user's current location coordinates (latitude and longitude)
  //   navigator.geolocation.getCurrentPosition(
  //     async (position) => {
  //       const latitude = position.coords.latitude;
  //       const longitude = position.coords.longitude;
  
  //       // Get the city and region based on the coordinates
  //       try {
  //         const { city, region } = await getCityAndRegionByCoordinates(latitude, longitude);
  //         const locationInfo = city && region ? `${city}, ${region}` : 'Unknown Location';
  //         document.getElementById("timezoneCity").textContent = `Time Zone: ${locationInfo}`;
  //       } catch (error) {
  //         console.error('Error getting city and region:', error);
  //         document.getElementById("timezoneCity").textContent = 'Unknown Location';
  //       }
  //     },
  //     (error) => {
  //       console.error('Error getting user location:', error);
  //       document.getElementById("timezoneCity").textContent = 'Unknown Location';
  //     }
  //   );
  // }
  
  // Call the updateDateTime function to set the initial values

// async function updateWeather() {
//     const cities = ['Jerusalem', 'Moscow', 'Minsk', 'Paris', 'Buenos Aires', 'London', 'Tel Aviv', 'New York'];
  
//     for (let i = 0; i < cities.length; i++) {
//       const city = cities[i];
//       const forecastData = await getWeatherForecast(city);
  
//       const carouselItem = document.getElementById(`carousel-item-${i}`);
//       const weatherInfo = document.createElement('div');
//       weatherInfo.classList.add('carousel-weather');
  
//       // Display current weather information
//       const currentWeather = forecastData.list[0];
//       const currentWeatherCard = createForecastCard(currentWeather, true); // Pass true to indicate current weather
//       weatherInfo.appendChild(currentWeatherCard);
  
//       // Display 7-day forecast
//       for (let j = 1; j < 8; j++) {
//         const forecast = forecastData.list[j * 8]; // Data for 12:00 PM of each day
//         const forecastCard = createForecastCard(forecast, false); // Pass false to indicate forecast
//         weatherInfo.appendChild(forecastCard);
//       }
  
//       carouselItem.querySelector('.carousel-caption .carousel-weather').appendChild(weatherInfo);
//     }
//   }
  
//   function createForecastCard(forecastData, i) {
//     const date = new Date(forecastData.dt * 1000); // Convert the date format
//     const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'long' });
//     const weatherDescription = forecastData.weather[0].description;
//     const temperature = Math.round(forecastData.main.temp);
//     const iconCode = forecastData.weather[0].icon;
//     const iconUrl = `https://openweathermap.org/img/w/${iconCode}.png`;
  
//     const forecastCard = document.createElement('div');
//     forecastCard.classList.add('forecast-card');
  
//     const forecastDate = document.createElement('p');
//     forecastDate.classList.add('forecast-date');
//     forecastDate.innerText = dayOfWeek;
//     forecastCard.appendChild(forecastDate);
  
//     const forecastIcon = document.createElement('img');
//     forecastIcon.classList.add('forecast-icon');
//     forecastIcon.src = iconUrl;
//     forecastCard.appendChild(forecastIcon);
  
//     const forecastDesc = document.createElement('p');
//     forecastDesc.classList.add('forecast-description');
//     forecastDesc.innerText = weatherDescription;
//     forecastCard.appendChild(forecastDesc);
  
//     const forecastTemp = document.createElement('p');
//     forecastTemp.classList.add('forecast-temperature');
//     forecastTemp.innerHTML = `${temperature} °C`;
//     forecastCard.appendChild(forecastTemp);
  
//     return forecastCard;
//   }
  