import React from "react";
  
  export default function MemoryLane() {
    const memories = [
        { src: "/Memorylane/daddy.jpg", caption: "The cutest babe in town 😂" },
        { src: "/Memorylane/img-1.jpg", caption: "Sisters for life 😭" },
        { src: "/Memorylane/poser.jpg", caption: "Best in posing 🤣" },
        { src: "/Memorylane/img-2.jpg", caption: "My forever shaylaa 🥺" },
        { src: "/Memorylane/img-3.jpg", caption: "One blood 😎" },
        { src: "/Memorylane/grad-1.jpg", caption: "F.A queen 🤣" },
        { src: "/Memorylane/grad-3.jpg", caption: "School girl ❤️" },
        { src: "/Memorylane/grad-2.jpg", caption: "Graduation queen 🎓" },
      ];
    return (
      <div className="bg-purple-100 py-12 px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">Memory Lane 🛤️</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {memories.map((memory, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-4">
              <img src={memory.src} alt={`memory-${index}`} className="rounded-md mb-3 w-full h-64 object-cover" />
              <p className="text-gray-700">{memory.caption}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  