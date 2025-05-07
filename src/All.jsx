import React from "react";
import LandingPage from "./Componet/Landingpage";
import ReasonsILoveYou from "./Componet/Reasons";
import MemoryLane from "./Componet/Memory";
import VoiceMessage from "./Componet/VoiceMessage";
import VideoMemories from "./Componet/Video";
import GiftSurprise from "./Componet/Gift";

export default function All (){
    return (
        <>
          <div className="font-sans">
          <LandingPage/>
          <ReasonsILoveYou/>
          <MemoryLane/>
          <VoiceMessage />
          <VideoMemories/>
          < GiftSurprise/>
          </div>
        </>
    )
}