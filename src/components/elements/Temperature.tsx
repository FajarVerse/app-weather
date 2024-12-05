interface TemperatureProps {
  children: number | string;
}

const Temperature = (props: TemperatureProps) => {
  const { children } = props;

  return (
    <>
      <h1 className="font-quicksand font-bold text-8xl text-primary text-shadow lg:text-[9rem]">
        {children}
      </h1>
    </>
  );
};

export default Temperature;
