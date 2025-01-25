const csvUrl = 'https://media.githubusercontent.com/media/metmuseum/openaccess/master/MetObjects.csv';

async function loadArtworks() {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = 'Loading artworks...';

    try {
        console.log('Fetching CSV...');
        const response = await fetch(csvUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const csv = await response.text();
        console.log('CSV loaded, parsing...');
        
        Papa.parse(csv, {
            header: true,
            dynamicTyping: true,
            complete: (results) => {
                console.log('Total records:', results.data.length);
                const artworksWithImages = results.data.filter(art => 
                    art.primaryImage && 
                    art.primaryImage.startsWith('http') && 
                    art.title
                );
                console.log('Artworks with valid images:', artworksWithImages.length);
                const randomArtworks = getRandomArtworks(artworksWithImages, 10);
                displayArtworks(randomArtworks);
            },
            error: (error) => {
                gallery.innerHTML = 'Error parsing artwork data';
                console.error('Parse error:', error);
            }
        });
    } catch (error) {
        gallery.innerHTML = 'Error loading artwork data';
        console.error('Fetch error:', error);
    }
}

function getRandomArtworks(artworks, count) {
    const shuffled = [...artworks].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

function displayArtworks(artworks) {
    const gallery = document.getElementById('gallery');
    console.log('Displaying artworks:', artworks);
    
    gallery.innerHTML = artworks.map(art => `
        <div class="artwork-card">
            <img 
                src="${art.primaryImage}" 
                alt="${art.title || 'Artwork'}"
                onerror="this.src='https://via.placeholder.com/300x300?text=Image+Not+Available'"
            >
            <div class="artwork-info">
                <h3>${art.title || 'Untitled'}</h3>
                <p class="artist">${art.artistDisplayName || 'Unknown Artist'}</p>
                <p class="date">${art.objectDate || 'Date unknown'}</p>
                <p class="medium">${art.medium || 'Medium unknown'}</p>
            </div>
        </div>
    `).join('');
}

// Load artworks when page loads
document.addEventListener('DOMContentLoaded', loadArtworks);

// Add error handling for CSV loading
window.onerror = function(msg, url, lineNo, columnNo, error) {
    console.error('Window error:', msg, error);
    return false;
};
