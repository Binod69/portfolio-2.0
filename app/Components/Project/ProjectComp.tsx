import Link from 'next/link';
import Image from 'next/image';
import { AiOutlineGithub } from 'react-icons/ai';
import { CiShare1 } from 'react-icons/ci';

interface Props {
  orderimg: string;
  ordertxt: string;
  image: any;
  desc: string;
  linkGithub: string;
  linkWebsite: string;
  tech1: string;
  tech2: string;
  tech3: string;
  tech4: string;
  tech5: string;
}
const ProjectComp = ({
  orderimg,
  ordertxt,
  image,
  desc,
  linkGithub,
  linkWebsite,
  tech1,
  tech2,
  tech3,
  tech4,
  tech5,
}: Props) => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
      <div className="flex flex-col xl:flex-row gap-6 ">
        <Link
          href="https://ecommerce-rosy-zeta.vercel.app/"
          target="_blank"
          className={` w-full xl:w-1/2 h-auto relative group ${orderimg}`}
        >
          <div>
            <Image
              className="w-full h-full object-contain"
              src={image}
              alt="host.webp"
            />
          </div>
        </Link>
        <div
          className={`w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10 ${ordertxt}`}
        >
          <p className="font-titleFont text-textGreen text-sm tracking-wide">
            Featured Projects
          </p>
          <h3 className="text-2xl font-bold">Amazon Clone</h3>
          <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-sm">
            {desc}
            <span className="text-textGreen">0-auth</span> Lorem ipsum dolor sit
            amet.
            <span className="text-textGreen">stripe</span>
          </p>
          <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2  md:gap-5 justify-between  text-textDark">
            <li>{tech1}</li>
            <li>{tech2}</li>
            <li>{tech3}</li>
            <li>{tech4}</li>
            <li>{tech5}</li>
          </ul>
          <div className="text-2xl flex gap-4">
            <a
              className="hover:text-textGreen duration-300"
              href={linkGithub}
              target="_blank"
            >
              <AiOutlineGithub />
            </a>
            <a
              className="hover:text-textGreen duration-300"
              href={linkWebsite}
              target="_blank"
            >
              <CiShare1 />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectComp;
