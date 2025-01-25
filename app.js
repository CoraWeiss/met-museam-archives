// Line 1: Initialize status element
const status = document.getElementById('status');

// Line 4: Set initial status
status.textContent = 'Fetching Met data...';

// Line 7: Fetch CSV
fetch('https://media.githubusercontent.com/media/metmuseum/openaccess/master/MetObjects.csv')
    .then(response => {
        status.textContent = 'Processing data...';
        return response.text();
    })
    .then(csv => {
        Papa.parse(csv, {
            header: true,
            complete: result => {
                status.textContent = `Found ${result.data.length} artworks`;
                const withImages = result.data
                    .filter(art => art.primaryImage)
                    .slice(0, 5);
                
                document.getElementById('gallery').innerHTML = withImages
                    .map(art => `
                        <div class="artwork">
                            <img src="${art.primaryImage}" alt="${art.title}" style="max-width: 100%">
                            <h3>${art.title}</h3>
                            <p>${art.artistDisplayName || 'Unknown artist'}</p>
                        </div>
                    `).join('');
            }
        });
    })
    .catch(error => {
        status.textContent = 'Error: ' + error.message;
        console.error(error);
    });
