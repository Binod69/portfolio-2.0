import ArchiveCard from '../ArchiveCard/ArchiveCard';

const Archive = () => {
  return (
    <>
      <div className="max-w-contentContainer mx-auto px-4 py-24">
        <div className="w-full flex flex-col items-center">
          <h2 className="text-3xl font-titleFont font-semibold">
            Other NoteWorthy Projects
          </h2>
          <p className="text-sm font-titleFont text-textGreen">
            View the archieve
          </p>
        </div>
        <div className="grid grid-cols-1 md:grd-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10">
          <ArchiveCard
            title={' Kindergarden'}
            desc={
              ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrumculpa voluptas commodi sequi eveniet iusto tempore cumquedignissimos voluptatum quod!'
            }
            listItem={['React', 'Bootstrap', 'React-Router']}
            link={'https://kindergarten-eight.vercel.app/'}
          />
        </div>
      </div>
    </>
  );
};

export default Archive;
