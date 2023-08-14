'use client';
import Navbar from '../Navbar/Navbar';
import {
  About,
  Archive,
  Contact,
  Experience,
  Footer,
  LeftSide,
  MiddleSide,
  Project,
  RightSide,
} from '../index';
import { motion } from 'framer-motion';

const Main = () => {
  return (
    <section className="w-full h-screen font-bodyFont bg-bodyColor text-textLight overflow-x-hidden overflow-y-scroll scrollbar scrollbar-track-textDark/20 scrollbar-thumb-textDark/60">
      <Navbar />
      <div className="w-full h-[88vh] xl:flex items-center gap-20 justify-between">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0"
        >
          <LeftSide />
        </motion.div>
        <div className="h-[88vh] mx-auto w-full p-4 ">
          <MiddleSide />
          <About />
          {/* <Experience /> */}
          <Project />
          <Archive />
          <Contact />
          <Footer />
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="hidden xl:inline-flex w-32 h-full fixed right-0 bottom-0"
        >
          <RightSide />
        </motion.div>
      </div>
    </section>
  );
};

export default Main;
