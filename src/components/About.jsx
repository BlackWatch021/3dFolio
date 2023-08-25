import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>OverView</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a skilled software developer with experience in TypeScript and
        JavaScript. My expertise includes working with frameworks and tools such
        as React, Node.js, Express.js, and MongoDB. I am a proud member of the
        "VI QR Coders" team, and together we achieved victory in the Smart India
        Hackathon 2022 edition. I have a strong learning mindset and I am
        currently focusing on expanding my knowledge in NEXT.js and honing my
        UI/UX design skills. While I may not know everything, I excel in
        researching and finding effective solutions. I am eager to collaborate
        and transform your ideas into reality. Let's join forces to bring your
        visions to life!
        {/* I'm a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks/tools like React, NodeJS, ExpressJS and MongoDB.
        I am a part of team "VI QR Coders", working together we have won the Smart India Hackathon 2023 edition.
       I am a quick learner, and currently I am learning more and more about NEXT JS and UI/UX designing.
       I might don't konw everything, but I know how to do research and get the solution.
        Let's work together to bring your ideas to life! */}
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
