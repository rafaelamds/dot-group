export function initMediaPlay(container) {
    const audio = container.querySelector('audio');
    
    if (!audio) return;

    const playBtn = container.querySelector('.btn-play');
    const iconPlay = container.querySelector('#icon-play');
    const iconPause = container.querySelector('#icon-pause');
    const progressBar = container.querySelector('.progress-slider');
    const currentTimeDisplay = container.querySelector('#current-time');
    const durationDisplay = container.querySelector('#duration');

    const muteBtn = container.querySelector('#btn-mute');
    const iconVolHigh = container.querySelector('#icon-vol-high');
    const iconVolMute = container.querySelector('#icon-vol-mute');
    const volumeBar = container.querySelector('.volume-slider');

    const settingsBtn = container.querySelector('#btn-settings');
    const speedMenu = container.querySelector('.speed-menu');
    const speedOptions = container.querySelectorAll('.speed-menu li');

    let lastVolume = 1;

    function formatTime(seconds) {
        if(isNaN(seconds)) return "0:00";
        const min = Math.floor(seconds / 60);
        const sec = Math.floor(seconds % 60);
        return `${min}:${sec < 10 ? '0' : ''}${sec}`;
    }

    function updateSliderColor(slider, color) {
        const percentage = (slider.value - slider.min) / (slider.max - slider.min) * 100;
        slider.style.background = `linear-gradient(to right, ${color} ${percentage}%, #E5E7EB ${percentage}%)`;
    }

    audio.addEventListener('loadedmetadata', () => {
        durationDisplay.textContent = formatTime(audio.duration);
    });

    playBtn.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            iconPlay.style.display = 'none';
            iconPause.style.display = 'block';
        } else {
            audio.pause();
            iconPlay.style.display = 'block';
            iconPause.style.display = 'none';
        }
    });

    audio.addEventListener('timeupdate', () => {
        if (document.activeElement !== progressBar) {
            const progressPercent = (audio.currentTime / audio.duration) * 100;
            progressBar.value = progressPercent;
            updateSliderColor(progressBar, '#76B900');
        }
        currentTimeDisplay.textContent = formatTime(audio.currentTime);
    });

    progressBar.addEventListener('input', () => {
        const seekTime = (progressBar.value / 100) * audio.duration;
        audio.currentTime = seekTime;
        updateSliderColor(progressBar, '#76B900');
    });

    audio.addEventListener('ended', () => {
        iconPlay.style.display = 'block';
        iconPause.style.display = 'none';
        progressBar.value = 0;
        updateSliderColor(progressBar, '#76B900');
        currentTimeDisplay.textContent = '0:00';
    });

    updateSliderColor(volumeBar, '#1C232F');

    volumeBar.addEventListener('input', () => {
        const vol = parseFloat(volumeBar.value);
        audio.volume = vol;
        lastVolume = vol > 0 ? vol : 1;

        updateSliderColor(volumeBar, '#1C232F');

        if (vol === 0) {
            iconVolHigh.style.display = 'none';
            iconVolMute.style.display = 'block';
        } else {
            iconVolHigh.style.display = 'block';
            iconVolMute.style.display = 'none';
        }
    });

    muteBtn.addEventListener('click', () => {
        if (audio.volume > 0) {
            audio.volume = 0;
            volumeBar.value = 0;
            iconVolHigh.style.display = 'none';
            iconVolMute.style.display = 'block';
        } else {
            audio.volume = lastVolume;
            volumeBar.value = lastVolume;
            iconVolHigh.style.display = 'block';
            iconVolMute.style.display = 'none';
        }
        updateSliderColor(volumeBar, '#1C232F');
    });

    settingsBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        speedMenu.classList.toggle('show');
    });

    speedOptions.forEach(option => {
        option.addEventListener('click', (e) => {
            const liElement = e.currentTarget; 
            const speed = parseFloat(liElement.getAttribute('data-speed'));
            audio.playbackRate = speed;

            speedOptions.forEach(opt => opt.classList.remove('active'));
            liElement.classList.add('active');

            speedMenu.classList.remove('show');
        });
    });

    document.addEventListener('click', (e) => {
        if (!speedMenu.contains(e.target) && !settingsBtn.contains(e.target)) {
            speedMenu.classList.remove('show');
        }
    });
}