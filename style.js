<script>
    // Function to perform the search and filter spots
    
    function searchSpots() {
        const input = document.getElementById('searchInput').value.toLowerCase();
        const spots = document.querySelectorAll('.spot');

        spots.forEach(spot => {
            const spotTitle = spot.querySelector('h2').textContent.toLowerCase();
            const spotDescription = spot.querySelector('p').textContent.toLowerCase();
            const shouldShow = spotTitle.includes(input) || spotDescription.includes(input);
            
            if (shouldShow) {
                spot.style.display = 'block'; // Show matching spots
            } else {
                spot.style.display = 'none'; // Hide non-matching spots
            }
        });
    }
</script>
