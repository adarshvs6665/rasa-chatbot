import React from "react";
import { useSpeechRecognition } from "react-speech-kit";

function VoiceRecognitionButton() {
    const { listen, listening, stop } = useSpeechRecognition({
        onResult: (result: any) => {
            console.log(result);
        },
    });

    const startListening = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        listen();
        console.log("listening");

    };

    const stopListening = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        stop();
        console.log("stop");

    };

    return (
        <div>
            <button onClick={startListening}>
                {listening ? "Stop" : "Start"} Listening
            </button>
            <button onClick={stopListening} disabled={!listening}>
                Stop
            </button>
        </div>
    );
}

export default VoiceRecognitionButton;