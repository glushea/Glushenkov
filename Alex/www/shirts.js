// Function to fetch JSON data from a file
async function fetchShirtsData() {
    try {
      const response = await fetch('shirts_data.json'); // Replace with the correct path to your JSON file
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
  }
  
  // Function to generate cards from JSON data
  function generateCards(data) {
    const container = document.getElementById("cardContainer");
  
    data.forEach(item => {
      // Create card element
      const card = document.createElement("div");
      card.className = "col";
      card.innerHTML = `
        <div class="card shadow-sm">
          <img style="max-width: 100%;" src="${item.imgSrc}" alt="${item.title}">
          <div class="card-body">
         
            <h4>${item.title}</h4>
           
            <p class="card-text">${item.description}</p>
            <div class="button-container">
            <a href="${item.tshirt_link}" class="btn btn-tshirt" target="_blank">Buy T-shirt</a>
            <a href="${item.hoodie_link}" class="btn btn-hoodie" target="_blank">Buy Hoodie</a>
          </div>
  
          </div>
        </div>
      `;
  
      // Append card to the container
      container.appendChild(card);
    });
  }
  
  // Load and generate cards when the page loads
  document.addEventListener('DOMContentLoaded', async () => {
    const jsonData = await fetchShirtsData();
    generateCards(jsonData);
  });
  



 
// Function to generate carousel items and indicators from JSON data
function generateCarousel(data) {
    const carousel = document.getElementById("carouselExampleCaptions");
    const carouselInner = document.createElement("div");
    carouselInner.className = "carousel-inner";
  
    const carouselIndicators = document.createElement("div");
    carouselIndicators.className = "carousel-indicators";
  
    data.forEach((item, index) => {
      const carouselItem = document.createElement("div");
      carouselItem.className = "carousel-item" + (index === 0 ? " active" : "");
  
      // Create carousel image
      const carouselImage = document.createElement("img");
      carouselImage.src = item.imgMaster;
      carouselImage.className = "d-block w-100";
      carouselImage.alt = item.imgTitle;
  
      // Create carousel caption
      const carouselCaption = document.createElement("div");
      carouselCaption.className = "carousel-caption d-block cit";
      carouselCaption.innerHTML = `
        <h5 class="imgTitle">${item.title}</h5>
        <p class="shirtTitle">${item.shortTitle}</p>
      `;
  
      // Create carousel indicator button
      const indicatorButton = document.createElement("button");
      indicatorButton.type = "button";
      indicatorButton.dataset.bsTarget = "#carouselExampleCaptions";
      indicatorButton.dataset.bsSlideTo = index;
      indicatorButton.setAttribute("aria-label", `Slide ${index + 1}`);
      if (index === 0) {
        indicatorButton.className = "active";
        indicatorButton.setAttribute("aria-current", "true");
      }
  
      // Append image and caption to the carousel item
      carouselItem.appendChild(carouselImage);
      carouselItem.appendChild(carouselCaption);
  
      // Append carousel item to the carousel inner
      carouselInner.appendChild(carouselItem);
  
      // Append indicator button to the carousel indicators
      carouselIndicators.appendChild(indicatorButton);
    });
  
    // Append carousel inner to the carousel
    carousel.appendChild(carouselIndicators); // Add this line to append indicators
    carousel.appendChild(carouselInner);

    // carouselCaption.innerHTML='  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev"> <span class="carousel-control-prev-icon" aria-hidden="true"></span> <span class="visually-hidden">Previous</span></button><button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="visually-hidden">Next</span></button>';
  }
  
  // Load and generate carousel items and indicators when the page loads
  document.addEventListener('DOMContentLoaded', async () => {
    const jsonData = await fetchShirtsData();
    generateCarousel(jsonData);
  });
  
  
  