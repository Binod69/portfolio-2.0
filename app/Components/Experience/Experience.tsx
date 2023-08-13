'use client';
import { useState } from 'react';
import SectionTitle from '../SectionTitle';
import Works from '../Works/Works';
import WorksGoogle from '../Works/WorksGoogle';

const Experience = () => {
  const [workDigi, setWorkDigi] = useState(true);
  const [workGoogle, setWorkGoogle] = useState(false);

  const handleDigi = () => {
    setWorkDigi(true);
    setWorkGoogle(false);
  };

  const handleGoogle = () => {
    setWorkDigi(false);
    setWorkGoogle(true);
  };
  return (
    <section
      id="experience"
      className="max-w-containerxs mx-auto py-10 lgl:py-24 px-4"
    >
      <SectionTitle title={'Experience'} titleNo={'02.'} />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-32 flex flex-col">
          <li
            onClick={handleDigi}
            className={`${
              workDigi
                ? ' border-l-textGreen text-textGreen'
                : 'border-l-hoverColor text-textDark'
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            Digi Dolphins
          </li>
          <li
            onClick={handleGoogle}
            className={`${
              workGoogle
                ? ' border-l-textGreen text-textGreen'
                : 'border-l-hoverColor text-textDark'
            } border-l-2 border-l-hoverColor bg-transparent hover:bg-[#112240] py-3 text-sm text-textDark cursor-pointer duration-300 px-8 font-medium`}
          >
            Google
          </li>
        </ul>
        {workDigi && <Works />}
        {workGoogle && <WorksGoogle />}
      </div>
    </section>
  );
};

export default Experience;
