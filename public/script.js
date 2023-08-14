document.getElementById('queryForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const query = document.getElementById('queryInput').value;
    const responseContainer = document.getElementById('responseContainer');

    responseContainer.textContent = "Loading...";
    responseContainer.classList.add('visible'); 

    fetch('/ask', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ query })
    })
    .then(response => response.json())
    .then(data => {
        responseContainer.textContent = data.response;
        responseContainer.classList.add('typewriter'); 
    })
    .catch(error => {
        console.error(error);
        responseContainer.textContent = "Error occurred.";
        responseContainer.classList.add('typewriter'); 
    });
});
