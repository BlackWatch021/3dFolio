import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas, DuckCanvas } from "./canvas";
import { useEffect, useRef, useState } from "react";
import { i } from "maath/dist/index-43782085.esm";
import { random } from "maath";

const Hero = () => {
  const nameReference = useRef("");
  let random = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  (() => {
    let name = "Himanshu";
    let iterations = 0;
    let interval = setInterval(() => {
      nameReference.current.innerText = nameReference.current.innerText
        .split("")
        .map((letter, index) => {
          if (index < iterations) {
            return name[index];
          }
          return random[Math.floor(Math.random() * 26)];
        })
        .join("");
      iterations += 1 / 3;
      if (iterations === 7) {
        clearInterval(interval);
        nameReference.current.innerText = name;
      }
    }, 30);
  })();
  // useEffect(() => {
  //   randomEffect("Himanshu");
  // }, []);

  console.log("Reference", nameReference.current.innerText);

  return (
    <section
      style={{ marginTop: "20px" }}
      className="relative w-full h-screen mx-auto"
    >
      <div
        className={`${styles.paddingX} absolute inset-0 top-[70px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            {/* Hi, I'm <span className="text-[#915eff]">Himanshu</span> */}
            Hi, I'm{" "}
            <span className="text-[#915eff]" ref={nameReference}>
              Himanshu
            </span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am a fullstack developer, and likes designing.
            <br className="sm:block hidden" />
            Currently I am learning UI/UX.
          </p>
        </div>
      </div>
      {/* <ComputersCanvas /> */}
      <DuckCanvas />
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[30px] h-[50px] rounded-3xl border-2 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 20, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
