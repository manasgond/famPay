import React, { useEffect } from 'react';
import Winwheel from 'winwheel';


const SpinWheelScreen = React.memo(function SpinWheelScreen(){

        // Loads the tick audio sound in to an audio object.
        const audio = new Audio('tick.mp3');

        // This function is called when the sound is to be played.
        const playSound = () => {
            // Stop and rewind the sound if it already happens to be playing.
            audio.pause();
            audio.currentTime = 0;
            // Play the sound.
            audio.play();
        }
            // Called when the animation has finished.
            const alertPrize = (indicatedSegment) => {
                // Display different message if win/lose/backrupt.
                if (indicatedSegment.text == 'LOOSE TURN') {
                    alert('Sorry but you loose a turn.');
                } else if (indicatedSegment.text == 'BANKRUPT') {
                    alert('Oh no, you have gone BANKRUPT!');
                } else {
                    alert(`You have won ${  indicatedSegment.text}`);
                }
            }

    useEffect(() => {
    const theWheel = new Winwheel({
        canvasId: 'myCanvas',
        'outerRadius'     : 120,        // Set outer radius so wheel fits inside the background.
        'innerRadius'     : 27,         // Make wheel hollow so segments dont go all way to center.
        'textFontSize'    : 12,         // Set default font size for the segments.
                                        // Make text vertial so goes down from the outside of wheel.
        'textAlignment'   : 'inside',    // Align text to outside of wheel.
        'numSegments'     : 8,
        'textFillStyle' : '#ffffff',          // Specify number of segments.
        'segments'        :             // Define segments including colour and text.
        [                               // font size and text colour overridden on backrupt segments.
           { 'fillStyle' : '#832A4B', 'text' : 'try again', 'textFontSize' : 12, 'textOrientation' : 'horizontal' },
           { 'fillStyle' : '#742543', 'text' : '2x saving' },
           { 'fillStyle' : '#551B31', 'text' : '100 cashback' },
           { 'fillStyle' : '#65203A', 'text' : '20', 'textOrientation' : 'horizontal' },
           { 'fillStyle' : '#832A4B', 'text' : '50', 'textOrientation' : 'horizontal' },
           { 'fillStyle' : '#742543', 'text' : '1.5x saving', 'textFontSize' : 12, 'textFillStyle' : '#ffffff' },
           { 'fillStyle' : '#551B31', 'text' : '2x saving' },
           { 'fillStyle' : '#65203A', 'text' : '50', 'textOrientation' : 'horizontal' },

        ],
        'animation' :           // Specify the animation to use.
        {
            'type'     : 'spinToStop',
            'duration' : 10,
            'spins'    : 3,
            'callbackFinished' : alertPrize,  // Function to call whent the spinning has stopped.
            'callbackSound'    : playSound,   // Called when the tick sound is to be played.
            'soundTrigger'     : 'pin'        // Specify pins are to trigger the sound.
        },
        'pins' :                // Turn pins on.
        {
            'number'     : 8,
            'fillStyle'  : 'silver',
            'outerRadius': 4,
        }
    });

    }, []);






    return(
        <canvas id='myCanvas' width='320' height='300' >
            Canvas not supported, use another browser.
        </canvas>

    );

});

export default SpinWheelScreen;

