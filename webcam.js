const video= document.getElementById("video");
const snap= document.getElementById("snap");
const errorMsgElement= document.getElementById("span#ErrorMsg");

const constrains = {
    video:{
        width:280, height: 200
    }
};

async function init(){
    try{
        const stream = await navigator.mediaDevices.getUserMedia(constrains);
        handleSuccess(stream);
    }
    catch(e){
        errorMsgElement.innerHTML =`navigator.getUserMedia.error:${e.toString()}`;
    }
}

function handleSuccess(stream){
    window.stream = stream;
    video.srcObject = stream;
}

init();