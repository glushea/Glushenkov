// Open the URL in a new tab
function openURL(url) {
  window.open(url, "_blank");
}

// Function to generate the cards based on filtered data
function generateCards(filteredData) {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = ''; // Clear existing cards
  // Update the result count
  resultCount.textContent = `${filteredData.length} result${filteredData.length === 1 ? '' : 's'}`;


  filteredData.forEach((card) => {
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
}

// Apply the category filter based on the URL query parameter (if any)
function applyCategoryFilter(selectedCategory) {
  fetch("publications.json")
    .then((response) => response.json())
    .then((data) => {
      const filteredData = selectedCategory === "all"
        ? data
        : data.filter(card => card.categories.includes(selectedCategory));

      generateCards(filteredData); // Re-generate the cards based on the filtered data
    })
    .catch((error) => console.error("Error fetching card data: ", error));
}

// Update the URL with the selected category without reloading the page
function updateURL(category) {
  const url = new URL(window.location.href);
  if (category !== "all") {
    url.searchParams.set('category', category); // Set or update the category parameter
  } else {
    url.searchParams.delete('category'); // Remove the category parameter if 'all' is selected
  }

  // Update the URL without reloading the page
  window.history.pushState({ path: url.href }, '', url.href);
}

// Function to handle category filter change
function filterByCategory() {
  const selectedCategory = document.getElementById("categoryFilter").value;
  
  // Update the URL with the selected category
  updateURL(selectedCategory);
  
  // Apply the filter logic based on the selected category
  applyCategoryFilter(selectedCategory);
}

document.addEventListener("DOMContentLoaded", function () {
  fetch("publications.json")
    .then((response) => response.json())
    .then((data) => {
      const cardContainer = document.getElementById("card-container");
      const categoryFilter = document.getElementById("categoryFilter");

      // Create a set to store unique categories
      const categoriesSet = new Set();
      data.forEach((card) => {
        const categories = card.categories.split(","); // Split categories by commas
        categories.forEach(category => categoriesSet.add(category.trim()));
      });

      // Create category options in the filter dropdown
      categoriesSet.forEach((category) => {
        const option = document.createElement("option");
        option.value = category;
        option.textContent = category;
        categoryFilter.appendChild(option);
      });

      // Initially show all cards
      generateCards(data);

      // Filter cards based on category selection
      categoryFilter.addEventListener("change", filterByCategory);

       

      // Apply the category filter based on the URL query parameter (if any)
      const urlParams = new URLSearchParams(window.location.search);
      const selectedCategory = urlParams.get('category') || 'all';
      categoryFilter.value = selectedCategory; // Set the selected category in the dropdown

      // Apply the filter when the page loads based on the URL
      applyCategoryFilter(selectedCategory);
    })
    .catch((error) => console.error("Error fetching card data: ", error));
});


// function openURL(url) {
//   window.open(url, "_blank");
// }

// document.addEventListener("DOMContentLoaded", function () {
//     fetch("publications.json")
//       .then((response) => response.json())
//       .then((data) => {
//         const cardContainer = document.getElementById("card-container");
  
//         data.forEach((card) => {
//           const cardHtml = `
//             <div class="col">
//               <div class="card shadow-sm">
//                 <img src="${card.imageSrc}" class="card-img" alt="${card.title}">
//                 <div class="card-body">
//                   <p class="card-text">${card.description}</p>
//                   <div class="d-flex justify-content-between align-items-center">
//                     <div class="btn-group">
//                       <button type="button" class="btn btn-sm btn-custom-orange" onclick="openURL('${card.url}')">Check it out</button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           `;
  
//           cardContainer.innerHTML += cardHtml;
//         });

        
//       })
//       .catch((error) => console.error("Error fetching card data: ", error));
//   });
  
//   document.addEventListener("DOMContentLoaded", function () {
//     fetch("publications.json")
//       .then((response) => response.json())
//       .then((data) => {
//         const cardContainer = document.getElementById("card-container");
//         const categoryFilter = document.getElementById("categoryFilter");
  
//         // Create a set to store unique categories
//         const categoriesSet = new Set();
//         data.forEach((card) => {
//           const categories = card.categories.split(","); // Split categories by commas
//           categories.forEach(category => categoriesSet.add(category.trim()));
//         });
  
//         // Create category options in the filter dropdown
//         categoriesSet.forEach((category) => {
//           const option = document.createElement("option");
//           option.value = category;
//           option.textContent = category;
//           categoryFilter.appendChild(option);
//         });
  
//         // Function to generate the cards
//         function generateCards(filteredData) {
//           cardContainer.innerHTML = ''; // Clear existing cards
//           filteredData.forEach((card) => {
//             const cardHtml = `
//               <div class="col">
//                 <div class="card shadow-sm">
//                   <img src="${card.imageSrc}" class="card-img" alt="${card.title}">
//                   <div class="card-body">
//                     <p class="card-text">${card.description}</p>
//                     <div class="d-flex justify-content-between align-items-center">
//                       <div class="btn-group">
//                         <button type="button" class="btn btn-sm btn-custom-orange" onclick="openURL('${card.url}')">Check it out</button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             `;
//             cardContainer.innerHTML += cardHtml;
//           });
//         }
  
//         // Initially show all cards
//         generateCards(data);
  
//         // Filter cards based on category selection
//         window.filterByCategory = function () {
//           const selectedCategory = categoryFilter.value;
//           const filteredData = selectedCategory === "all" 
//             ? data 
//             : data.filter(card => card.categories.includes(selectedCategory));
//           generateCards(filteredData);
//         };
//       })
//       .catch((error) => console.error("Error fetching card data: ", error));
//   });

//   // Function to handle category filter and update the URL
// function filterByCategory() {
//   const selectedCategory = document.getElementById("categoryFilter").value;

//   // Update the URL with the selected category (or reset if 'all' is selected)
//   const url = new URL(window.location.href);
//   if (selectedCategory !== "all") {
//     url.searchParams.set('category', selectedCategory); // Set or update the category parameter
//   } else {
//     url.searchParams.delete('category'); // Remove the category parameter if 'all' is selected
//   }
  
//   // Update the URL without reloading the page
//   window.history.pushState({ path: url.href }, '', url.href);

//   // Apply the filter logic
//   applyCategoryFilter(selectedCategory);
// }

// // Function to apply the filter logic (e.g., show only cards of the selected category)
// function applyCategoryFilter(selectedCategory) {
//   fetch("publications.json")
//     .then((response) => response.json())
//     .then((data) => {
//       const filteredData = selectedCategory === "all"
//         ? data
//         : data.filter(card => card.categories.includes(selectedCategory));

//       generateCards(filteredData); // Re-generate the cards based on the filtered data
//     })
//     .catch((error) => console.error("Error fetching card data: ", error));
// }

// // Function to generate the cards based on filtered data
// function generateCards(filteredData) {
//   const cardContainer = document.getElementById("card-container");
//   cardContainer.innerHTML = ''; // Clear existing cards

//   filteredData.forEach((card) => {
//     const cardHtml = `
//       <div class="col">
//         <div class="card shadow-sm">
//           <img src="${card.imageSrc}" class="card-img" alt="${card.title}">
//           <div class="card-body">
//             <p class="card-text">${card.description}</p>
//             <div class="d-flex justify-content-between align-items-center">
//               <div class="btn-group">
//                 <button type="button" class="btn btn-sm btn-custom-orange" onclick="openURL('${card.url}')">Check it out</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     `;
//     cardContainer.innerHTML += cardHtml;
//   });
// }

// // Apply the category filter based on the URL query parameter (if any)
// document.addEventListener("DOMContentLoaded", function () {
//   // Get the category parameter from the URL
//   const urlParams = new URLSearchParams(window.location.search);
//   const selectedCategory = urlParams.get('category') || 'all';

//   // Set the selected category in the dropdown
//   const categoryFilter = document.getElementById("categoryFilter");
//   categoryFilter.value = selectedCategory;

//   // Apply the filter when the page loads
//   filterByCategory();
// });

  