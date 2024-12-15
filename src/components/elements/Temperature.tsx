interface TemperatureProps {
  children: number | string;
}

const Temperature = (props: TemperatureProps) => {
  const { children } = props;

  return (
    <>
      <h1 className="font-quicksand font-bold text-8xl text-primary text-shadow tracking-tighter lg:text-[7rem] flex gap-1 xl:text-[10rem] xl:tracking-tight">
        <span>{children}</span> <span className="text-4xl lg:text-5xl">{` \u00B0C`}</span>
      </h1>
    </>
  );
};

export default Temperature;
