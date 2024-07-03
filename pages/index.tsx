import SeoTags from "../components/SeoTags";
import PageTemplate from "../templates/page.template";
import { motion } from "framer-motion";
import { container, text_reveal, text_reveal_fade } from "../utils/Animation";
import { Frame } from "../components";

const About = () => {
  const texts = [{ content: "Rojan Rana Magar" }];

  const textList = texts.map((text, index) => (
    <div className="overflow-hidden" key={index}>
      <motion.div className="mb-8 gradient-text " variants={text_reveal}>
        {text.content}
      </motion.div>
    </div>
  ));

  return (
    <>
      <SeoTags />
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        className="flex"
      >
        <motion.div
          variants={container}
          className="mt-16 md:mt-0 2xl:w-1/2 lg:pl-36"
        >
          <div className="text-4xl md:text-6xl 2xl:text-8xl">{textList}</div>
          <motion.p
            variants={text_reveal_fade}
            style={{ lineHeight: "2.1rem", fontSize: "17px" }}
          >
            I'm a Full stack Software engineer , building thing for the web,
            mobile application, window app, offering a memorable user
            experience. Currently working with{" "}
            <span className="gradient-text">
              React, GraphQl, Kafka, RabbitMQ, Typescript, NodeJs, NestJs, Rust
              and Prisma
            </span>{" "}
            .<br /> My whole life's passion is shaped arround{" "}
            <span className="underline-span">programming</span> .
          </motion.p>
        </motion.div>
        <div className="md:static fixed md:block xl:w-1/2">
          <Frame radius="rounded-md" />
        </div>
      </motion.div>
    </>
  );
};

export default About;

About.Template = PageTemplate;
