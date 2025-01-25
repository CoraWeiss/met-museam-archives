const csvUrl = 'https://media.githubusercontent.com/media/metmuseum/openaccess/master/MetObjects.csv';

async function loadArtworks() {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = 'Loading...';

    try {
        const response = await fetch(csvUrl);
        const csv = await response.text();
        
        Papa.parse(csv, {
            header: true,
            complete: (results) => {
                const artworksWithImages = results.data.filter(art => art.primaryImage);
                const randomArtworks = getRandomArtworks(artworksWithImages, 10);
                displayArtworks(randomArtworks);
            },
            error: (error) => {
                gallery.innerHTML = 'Error loading artwork data';
                console.error(error);
            }
        });
    } catch (error) {
        gallery.innerHTML = 'Error fetching CSV';
        console.error(error);
    }
}

function getRandomArtworks(artworks, count) {
    const shuffled = [...artworks].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

function displayArtworks(artworks) {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = artworks.map(art => `
        <div class="artwork-card">
            <img 
                src="${art.primaryImage}" 
                alt="${art.title}"
                onerror="this.onerror=null; this.src='https://via.placeholder.com/300x300?text=Image+Not+Available'"
            >
            <div class="artwork-info">
                <h3>${art.title}</h3>
                <p class="artist">${art.artistDisplayName || 'Unknown Artist'}</p>
                <p class="date">${art.objectDate || 'Date unknown'}</p>
            </div>
        </div>
    `).join('');
}

// Load artworks when page loads
document.addEventListener('DOMContentLoaded', loadArtworks);
