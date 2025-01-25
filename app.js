fetch('https://media.githubusercontent.com/media/metmuseum/openaccess/master/MetObjects.csv')
    .then(response => response.text())
    .then(csv => {
        Papa.parse(csv, {
            header: true,
            complete: displayArtworks
        });
    });

function displayArtworks(results) {
    const artworks = results.data.filter(art => art.primaryImage);
    document.getElementById('gallery').innerHTML = artworks
        .slice(0, 20)
        .map(art => `
            <div>
                <img src="${art.primaryImage}" alt="${art.title}" style="max-width: 300px">
                <h3>${art.title}</h3>
                <p>${art.artistDisplayName}</p>
            </div>
        `).join('');
}
