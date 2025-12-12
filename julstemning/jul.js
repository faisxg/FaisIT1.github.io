const video = document.querySelector("#video");

let videoGalleri = ["/julstemning/videoer/4914099a9c6f455ee1affe84fc1151d1.mp4","/julstemning/videoer/79721cbf6bdabcb792f5f5d14e9f0ada.mp4","/julstemning/videoer/8888f698a5efab44cc0d9e7348443280.mp4","/julstemning/videoer/c93f926a90928a9249a8e09ccbc46918.mp4","/julstemning/videoer/d57e7c16fc5a9d307ca7e7264d1ae5d3.mp4"];

let videoNummer = 0;

video.src = videoGalleri[videoNummer]

const venstre = document.querySelector("#left")

venstre.addEventListener("click",klikkVenstre)


function klikkVenstre() {
    videoNummer = videoNummer - 1;

    if (videoNummer < 0) {
        videoNummer = videoGalleri.length - 1
    }

    video.src = videoGalleri[videoNummer]
}


const hoyre = document.querySelector("#right");

hoyre.addEventListener("click",klikkHoyre)

function klikkHoyre() {
    videoNummer = videoNummer + 1

    if (videoNummer >= videoGalleri.length) {
        videoNummer = 0
    }

    video.src = videoGalleri[videoNummer]
}

const Play = document.querySelector("#video");

Play.addEventListener("click", klikkVideo)

function klikkVideo() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}