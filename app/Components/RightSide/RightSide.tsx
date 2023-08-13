import Link from 'next/link';

const RightSide = () => {
  return (
    <section className="w-full h-full flex flex-col items-center justify-end gap-7 text-textLight">
      <Link href="mailto:budhathokib52@gmail.com">
        <p className="text-sm rotate-90 w-72 tracking-wide text-textGreen">
          budhathokib52@gmail.com
        </p>
      </Link>
      <span className="w-[2px] h-32 bg-textGreen inline-flex"></span>
    </section>
  );
};

export default RightSide;
