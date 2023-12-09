// const openai = require('openai');


let apiKey = "";

fetch('./config.json')
  .then(response => response.json())
  .then(data => {
     apiKey = data.openaiApiKey;
    // Use the API key
  })
  .catch(error => {
    console.error('Error fetching JSON:', error);
  });

// const apiKey = process.env.OPENAI_API_KEY;

const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');

async function generateQuote() {
    quoteElement.textContent = 'Generating...';
    authorElement.textContent = ''; // Clear previous author

    try {
        const response = await fetch('https://api.openai.com/v1/engines/text-davinci-003/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                prompt: 'Generate a random famous quote about success and provide the person who said it.',
                max_tokens: 100
            })
        });

        const data = await response.json();
        console.log('API Response:', data);

        if (data && data.choices && data.choices.length > 0) {
            const generatedQuote = data.choices[0].text.trim();
            const separatorIndex = generatedQuote.lastIndexOf('-');
            if (separatorIndex !== -1) {
                const quoteText = generatedQuote.substring(0, separatorIndex).trim();
                const authorName = generatedQuote.substring(separatorIndex + 1).trim();
                quoteElement.textContent = quoteText;
                authorElement.textContent = `— ${authorName}`;
            } else {
                quoteElement.textContent = generatedQuote;
                authorElement.textContent = 'Unknown Author';
            }
        } else {
            console.error('Unexpected API response:', data);
            quoteElement.textContent = 'Error generating quote.';
        }
    } catch (error) {
        quoteElement.textContent = 'Error generating quote.';
        console.error(error);
    }
}

window.onload = generateQuote;


