// document.getElementById("signInButton").addEventListener("click", function() {
//   window.location.href = "./signin.html"; // Replace with the correct URL for your login page
// });

window.onscroll = function () {
    showScrollUpArrow();
  };
  
  function showScrollUpArrow() {
    const scrollUp = document.querySelector('.scroll-up');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollUp.style.display = 'block';
    } else {
      scrollUp.style.display = 'none';
    }
  }
  
  document.querySelector('.scroll-up').addEventListener('click', function () {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  });
  
  // Function to load the header content dynamically
  function loadHeader() {
    fetch('./header.html')
      .then((response) => response.text())
      .then((data) => {
        const headerContainer = document.getElementById('headerContainer');
        headerContainer.innerHTML = data;
      })
      .catch((error) => console.error('Error loading header:', error));
  }
  
  // Function to include the footer on the page
  function includeFooter() {
    fetch('./footer.html')
      .then((response) => response.text())
      .then((data) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(data, 'text/html');
        const footerContainer = document.getElementById('footerContainer');
        footerContainer.appendChild(doc.body.firstChild);
      })
      .catch((error) => console.error('Error including footer:', error));
  }
  
  // Call the functions to load the header and include the footer when the page has loaded
  document.addEventListener('DOMContentLoaded', () => {
    loadHeader();
    includeFooter();
  });
  
// Open the modal with the clicked image
function openModal(imageSrc) {
  var modal = document.getElementById('imageModal');
  var modalImg = document.getElementById('modalImage');
  modal.style.display = "block";
  modalImg.src = imageSrc;
}

// Close the modal by clicking outside the image
function closeModal() {
  var modal = document.getElementById('imageModal');
  modal.style.display = "none";
}

 // Change cursor to zoom-in icon on hover
function hoverZoomInIcon(element) {
  element.style.cursor = "zoom-in";
}

// Reset cursor on mouseout
function resetCursor() {
  document.body.style.cursor = "auto";
}
 
 
  
//   const overlay = document.getElementById('overlay');
// const overlayImage = document.querySelector('.overlay-image');
// const closeBtn = document.getElementById('closeBtn');
// const imageContainers = document.querySelectorAll('.image-container');

// imageContainers.forEach(container => {
//   container.addEventListener('click', () => {
//     const image = container.querySelector('img');
//     overlayImage.src = image.src;
//     overlay.style.display = 'flex';
//   });
// });

// closeBtn.addEventListener('click', () => {
//   overlay.style.display = 'none';
// });

 

  // Function to include the footer on the page
//   function includeFooter() {
//     console.log("Including footer...");
//     const xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = function() {
//       if (xhr.readyState === 4 && xhr.status === 200) {
//         const footerContainer = document.getElementById('footerContainer');
//         footerContainer.innerHTML = xhr.responseText.trim();
//       }
//     };
//     xhr.open('GET', 'footer.html', true);
//     xhr.send();
//   }
  
  
  
  

// window.onscroll = function() {
//     showScrollUpArrow();
//   };
  
//   function showScrollUpArrow() {
//     const scrollUp = document.querySelector('.scroll-up');
//     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//       scrollUp.style.display = 'block';
//     } else {
//       scrollUp.style.display = 'none';
//     }
//   }
  
//   document.querySelector('.scroll-up').addEventListener('click', function() {
//     document.body.scrollTop = 0; // For Safari
//     document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
//   });
  
// // Function to load the header content dynamically
// function loadHeader() {
//     fetch('./header.html')
//       .then((response) => response.text())
//       .then((data) => {
//         const headerContainer = document.getElementById('headerContainer');
//         headerContainer.innerHTML = data;
//       })
//       .catch((error) => console.error('Error loading header:', error));
//   }
  
//   // Call the function to load the header when the page has loaded
//   document.addEventListener('DOMContentLoaded', loadHeader);
  
//   // Function to include the footer on the page
//   function includeFooter() {
//     console.log("Including footer...");
//     fetch('footer.html')
//       .then(response => response.text())
//       .then(data => {
//         const footerContainer = document.getElementById('footerContainer');
//         footerContainer.innerHTML = data.trim();
//         document.body.appendChild(footerContainer);
//       });
//   }
  
//   // Call the function to include the footer when the page loads
//   window.onload = includeFooter;
  