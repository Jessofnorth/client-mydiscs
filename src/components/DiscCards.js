import React from "react";
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";

// component for displaying each disc and its info
const DiscCards = () => {
  return (
    <article className="card p-4 bg-sky-900/20 max-w-fit max-h-fit m-4 shadow-md rounded-lg">
      <img
        className="rounded-full border-8 border-white shadow-xl"
        src="https://jess-mydiscs.azurewebsites.net/uploads/thumb_6wWtQrhc47A4sk3LhG2b231314693.jpg"
        alt="Disc: namn"
      />
      <div className="text-gray-700 pt-4 text-lg grid grid-cols-2 content-center text-center gap-2">
        <p className="text-2xl font-bold col-span-2">Eagle </p>
        <p className="text-lg font-bold col-span-2">Innova - Fairway</p>
        <p className="text-md col-span-2">Plastic: Star</p>
        <p>Speed: <span className="font-bold">5</span></p>
        <p>Glide: <span className="font-bold">2</span></p>
        <p>Turn: <span className="font-bold">-3</span></p>
        <p>Fade: <span className="font-bold">0</span></p>
        <p className="text-xl col-span-2 text-green-800 flex place-self-center"><AiFillCheckCircle size={30} className="pr-2" />Disc is in bag</p>
        <p className="text-xl col-span-2 text-red-800 flex place-self-center"><AiFillCloseCircle size={30} className="pr-2" />Disc is not in bag</p>

      </div>
    </article>
  );
};

export default DiscCards;
