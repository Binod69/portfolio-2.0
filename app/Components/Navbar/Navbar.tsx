'use client';
import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { easeIn, motion } from 'framer-motion';
import {
  AiOutlineClose,
  AiFillGithub,
  AiFillLinkedin,
  AiFillFacebook,
} from 'react-icons/ai';

const Navbar = () => {
  const ref = useRef<string | any>('');
  const [showMenu, setShowMenu] = useState(false);
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, '');
    const ele = document.getElementById(targetId);
    ele?.scrollIntoView({
      behavior: 'smooth',
    });
    // update the class name of the clicked link
    const links = document.querySelectorAll('.nav-link');
    links.forEach((link) => {
      link.classList.remove('active');
    });
    e.currentTarget.classList.add('active');
  };
  return (
    <>
      <header className="w-full shadow-navbarShadow h-20 lg:h-[12vh] sticky top-0 z-50 bg-bodyColor px-4 ">
        <div className="max-w-container h-full mx-auto py-1 font-titleFont flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h5 className="text-textLight">Logo</h5>
          </motion.div>
          <div className="hidden mdl:inline-flex items-center gap-7">
            <ul className="flex text-[13px] gap-7">
              <Link
                href="#home"
                className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                onClick={handleScroll}
              >
                <motion.li
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.1 }}
                >
                  Home
                </motion.li>
              </Link>
              <Link
                href="#about"
                className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                onClick={handleScroll}
              >
                <motion.li
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.1, delay: 0.1 }}
                >
                  <span>01.</span> About
                </motion.li>
              </Link>
              <Link
                href="#experience"
                className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                onClick={handleScroll}
              >
                <motion.li
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.1, delay: 0.2 }}
                >
                  <span>02.</span> Experience
                </motion.li>
              </Link>
              <Link
                href="#project"
                className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                onClick={handleScroll}
              >
                <motion.li
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.1, delay: 0.3 }}
                >
                  <span>03.</span> Project
                </motion.li>
              </Link>
              <Link
                href="#contact"
                className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                onClick={handleScroll}
              >
                <motion.li
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.1, delay: 0.4 }}
                >
                  <span>04.</span> Contact
                </motion.li>
              </Link>
            </ul>
            <Link href="/assets/myCv.pdf" target="_blank">
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="px-4 py-2 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
              >
                Resume
              </motion.button>
            </Link>
          </div>
          {/* hamburger */}
          <div
            onClick={() => setShowMenu(true)}
            className="w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-textGreen cursor-pointer overflow-hidden group"
          >
            <span className="w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-2 transition-all ease-out duration-300"></span>
            <span className="w-full h-[2px] bg-textGreen inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-out duration-300"></span>
            <span className="w-full h-[2px] bg-textGreen inline-flex transform translate-x-1 group-hover:translate-x-3 transition-all ease-out duration-300"></span>
          </div>
          {showMenu && (
            <>
              <div
                ref={(node) => {
                  ref.current = node;
                }}
                className="absolute mdl:hidden top-0 right-0 w-full h-screen bg-black bg-opacity-50 flex flex-col items-end"
              >
                <motion.div
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.1 }}
                  className="w-[80%] h-full overflow-x-scroll scrollbarHide bg-[#112240] flex flex-col items-center px-5 py-10 relative"
                >
                  <AiOutlineClose
                    onClick={() => setShowMenu(false)}
                    className="text-3xl text-textGreen cursor-pointer hover:text-red-500 absolute top-4 right-4"
                  />
                  <div>
                    <ul className="flex flex-col text-base gap-7 py-5">
                      <Link
                        href="#home"
                        className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                        onClick={handleScroll}
                      >
                        <motion.li
                          initial={{ x: 20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{
                            duration: 0.1,
                            delay: 0.1,
                            ease: 'easeIn',
                          }}
                        >
                          Home
                        </motion.li>
                      </Link>
                      <Link
                        href="#home"
                        className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                        onClick={handleScroll}
                      >
                        <motion.li
                          initial={{ x: 20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{
                            duration: 0.1,
                            delay: 0.2,
                            ease: 'easeIn',
                          }}
                        >
                          <span>01.</span> About
                        </motion.li>
                      </Link>
                      <Link
                        href="#home"
                        className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                        onClick={handleScroll}
                      >
                        <motion.li
                          initial={{ x: 20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{
                            duration: 0.1,
                            delay: 0.3,
                            ease: 'easeIn',
                          }}
                        >
                          <span>02.</span> Experience
                        </motion.li>
                      </Link>
                      <Link
                        href="#home"
                        className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                        onClick={handleScroll}
                      >
                        <motion.li
                          initial={{ x: 20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{
                            duration: 0.1,
                            delay: 0.4,
                            ease: 'easeIn',
                          }}
                        >
                          <span>04.</span> Project
                        </motion.li>
                      </Link>
                      <Link
                        href="#home"
                        className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                        onClick={handleScroll}
                      >
                        <motion.li
                          initial={{ x: 20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{
                            duration: 0.1,
                            delay: 0.5,
                            ease: 'easeIn',
                          }}
                        >
                          <span>05.</span> Contact
                        </motion.li>
                      </Link>
                    </ul>
                    <Link href="/assets/myCv.pdf" target="_blank">
                      <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, ease: 'easeIn' }}
                        className="w-32 h-10 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
                      >
                        Resume
                      </motion.button>
                    </Link>
                    <div className="flex justify-between items-center py-5">
                      <Link href="https://github.com/Binod69" target="_blank">
                        <motion.a
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.7, ease: 'easeIn' }}
                        >
                          <span className="w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2">
                            <AiFillGithub />
                          </span>
                        </motion.a>
                      </Link>
                      <Link
                        href="https://www.linkedin.com/in/binod-budhathoki-0b2000271/"
                        target="_blank"
                      >
                        <motion.a
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.8, ease: 'easeIn' }}
                        >
                          <span className="w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2">
                            <AiFillLinkedin />
                          </span>
                        </motion.a>
                      </Link>
                      <Link
                        href="https://www.facebook.com/Line.between.two.dots/"
                        target="_blank"
                      >
                        <motion.a
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.8, ease: 'easeIn' }}
                        >
                          <span className="w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2">
                            <AiFillFacebook />
                          </span>
                        </motion.a>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </div>
            </>
          )}
        </div>
      </header>
    </>
  );
};

export default Navbar;
