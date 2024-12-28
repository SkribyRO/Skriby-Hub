// API endpoint pentru salvarea numărului de vizite
const API_URL = 'https://example.com/api/visit-counter';

// Funcție pentru actualizarea contorului
async function updateCounter() {
    try {
        // Trimitere vizită către server
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ visit: true }),
        });

        // Obține numărul total de vizite
        const data = await response.json();
        document.getElementById('visitCount').innerText = data.totalVisits;
    } catch (error) {
        console.error('Eroare la actualizarea contorului:', error);
    }
}

// Apelează funcția la încărcarea paginii
updateCounter();