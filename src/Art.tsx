import React, { useState, useEffect, useRef } from "react";
import { data } from "./artData.json";
import { artData } from "./types";

let usedLoc: number[] = [];
let toBinary: boolean = false;

function Art() {
  const ref = useRef<HTMLPreElement>(null);

  const [elements, setElements] = useState<artData[]>(data);

  useEffect(() => {
    const loc = Math.floor(Math.random() * elements.length) + 0;

    let newElements = [...elements];

    if (newElements[loc] !== undefined) {
      setTimeout(() => {
        if (toBinary) {
          newElements[loc].data = newElements[loc].data
            .replace(/▒/g, "0")
            .replace(/░/g, "1");
        } else {
          newElements[loc].data = newElements[loc].data
            .replace(/0/g, "▒")
            .replace(/1/g, "░");
        }

        setElements(newElements);

        if (!usedLoc.includes(loc)) {
          usedLoc.push(loc);
        }
      }, 1);

      if (usedLoc.length === elements.length) {
        usedLoc = [];
        toBinary = !toBinary;
      }
    }
  });

  const res = elements.map(({ className, data }: artData, i) =>
    className === null ? (
      data
    ) : (
      <span key={i} className={className}>
        {data}
      </span>
    )
  );

  return (
    <div className="art">
      <pre ref={ref}>{res}</pre>
    </div>
  );
}

export default Art;
