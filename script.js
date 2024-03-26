 // Function to fetch and display political party information
 async function fetchPoliticalParties() {
    try {
        // Fetch the webpage content
        const response = await fetch('https://attistibai.lv/');
        
        // Check if the request was successful
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        
        // Parse the HTML content
        const html = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');

        // Find elements containing information about political parties
        const partyElements = doc.querySelectorAll('.party-info');

        // Iterate through each party and extract information
        partyElements.forEach(partyElement => {
            const partyName = partyElement.querySelector('h2').textContent.trim();
            const partyIdeology = partyElement.querySelector('.ideology').textContent.trim();
            const partyLeader = partyElement.querySelector('.leader').textContent.trim();

            // Create list item element
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <strong>${partyName}</strong>
                <p>Ideology: ${partyIdeology}</p>
                <p>Leader: ${partyLeader}</p>
            `;

            // Append the list item to the party list
            document.getElementById('partyList').appendChild(listItem);
        });
    } catch (error) {
        console.error('Error:', error);
    }
}

// Call fetchPoliticalParties function when the page loads
fetchPoliticalParties();
//ja
