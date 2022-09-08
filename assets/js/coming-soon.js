// const checkBrowser = () => {
//     const ua = navigator.userAgent;
//     const edge = /Edge\/\d./i.test(ua);
//     const chrome = /Chrome\/\d./i.test(ua);
//     const firefox = /Firefox\/\d./i.test(ua);
//     const safari = /Safari\/\d./i.test(ua);
//     if (edge) {
//         return 'edge';
//     } else if (chrome) {
//         return 'chrome';
//     } else if (firefox) {
//         return 'firefox';
//     } else if (safari) {
//         return 'safari';
//     } else {
//         return 'other';
//     }
// }

// window.onload = () => {
//     const browser = checkBrowser();
//     if (browser === 'safari') {
//         const container = document.querySelector('.container');
//         container.setAttribute('class', 'bg-safari');
//     }
// }
