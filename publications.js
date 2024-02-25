function openURL(url) {
  window.open(url, "_blank");
}

document.addEventListener("DOMContentLoaded", function () {
    fetch("publications.json")
      .then((response) => response.json())
      .then((data) => {
        const cardContainer = document.getElementById("card-container");
  
        data.forEach((card) => {
          const cardHtml = `
            <div class="col">
              <div class="card shadow-sm">
                <img src="${card.imageSrc}" class="card-img" alt="${card.title}">
                <div class="card-body">
                  <p class="card-text">${card.description}</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-sm btn-custom-orange" onclick="openURL('${card.url}')">Check it out</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          `;
  
          cardContainer.innerHTML += cardHtml;
        });

        
      })
      .catch((error) => console.error("Error fetching card data: ", error));
  });
  