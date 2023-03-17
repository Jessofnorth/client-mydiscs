import React from "react";
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";

// component for displaying each disc and its info
const DiscCards = (disc) => {
  console.log(disc)

  return (
    <article className="card p-4 bg-sky-900/20 max-w-fit max-h-fit m-4 shadow-md rounded-lg">
      <img
        className="rounded-full border-8 border-white shadow-xl"
        src={disc.disc.imageName}
        alt={"Disc: disc.name"}
      />
      <div className="text-gray-700 pt-4 text-lg grid grid-cols-2 content-center text-center gap-2">
        <p className="text-2xl font-bold col-span-2">{disc.disc.name}</p>
        <p className="text-lg font-bold col-span-2">{disc.disc.brand.brandName} - {disc.disc.category.categoryName}</p>
        <p className="text-md col-span-2">Plastic: {disc.disc.plastic}</p>
        <p>
          Speed: <span className="font-bold">{disc.disc.speed}</span>
        </p>
        <p>
          Glide: <span className="font-bold">{disc.disc.glide}</span>
        </p>
        <p>
          Turn: <span className="font-bold">{disc.disc.turn}</span>
        </p>
        <p>
          Fade: <span className="font-bold">{disc.disc.fade}</span>
        </p>
        {/* show if disc is in bag or not based on bool from db */}
        {disc.disc.bagged === true ? (
          <p className="text-xl col-span-2 text-green-800 flex place-self-center">
            <AiFillCheckCircle size={30} className="pr-2" />
            Disc is in bag
          </p>
        ) : (
          <p className="text-xl col-span-2 text-red-800 flex place-self-center">
            <AiFillCloseCircle size={30} className="pr-2" />
            Disc is not in bag
          </p>
        )}
      </div>
    </article>
  );
};

export default DiscCards;
