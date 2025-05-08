import React, { useState } from "react";

export default function ReasonsILoveYou() {
  const reasons = [
    { title: "Reason #1", text: "You always cover for me 🤫", meme: `${process.env.PUBLIC_URL}/Meme/cover.jpg` },
    { title: "Reason #2", text: "You make me laugh so hard 😂", meme: `${process.env.PUBLIC_URL}/Meme/make-me-laugh.png` },
    { title: "Reason #3", text: "You’re the queen of drama 👑", meme: `${process.env.PUBLIC_URL}/Meme/drama-queen.jpg` },
    { title: "Reason #4", text: "You always make me happy 😂", meme: `${process.env.PUBLIC_URL}/Meme/makemyhearthappy.png` },
    { title: "Reason #5", text: "You're a great cook 👩🏽‍🍳", meme: `${process.env.PUBLIC_URL}/Meme/cook.jpg` },
    { title: "Reason #6", text: "You are such a smart young lady", meme: `${process.env.PUBLIC_URL}/Meme/smart.jpg` },
  ];
  
  const [flippedIndexes, setFlippedIndexes] = useState([]);

  const toggleFlip = (index) => {
    setFlippedIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="bg-white py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">Reasons I Love You 💕</h2>
      <p>Click on each on to reveal more...</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="flip-card"
            onClick={() => toggleFlip(index)}
          >
            <div className={`flip-card-inner ${flippedIndexes.includes(index) ? "rotate-y-180" : ""}`}>
              <div className="flip-card-front">
                <h3 className="text-xl font-semibold">{reason.title}</h3>
                <p>{reason.text}</p>
              </div>
              <div className="flip-card-back flex items-center justify-center">
                <img
                  src={reason.meme}
                  alt="meme"
                  className="max-h-full max-w-full object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
