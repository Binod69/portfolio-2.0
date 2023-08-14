import Image from 'next/image';
import SectionTitle from '../SectionTitle';
import { IoLogoJavascript } from 'react-icons/io';
import { FaReact } from 'react-icons/fa';
import {
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
} from 'react-icons/si';
import profile from '../../../public/assets/profile.webp';

const About = () => {
  return (
    <section
      id="about"
      className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8"
    >
      <SectionTitle title={'About Me'} titleNo={'01.'} />
      <div className="flex flex-col lgl:flex-row gap-16">
        <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
          <p>
            Hello there! I&apos;m Binod, a passionate frontend developer with a
            keen eye for creating engaging and user-centric web experiences.
            While my professional journey is in its early stages, my enthusiasm
            for web development and dedication to crafting clean, interactive
            interfaces drives me to constantly learn and grow in this dynamic
            field.
          </p>
          <p>
            With a solid foundation in HTML, CSS,JavaScript,React and Next
            I&apos;m eager to contribute my skills to the exciting world of web
            development. My focus lies in creating aesthetically pleasing and
            responsive designs that bring user ideas to life. While I might be
            new to the industry, my determination to adapt, learn, and push the
            boundaries of what&apos;s possible is what truly sets me apart.
          </p>
          <p>
            Through my projects, I aspire to showcase not only my technical
            skills but also my commitment to collaborating with teams to deliver
            impactful digital solutions. As I embark on this journey, I am
            excited to learn from the best, refine my craft, and contribute my
            unique perspective to the ever-evolving landscape of frontend
            development.
          </p>
          <p>Here are few technologies i have been working with recently:</p>
          <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6">
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <IoLogoJavascript />
              </span>
              Javascript
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <SiNodedotjs />
              </span>
              Node
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <FaReact />
              </span>
              React
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <SiExpress />
              </span>
              Express
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <SiNextdotjs />
              </span>
              Next
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <SiMongodb />
              </span>
              MongoDB
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <SiTypescript />
              </span>
              Typescript
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <SiTailwindcss />
              </span>
              Tailwind
            </li>
          </ul>
        </div>
        <div className="w-full lgl:w-1/3 h-80 relative group">
          <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg">
            <div className=" w-full h-full relative z-20 flex pl-6 lgl:pl-6">
              <Image
                className="rounded-lg h-full w-full object-cover"
                src={profile}
                alt="profile.webp"
                quality={80}
              />
              <div className=" hidden lgl:inline-block absolute  w-72 h-80 bg-textGreen/20 rounded-md top-0 left-6  group-hover:bg-transparent duration-300"></div>
            </div>
          </div>
          <div className="hidden lgl:inline-flex w-full h-80 border-2 border-textGreen rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
