import React from "react";

export default function VideoMemories() {
    return (
      <div className="bg-yellow-50 py-12 text-center px-4">
        <h2 className="text-3xl font-bold mb-6">A Journey in Motion 🎥</h2>
        <p className="text-lg mb-6">Some moments deserve to be lived again...</p>
        <div className="flex flex-col gap-8 items-center">
          <video controls className="w-full max-w-md rounded-lg shadow-lg">
          <source src={`${process.env.PUBLIC_URL}/Video/tiktok.mp4`} type="video/mp4" />

            Your browser does not support the video tag.
          </video>
          <video controls className="w-full max-w-md rounded-lg shadow-lg">
            <source src={`${process.env.PUBLIC_URL}/Video/cousin.mp4`} type="video/mp4" />
          </video>
          <video controls className="w-full max-w-md rounded-lg shadow-lg">
            <source src={`${process.env.PUBLIC_URL}/Video/3sister.mp4`} type="video/mp4" />
          </video>
          <video controls className="w-full max-w-md rounded-lg shadow-lg">
            <source src={`${process.env.PUBLIC_URL}/Video/thanksgiving.mp4`} type="video/mp4" />
          </video>
        </div>
      </div>
    );
  }
  