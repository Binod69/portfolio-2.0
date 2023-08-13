'use client';
import {
  About,
  Archive,
  Contact,
  Experience,
  LeftSide,
  MiddleSide,
  Project,
  RightSide,
} from '../index';
import { motion } from 'framer-motion';

const Main = () => {
  return (
    <section className="w-full h-[88vh] xl:flex items-center gap-20 justify-between">
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
        <Experience />
        <Project />
        <Archive />
        <Contact />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="hidden xl:inline-flex w-32 h-full fixed right-0 bottom-0"
      >
        <RightSide />
      </motion.div>
    </section>
  );
};

export default Main;
