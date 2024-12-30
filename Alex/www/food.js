const carouselContainer = document.getElementById("carouselContainer");

async function fetchData() {
  try {
    const response = await fetch("food.json");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

function createCarousel(title, items) {
  const carousel = document.createElement("div");
  carousel.classList.add("carousel_food");

  const titleElement = document.createElement("h2");
  titleElement.classList.add("h2_food")
  titleElement.textContent = title;
  carousel.appendChild(titleElement);

//   const arrowLeft = document.createElement("div");
//   arrowLeft.classList.add("arrow_food", "arrow-left_food");
//   arrowLeft.textContent = "<";
//   carousel.appendChild(arrowLeft);

  const cardContainer = document.createElement("div");
  cardContainer.classList.add("card-container_food");
  carousel.appendChild(cardContainer);

//   const arrowRight = document.createElement("div");
//   arrowRight.classList.add("arrow_food", "arrow-right_food");
//   arrowRight.textContent = ">";
//   carousel.appendChild(arrowRight);

  items.forEach((item, index) => {
    const card = document.createElement("div");
    card.classList.add("card_food");

    const image = document.createElement("img");
    image.classList.add("card_img_food");
    image.src = item.image;
    card.appendChild(image);

    const cardTitle = document.createElement("h3");
    cardTitle.classList.add("h3_food")
    cardTitle.textContent = item.title;
    card.appendChild(cardTitle);

    const description = document.createElement("p");
    description.classList.add("p_card");
    description.textContent = item.description;
    card.appendChild(description);

    card.addEventListener("click", () => {
      window.open(item.link, "_blank");
    });

    cardContainer.appendChild(card);
  });

  carouselContainer.appendChild(carousel);
}

async function initCarousels() {
  const carouselsData = await fetchData();
  if (carouselsData) {
    for (const [title, items] of Object.entries(carouselsData)) {
      createCarousel(title, items);
    }
  }
}

initCarousels();
