import Link from 'next/link';
import { BsFolder } from 'react-icons/bs';
import { CiShare1 } from 'react-icons/ci';

interface Props {
  title: string;
  desc: string;
  listItem: string[];
  link: string;
}

const ArchiveCard = ({ title, desc, listItem, link }: Props) => {
  return (
    <Link href={link} target="_blank">
      <div className="w-full h-80 rounded-lg bg-[#112240] p-7 flex flex-col justify-center gap-6 hover:-translate-x-2 transition-transform duration-300 group">
        <div className="flex justify-between items-center">
          <BsFolder className="text-4xl text-textGreen" />
          <CiShare1 className="text-4xl hover:text-textGreen " />
        </div>
        <div>
          <h2 className="text-xl font-titleFont font-semibold tracking-wide group-hover:text-textGreen">
            {title}
          </h2>
          <p className="text-sm mt-3">{desc}</p>
        </div>
        <ul className="text-xs mdl:text-sm text-textDark flex items-center gap-2 justify-between flex-wrap">
          {listItem.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </Link>
  );
};

export default ArchiveCard;
