

const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');
const imgElement = document.getElementById('loading');
const fetchButton = document.getElementById('fetch-button');


async function fetchQuote() {
    try {
      // Show the loader and hide the quote elements
        imgElement.classList.remove('hide');
        quoteElement.classList.add('hide');
        authorElement.classList.add('hide');

        const response = await fetch('https://mychatgptapp-84b16d9059e0.herokuapp.com/chatgpt');
        const data = await response.json();

       // Parse the JSON string within quoteResponse
       const quoteResponse = JSON.parse(data.quoteResponse);


quoteElement.textContent = quoteResponse.quote;
authorElement.textContent = `— ${quoteResponse.author}`;
       // Remove the 'loading' class from the quoteContainer to indicate content is loaded

// Show the quote elements and hide the loader
quoteElement.classList.remove('hide');
        authorElement.classList.remove('hide');
        imgElement.classList.add('hide');
    } catch (error) {
        console.error(error);
        loadingElement.textContent = 'Error loading quote.';
    }
}

fetchQuote();
fetchButton.addEventListener('click', fetchQuote);

