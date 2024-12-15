interface WeatherProps {
  children: string;
}

const Weather = (props: WeatherProps) => {
  const { children } = props;

  return (
    <>
      <h3 className="font-raleway font-semibold text-[1.2rem] text-primary text-shadow lg:text-2xl">
        {children}
      </h3>
    </>
  );
};

export default Weather;
