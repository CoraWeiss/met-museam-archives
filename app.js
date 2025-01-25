// Sample data - 10 Met artworks with confirmed working images
const previewArtworks = [
    {
        primaryImage: "https://images.metmuseum.org/CRDImages/ep/original/DT1567.jpg",
        title: "Bridge over a Pond of Water Lilies",
        artistDisplayName: "Claude Monet"
    },
    {
        primaryImage: "https://images.metmuseum.org/CRDImages/ep/original/DP346474.jpg",
        title: "Wheat Field with Cypresses",
        artistDisplayName: "Vincent van Gogh"
    },
    {
        primaryImage: "https://images.metmuseum.org/CRDImages/ep/original/DT1502.jpg",
        title: "Self-Portrait with a Straw Hat",
        artistDisplayName: "Vincent van Gogh"
    },
    {
        primaryImage: "https://images.metmuseum.org/CRDImages/ep/original/DP-14936-001.jpg",
        title: "Still Life with Apples and a Pot of Primroses",
        artistDisplayName: "Paul Cézanne"
    },
    {
        primaryImage: "https://images.metmuseum.org/CRDImages/ep/original/DP-20101-001.jpg",
        title: "The Dance Class",
        artistDisplayName: "Edgar Degas"
    },
    {
        primaryImage: "https://images.metmuseum.org/CRDImages/ep/original/DT1565.jpg",
        title: "Garden at Sainte-Adresse",
        artistDisplayName: "Claude Monet"
    },
    {
        primaryImage: "https://images.metmuseum.org/CRDImages/ep/original/DT1947.jpg",
        title: "Young Woman with a Water Pitcher",
        artistDisplayName: "Johannes Vermeer"
    },
    {
        primaryImage: "https://images.metmuseum.org/CRDImages/ep/original/DP145937.jpg",
        title: "The Gulf of Marseilles Seen from L'Estaque",
        artistDisplayName: "Paul Cézanne"
    },
    {
        primaryImage: "https://images.metmuseum.org/CRDImages/ep/original/DT1877.jpg",
        title: "View of Toledo",
        artistDisplayName: "El Greco"
    },
    {
        primaryImage: "https://images.metmuseum.org/CRDImages/ep/original/DP-19279-001.jpg",
        title: "The Death of Socrates",
        artistDisplayName: "Jacques Louis David"
    }
];

document.getElementById('gallery').innerHTML = previewArtworks
    .map(art => `
        <div class="artwork">
            <img src="${art.primaryImage}" alt="${art.title}" style="max-width: 100%">
            <h3>${art.title}</h3>
            <p>${art.artistDisplayName}</p>
        </div>
    `).join('');
