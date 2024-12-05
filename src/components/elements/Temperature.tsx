interface TemperatureProps {
  children: number | string;
}

const Temperature = (props: TemperatureProps) => {
  const { children } = props;

  return (
    <>
      <h1 className="font-quicksand font-bold text-8xl text-primary text-shadow ">
        {children}
      </h1>
    </>
  );
};

export default Temperature;
