document.getElementById('gallery').innerHTML = 'Testing display';

fetch('https://media.githubusercontent.com/media/metmuseum/openaccess/master/MetObjects.csv')
    .then(response => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.text();
    })
    .then(text => {
        document.getElementById('gallery').innerHTML = 'CSV loaded, length: ' + text.length;
    })
    .catch(error => {
        document.getElementById('gallery').innerHTML = 'Error: ' + error.message;
        console.error('Error:', error);
    });
