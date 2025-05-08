import { useState } from "react";

export default function GiftSurprise() {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="text-center py-12">
      <button
        onClick={() => setRevealed(true)}
        className="bg-yellow-400 hover:bg-yellow-300 text-white font-bold py-3 px-6 rounded-full transition duration-300"
      >
        🎁 Click to unwrap your gift
      </button>
      {revealed && (
        <div className="mt-6 text-lg font-medium">
          <p>Surprise! 🎉 Here's a little something for you:Use this one hold body 🤣 </p>
          <a
            href={`${import.meta.env.BASE_URL}Bithdaygift.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-600"
          >
            Click here to view it!
          </a>

        </div>
      )}
    </div>
  );
}
