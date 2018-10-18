export default class rtcServ {
    constructor() {
        this.videoObj = null;
        this.userMedia = null;
    }

    initialize = () => {
        this.userMedia = navigator.mediaDevices.getUserMedia({ audio: true, video: { width: 720, height: 360 } });
    }

    play = () => {
        this.userMedia.then((stream) => {
            this.videoObj = document.querySelector('video');
            this.videoObj.srcObject = stream;
            this.videoObj.play();
        });
    }

    pause = () => {
        this.videoObj.pause();
    }
}

// let videoObj = null;
// let userMedia = null;
// let rtcService = () => {
//     return {
//         initialize: () => {
//             userMedia = navigator.mediaDevices.getUserMedia({ audio: true, video: { width: 720, height: 360 } });
//             // .then(function(stream) {
//             //     videoObj = document.querySelector('video');
//             //     videoObj.srcObject = stream;
//             // })
//             // .catch(function(error) {
//             //     console.log('error', error);
//             // });
//         },
//         play: () => {
//             userMedia.then((stream) => {
//                 videoObj = document.querySelector('video');
//                 videoObj.srcObject = stream;
//                 videoObj.play();
//             });
//         },
//         pause: () => {
//             videoObj.pause();
//         }
//     }
// }

// export default rtcService;