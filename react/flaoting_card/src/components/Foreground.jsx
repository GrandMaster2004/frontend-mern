import React, { useRef, useState } from "react";
import Card from "./Card";

const Foreground = () => {
  const ref = useRef(null);

  const data = [
    {
      desc: "This is the backgroung color of the card that will be displayed.",
      filesize: ".9mb",
      close: false,
      tag: { isOpen: false, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "This is the backgroung color of the card that will be displayed.",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: false, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "This is the backgroung color of the card that will be displayed.",
      filesize: ".9mb",
      close: 1,
      tag: { isOpen: 1, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "This is the backgroung color of the card that will be displayed.",
      filesize: ".9mb",
      close: false,
      tag: { isOpen: 1, tagTitle: "Download Now", tagColor: "blue" },
    },
  ];
  return (
    <div
      ref={ref}
      className="fixed top-0 left-0 z-[3] w-full h-full flex gap-5 flex-wrap p-5 "
    >
      {data.map((item, index) => (
        <Card data={item} reference={ref} />
      ))}
    </div>
  );
};

export default Foreground;
