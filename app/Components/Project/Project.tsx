import Link from 'next/link';
import Image from 'next/image';
import SectionTitle from '../SectionTitle';
import host from '../../../public/assets/host.webp';
import { AiOutlineGithub } from 'react-icons/ai';
import { CiShare1 } from 'react-icons/ci';
import ProjectComp from './ProjectComp';

const Project = () => {
  return (
    <section id="project" className="max-w-container mx-auto lgl:px-20 py-24">
      <SectionTitle title={'Some Things i have Built'} titleNo={'03.'} />
      <div className="w-full flex flex-col items-center justify-between gap-28 mt-10">
        {/* Projects1 */}
        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row gap-6">
            <Link
              href="https://ecommerce-rosy-zeta.vercel.app/"
              target="_blank"
              className="w-full xl:w-1/2 h-auto relative group"
            >
              <div>
                <Image
                  className="w-full h-full object-contain"
                  src={host}
                  alt="host.webp"
                />
              </div>
            </Link>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Projects
              </p>
              <h3 className="text-2xl font-bold">Amazon Clone</h3>
              <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
                tempore?
                <span className="text-textGreen">0-auth</span> Lorem ipsum dolor
                sit amet.
                <span className="text-textGreen">stripe</span>
              </p>
              <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2  md:gap-5 justify-between  text-textDark">
                <li>Next</li>
                <li>Javascript</li>
                <li>Tailwind</li>
                <li>Stripe</li>
                <li>Vercel Deployment</li>
              </ul>
              <div className="text-2xl flex gap-4">
                <Link
                  className="hover:text-textGreen duration-300"
                  href="https://github.com/Binod69/ecommerce-wholesale"
                  target="_blank"
                >
                  <AiOutlineGithub />
                </Link>
                <Link
                  className="hover:text-textGreen duration-300"
                  href="https://ecommerce-binod69.vercel.app/"
                  target="_blank"
                >
                  <CiShare1 />
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Projects2 */}
        {/* <ProjectComp
        orderimg={'2'}
        ordertxt={'1'}
        image={host}
        desc={
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum nostrum sequi unde nemo exercitationem expedita mollitia pariatur quam ad quae.'
        }
        tech1={'Next'}
        tech2={'Javascript'}
        tech3={'Tailwind'}
        tech4={'Stripe'}
        tech5={'Vercel Deployment'}
        linkGithub={'https://github.com/Binod69/ecommerce-wholesale'}
        linkWebsite={'https://ecommerce-binod69.vercel.app/'}
      /> */}
        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row-reverse gap-6">
            <Link
              href="https://ecommerce-rosy-zeta.vercel.app/"
              target="_blank"
              className="w-full xl:w-1/2 h-auto relative group"
            >
              <div>
                <Image
                  className="w-full h-full object-contain"
                  src={host}
                  alt="host.webp"
                />
              </div>
            </Link>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right  z-10">
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Projects
              </p>
              <h3 className="text-2xl font-bold">Amazon Clone</h3>
              <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 xl:-mr-16 rounded-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
                tempore?
                <span className="text-textGreen">0-auth</span> Lorem ipsum dolor
                sit amet.
                <span className="text-textGreen">stripe</span>
              </p>
              <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2  md:gap-5 justify-between  text-textDark">
                <li>Next</li>
                <li>Javascript</li>
                <li>Tailwind</li>
                <li>Stripe</li>
                <li>Vercel Deployment</li>
              </ul>
              <div className="text-2xl flex gap-4">
                <Link
                  className="hover:text-textGreen duration-300"
                  href="https://github.com/Binod69/ecommerce-wholesale"
                  target="_blank"
                >
                  <AiOutlineGithub />
                </Link>
                <Link
                  className="hover:text-textGreen duration-300"
                  href="https://ecommerce-binod69.vercel.app/"
                  target="_blank"
                >
                  <CiShare1 />
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Projects3 */}
        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row gap-6">
            <Link
              href="https://ecommerce-rosy-zeta.vercel.app/"
              target="_blank"
              className="w-full xl:w-1/2 h-auto relative group"
            >
              <div>
                <Image
                  className="w-full h-full object-contain"
                  src={host}
                  alt="host.webp"
                />
              </div>
            </Link>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right  z-10">
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Projects
              </p>
              <h3 className="text-2xl font-bold">Amazon Clone</h3>
              <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 xl:-mr-16 rounded-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
                tempore?
                <span className="text-textGreen">0-auth</span> Lorem ipsum dolor
                sit amet.
                <span className="text-textGreen">stripe</span>
              </p>
              <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2  md:gap-5 justify-between  text-textDark">
                <li>Next</li>
                <li>Javascript</li>
                <li>Tailwind</li>
                <li>Stripe</li>
                <li>Vercel Deployment</li>
              </ul>
              <div className="text-2xl flex gap-4">
                <Link
                  className="hover:text-textGreen duration-300"
                  href="https://github.com/Binod69/ecommerce-wholesale"
                  target="_blank"
                >
                  <AiOutlineGithub />
                </Link>
                <Link
                  className="hover:text-textGreen duration-300"
                  href="https://ecommerce-binod69.vercel.app/"
                  target="_blank"
                >
                  <CiShare1 />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
