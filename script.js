window.onload = function() {
    // Wait for 5 seconds, then show the subjects page
    setTimeout(function() {
        // Fade out the loading screen
        document.getElementById('loading-screen').style.animation = 'fadeOut 1s ease forwards';
        
        // Wait 1 second for the fadeOut animation to complete, then show subjects
        setTimeout(function() {
            document.getElementById('loading-screen').style.display = 'none';  // Hide loading screen
            document.getElementById('subjects-page').style.display = 'block';  // Show subjects page
            document.getElementById('subjects-page').style.opacity = '1';  // Trigger opacity transition
        }, 1000);
        
    }, 5000);  // 5 seconds delay
};
