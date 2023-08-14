import Link from 'next/link';
import Image from 'next/image';
import SectionTitle from '../SectionTitle';
import digi from '../../../public/assets/digi.webp';
import ecomm from '../../../public/assets/ecom.webp';
import blog from '../../../public/assets/blog.webp';
import { AiOutlineGithub } from 'react-icons/ai';
import { CiShare1 } from 'react-icons/ci';

const Project = () => {
  return (
    <section id="project" className="max-w-container mx-auto lgl:px-20 py-24">
      <SectionTitle title={'Some Things i have Built'} titleNo={'02.'} />
      <div className="w-full flex flex-col items-center justify-between gap-28 mt-10">
        {/* Projects1 */}
        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row gap-6">
            <Link
              href="https://digi-dolphins.vercel.app/"
              target="_blank"
              className="w-full xl:w-1/2 h-auto relative group"
            >
              <div>
                <Image
                  className="w-full h-full object-contain"
                  src={digi}
                  alt="host.webp"
                  placeholder="blur"
                  quality={80}
                />
              </div>
            </Link>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Projects
              </p>
              <h3 className="text-2xl font-bold">Agency</h3>
              <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-sm">
                Digi Dolphins is a specialized company that focuses exclusively
                on creating
                <span className="text-textGreen">
                  {' '}
                  cutting-edge web applications.
                </span>{' '}
                With a team of dedicated experts, the company is committed to
                pushing the{' '}
                <span className="text-textGreen">
                  boundaries of web technology
                </span>{' '}
                to deliver innovative and impactful solutions for clients across
                various industries.
              </p>
              <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2  md:gap-5 justify-between  text-textDark">
                <li>Next</li>
                <li>Typescript</li>
                <li>Bootstrap</li>
                <li>Responsive Design</li>
                <li>Vercel Deployment</li>
              </ul>
              <div className="text-2xl flex gap-4">
                <Link
                  className="hover:text-textGreen duration-300"
                  href="https://github.com/Binod69/digi-dolphins"
                  target="_blank"
                >
                  <AiOutlineGithub />
                </Link>
                <Link
                  className="hover:text-textGreen duration-300"
                  href="https://digi-dolphins.vercel.app/"
                  target="_blank"
                >
                  <CiShare1 />
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Projects2 */}
        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row-reverse gap-6">
            <Link
              href="https://ecommerce-binod69.vercel.app/"
              target="_blank"
              className="w-full xl:w-1/2 h-auto relative group"
            >
              <div>
                <Image
                  className="w-full h-full object-contain"
                  src={ecomm}
                  alt="host.webp"
                  placeholder="blur"
                  quality={80}
                />
              </div>
            </Link>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right  z-10">
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Projects
              </p>
              <h3 className="text-2xl font-bold">Amazon Clone</h3>
              <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 xl:-mr-16 rounded-sm">
                A simple clone project of Amazon{' '}
                <span className="text-textGreen">
                  login and Register with next-auth to handle Authentication
                </span>{' '}
                .With login and Register with next-auth to handle
                Authentication.Users can add products to cart and
                <span className="text-textGreen">
                  make payment through cash on delivery or Online
                  payment(PayPal)
                </span>
              </p>
              <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2  md:gap-5 justify-between  text-textDark">
                <li>Next</li>
                <li>Javascript</li>
                <li>Paypal</li>
                <li>Headless ui</li>
                <li>Mongoose</li>
                <li>Next-auth</li>
                <li>axios</li>
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
              href="https://my-personal-blog-binod.vercel.app/"
              target="_blank"
              className="w-full xl:w-1/2 h-auto relative group"
            >
              <div>
                <Image
                  className="w-full h-full object-contain"
                  src={blog}
                  alt="host.webp"
                  placeholder="blur"
                  quality={80}
                />
              </div>
            </Link>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Projects
              </p>
              <h3 className="text-2xl font-bold">Blog</h3>
              <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-sm">
                A simple personal blog webapp with minimalist design
                {''} <span className="text-textGreen">Dark and Light</span> Mode
                to toggle between and {''}
                <span className="text-textGreen">Sanity as a cms</span>
              </p>
              <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2  md:gap-5 justify-between  text-textDark">
                <li>Next</li>
                <li>Typescript</li>
                <li>Tailwind</li>
                <li>Sanity</li>
                <li>Vercel Deployment</li>
              </ul>
              <div className="text-2xl flex gap-4">
                <Link
                  className="hover:text-textGreen duration-300"
                  href="https://github.com/Binod69/blog-next"
                  target="_blank"
                >
                  <AiOutlineGithub />
                </Link>
                <Link
                  className="hover:text-textGreen duration-300"
                  href="https://my-personal-blog-binod.vercel.app/"
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
