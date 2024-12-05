interface ForecastLayoutProps {
  children: React.ReactNode;
  classname?: string;
}

const ForecastLayout = (props: ForecastLayoutProps) => {
  const { children, classname } = props;

  return (
    <>
      <div
        className={`w-full p-3 mt-5 bg-slate-400 bg-opacity-30 backdrop-blur-sm rounded-lg lg:px-4 ${classname}`}
      >
        {children}
      </div>
    </>
  );
};

export default ForecastLayout;
