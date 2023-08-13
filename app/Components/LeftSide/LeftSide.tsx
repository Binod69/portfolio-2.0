import Link from 'next/link';
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillFacebook,
  AiFillInstagram,
} from 'react-icons/ai';
const LeftSide = () => {
  return (
    <>
      <div className="w-full h-full flex flex-col items-center justify-end gap-4 text-textLight">
        <div className="flex flex-col gap-4">
          <Link href="https://github.com/Binod69" target="blank">
            <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor:pointer hover:-translate-y-2 transition-all duration-300">
              <AiFillGithub />
            </span>
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          <Link
            href="https://www.linkedin.com/in/binod-budhathoki-0b2000271/"
            target="blank"
          >
            <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor:pointer hover:-translate-y-2 transition-all duration-300">
              <AiFillLinkedin />
            </span>
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          <Link
            href="https://www.facebook.com/Line.between.two.dots/"
            target="blank"
          >
            <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor:pointer hover:-translate-y-2 transition-all duration-300">
              <AiFillFacebook />
            </span>
          </Link>
        </div>
        {/* <div className="flex flex-col gap-4">
          <Link href="https://github.com/Binod69" target="blank">
            <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor:pointer hover:-translate-y-2 transition-all duration-300">
              <AiFillInstagram />
            </span>
          </Link>
        </div> */}
        <div className="w-[2px] h-32 bg-textDark"></div>
      </div>
    </>
  );
};

export default LeftSide;
