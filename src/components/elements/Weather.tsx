interface WeatherProps {
  children: string;
}

const Weather = (props: WeatherProps) => {
  const { children } = props;

  return (
    <>
      <h3 className="font-raleway font-semibold text-xl text-primary text-shadow">
        {children}
      </h3>
    </>
  );
};

export default Weather;
