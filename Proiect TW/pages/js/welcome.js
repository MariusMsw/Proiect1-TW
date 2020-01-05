function openBlueprint(evt, apartmentType) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("active", "");
    }

    document.getElementById(apartmentType).style.display = "block";
    evt.currentTarget.className += "active";
}

window.onload = () => {
    let token = localStorage.getItem('piccolo_token');
    if (token) {
        document.querySelector('[href="account.html"]').innerHTML = 'salut ' + token.substring(token.indexOf('_') + 1, token.lastIndexOf('_'));
    }
    document.getElementById('One_room').style.display = "block";

    let videoElement = document.querySelector('#video');
    let videoSource = document.createElement("source");

    videoSource.setAttribute('src', '../../assets/videos/presentation-video-1.webm');
    videoElement.appendChild(videoSource);

    let audioElement = document.querySelector('#player');
    let audioSource = document.createElement("source");

    audioSource.setAttribute('src', '../../assets/audio/muzica.mp3');
    audioSource.setAttribute('type', 'audio/mp3');
    audioElement.appendChild(audioSource);
};
