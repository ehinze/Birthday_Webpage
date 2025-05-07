import React from "react";

export default function VoiceMessage() {
    return (
      <div className="bg-pink-50 py-12 text-center">
        <h2 className="text-3xl font-bold mb-6">A Message From Me to You 🎧</h2>
        <p className="mb-4 text-lg">Press play and hear what I have to say…</p>
        <audio controls className="mx-auto">
          <source src="/Video/sister.m4a" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    );
  }
  