import React, { useEffect, useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { Box, Button, LinearProgress, Typography } from "@mui/material"
import { KeyboardVoice } from "@mui/icons-material"

function Dictaphone({ socket }) {
    const { transcript, listening, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition()
    const [user_id] = useState("6353c5ebd07fcea9e466074e")
  const [room_id] = useState("6353c86695db9f31ad0df849")

    useEffect(function () {
        socket.emit("msg_send", { user_id: user_id, room_id: room_id, message: transcript })
    }, [transcript])

    if (!browserSupportsSpeechRecognition) {

        return <Typography component="span" variant="span">Browser doesn't support speech recognition.</Typography>;
    } else {

        return (
            <Box
                sx={{
                    postion: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center"
                }}>

                <Box
                    sx={{
                        postion: "fixed",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        height: "100%",
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "#dddddd"
                    }}>
                    <Box>
                        <br /> <br />
                        <Box
                            sx={{
                                display: "flex",
                                flexFlow: "row nowrap",
                                justifyContent: "center",
                                alignItems: "center"
                            }}
                        >
                            <KeyboardVoice />
                            Microphone : {listening ? "Activé" : "Désactivé"}
                        </Box>
                        <br /> <br />
                        <Button
                            sx={{ margin: "0 5px" }}
                            variant="outlined"
                            onClick={SpeechRecognition.startListening}
                            disabled={listening}
                        >
                            Démarrer
                        </Button>
                        <Button 
                        sx={{ margin: "0 5px" }} 
                        variant="outlined" 
                        onClick={SpeechRecognition.stopListening} 
                        disabled={!listening}
                        >
                            Arrêter
                            </Button>
                        <Button 
                        sx={{ margin: "0 5px" }} 
                        variant="outlined" 
                        onClick={resetTranscript} 
                        >
                            Reinitialiser
                            </Button>


                    </Box>

                </Box>
                {listening ? <Box>
                    <br /> <br />
                    <Typography component="p" variant="p">En écoute...</Typography>
                    <br /> <br />
                    <LinearProgress />
                </Box> :
                    <Box>
                        <br /> <br /><br />
                        Appuyer sur "Démarrer" pour commencer l'enregistrement
                        <br /> <br /><br />
                    </Box>
                }

                <Typography component="p" variant="p" >{transcript}</Typography>
            </Box>

        )

    }

};
export default Dictaphone;
