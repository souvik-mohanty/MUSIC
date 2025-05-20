// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize any interactive elements
    initializeAudio();
    setupDownloadButtons();
    
    // Add event listeners
    document.querySelectorAll('.category-btn').forEach(button => {
        button.addEventListener('click', function() {
            // Would normally filter content based on category
            console.log('Category selected:', this.textContent);
        });
    });
    
    // More button functionality
    const moreBtn = document.querySelector('.more-btn');
    if (moreBtn) {
        moreBtn.addEventListener('click', function() {
            // Would normally load more tracks
            console.log('Loading more tracks...');
        });
    }
    
    // Premium button functionality
    const joinBtn = document.querySelector('.join-btn');
    if (joinBtn) {
        joinBtn.addEventListener('click', function() {
            // Would normally open premium signup
            alert('Premium subscription options coming soon!');
        });
    }
});

// Function to setup audio preview functionality (placeholder)
function initializeAudio() {
    // This would normally set up audio preview functionality for tracks
    console.log('Audio preview functionality initialized');
}

// Function to handle download button clicks
function setupDownloadButtons() {
    document.querySelectorAll('.download-btn').forEach(button => {
        button.addEventListener('click', function() {
            const trackElement = this.closest('.music-track');
            const trackTitle = trackElement.querySelector('h4').textContent;
            
            // Would normally trigger download
            console.log('Downloading:', trackTitle);
            alert(`Download started for: ${trackTitle}`);
        });
    });
    
    const downloadNowBtn = document.querySelector('.download-now-btn');
    if (downloadNowBtn) {
        downloadNowBtn.addEventListener('click', function() {
            const trackTitle = this.closest('.promo-box').querySelector('h3').textContent;
            
            // Would normally trigger featured download
            console.log('Downloading featured track:', trackTitle);
            alert(`Download started for featured track: ${trackTitle}`);
        });
    }
}