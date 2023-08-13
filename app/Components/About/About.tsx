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
import { profile } from '../../../public/index';
import test from '../../../public/assets/test.webp';

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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            dolorum quidem dicta in distinctio quam repellendus tenetur neque
            dolor eligendi, sed iure dignissimos quia, odit porro expedita optio
            ex eum ad ipsam mollitia odio veniam? Ut non, nulla soluta labore
            sapiente, iure repellendus, beatae veniam ex sequi omnis suscipit
            dolor.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis esse
            illo delectus, modi laborum quo ad? Amet delectus minus quas
            consequatur voluptatum libero velit? Aliquid nostrum repellendus
            cupiditate a nulla?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
            dolorum ullam repellat error nesciunt, ducimus nihil illo neque
            alias sed reprehenderit nisi eius consectetur autem! Laudantium in
            accusamus sapiente nihil.
          </p>
          <p>Here are few technologies i have been working with recently:</p>
          <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6">
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <IoLogoJavascript />
              </span>
              Javascript(ES6+)
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
              <div className=" hidden lgl:inline-block absolute w-full h-80 bg-textGreen/20 rounded-md top-0 left-0 right- group-hover:bg-transparent duration-300"></div>
            </div>
          </div>
          <div>
            <div className="hidden lgl:inline-flex w-full h-80 border-2 border-textGreen rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
