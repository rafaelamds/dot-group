export function initVideo(videoContainer) {
    const playButton = videoContainer.querySelector('#play-button');
    if (!playButton) return;

    const videoUrl = videoContainer.getAttribute('data-url');

    function extrairIDYouTube(url) {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        const match = url.match(regExp);
        return (match && match[2].length === 11) ? match[2] : null;
    }

    playButton.addEventListener('click', () => {
        const videoID = extrairIDYouTube(videoUrl);
        if (videoID) {
            videoContainer.innerHTML = `
                <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/${videoID}?autoplay=1" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            `;
        }
    });
}