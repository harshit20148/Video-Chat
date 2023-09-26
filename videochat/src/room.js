import React from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const Room = () => {
    const {roomID} = useParams();
    console.log(roomID);

    const meeting = async(element) => {
    const appID = 1855965879;
    const serverSecret = "d57d354859f0d096ede6010172623235";

    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
        appID, 
        serverSecret, 
        roomID,
        Date.now().toString(),
        "HarshitDev"
        );
        const zp =  ZegoUIKitPrebuilt.create(kitToken);
        zp.joinRoom({
            container:element,
            scenario: {
                mode: ZegoUIKitPrebuilt.GroupCall,
            },
        });
    };
    return <div ref = {meeting} style={{width:"100vw", height:"100vh"}}></div>;
};

export default Room;                