const btnStartCam = document.querySelector("[data-video-botao]");
const camera = document.querySelector("[data-camera]");
const video = document.querySelector("[data-video]");
const btnTakePhoto = document.querySelector("[data-tirar-foto]");
const message = document.querySelector("[data-mensagem]");
const canvas = document.querySelector("[data-video-canvas]");
const sendPhoto = document.querySelector("[data-enviar]");
let imageUrl = "";

//Integrando a câmera para captura de foto no cadastro
btnStartCam.addEventListener("click", async function () {
    const startVideo = await navigator.mediaDevices
        .getUserMedia({ video: true, audio: false })

    btnStartCam.style.display = "none";
    camera.style.display = "block";
    video.srcObject = startVideo;
});

// Implementando a captura de foto no processo de cadastro
btnTakePhoto.addEventListener("click", function () {
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
    imageUrl = canvas.toDataURL("image/jpeg");

    camera.style.display = "none";
    message.style.display = "block";
});

//Finalizando o cadastro com foto no monibank
sendPhoto.addEventListener("click", () => {
    const getExistentData = localStorage.getItem("register");
    const convertReturn = JSON.parse(getExistentData);

    convertReturn.imagem = imageUrl;
    localStorage.setItem('register', JSON.stringify(convertReturn));
    window.location.href = '/pages/abrir-conta-form-3.html';
})