import Link from 'next/link';
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillFacebook,
  AiFillInstagram,
} from 'react-icons/ai';
const Footer = () => {
  return (
    <div className="hidden mdl:inline-flex xl:hidden items-center justify-center w-full py-6 gap-4">
      <Link href="https://github.com/Binod69" target="_blank">
        <span className="w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2">
          <AiFillGithub />
        </span>
      </Link>
      <Link
        href="https://www.linkedin.com/in/binod-budhathoki-0b2000271/"
        target="_blank"
      >
        <span className="w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2">
          <AiFillLinkedin />
        </span>
      </Link>
      <Link
        href="https://www.facebook.com/Line.between.two.dots/"
        target="_blank"
      >
        <span className="w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2">
          <AiFillFacebook />
        </span>
      </Link>
    </div>
  );
};

export default Footer;
