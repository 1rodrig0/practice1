import React from "react";
import facha from "@/public/window.svg";
import Image, { StaticImageData } from "next/image";
import "./Exercise.css";

interface ExerciseProps {
  titulo: string;
  imagen: StaticImageData;
}
const Exercise: React.FC<ExerciseProps> = ({ titulo, imagen }) => {
  return (
    <div className="card">
      <Image src={imagen} alt={titulo} />
      <div className="text">
        <h2>{titulo}</h2>
        <span>3 series x 12 repeticiones</span>
      </div>
      <img src={facha.src} alt="" />
    </div>
  );
};

export default Exercise;
