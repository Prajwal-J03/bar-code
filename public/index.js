import BWIPJS from 'bwip-js';

window.onload = function() {
    const barcodeData = '1234567890';  // Barcode data to encode

    const canvas = document.getElementById('barcodeCanvas');  // Get the canvas element

    if (canvas) {
        BWIPJS.toCanvas(canvas, {
            bcid: 'code128',  
            text: barcodeData,  
            scale: 3,  
            height: 10,
            includetext: true,
            textxalign: 'center', 
        });
    } else {
        console.error('Canvas element not found');
    }
};
