const SectionTitle = ({ title }) => {
  return (
    <div className="text-center mb-5">
      <h2 className="md:text-3xl text-2xl font-bold uppercase my-4">{title}</h2>
      <div className="h-1 mx-auto w-24 bg-blue-500 rounded"></div>
    </div>
  );
};

export default SectionTitle;
