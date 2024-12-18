
import Exercise from "@/components/Exercise";
import Header from "@/components/Header";
import Image from "next/image";
import img1 from "@/public/vercel.svg"
import img2 from "@/public/window.svg"
import img3 from "@/public/globe.svg"
import img4 from "@/public/vercel.svg"

export default function Home() {
  const titles =["puxada frontal","remada curbada","remada unilateral","levantamiento terra"]
  const images =[img1,img2,img3,img4]

  return (
    <>
    <Header/>
    {titles.map((title, index) =>(
      <Exercise key={index} titulo={title} imagen={images[index]}/>
      ))}
    </>
    
  );
}
