interface TemperatureProps {
  children: number | string;
}

const Temperature = (props: TemperatureProps) => {
  const { children } = props;

  return (
    <>
      <h1 className="font-quicksand font-bold text-7xl text-primary text-shadow lg:text-[9rem] flex gap-1">
        <span>{children}</span> <span className="text-4xl lg:text-5xl">{` \u00B0C`}</span>
      </h1>
    </>
  );
};

export default Temperature;
