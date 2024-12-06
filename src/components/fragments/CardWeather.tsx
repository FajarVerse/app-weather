interface CardWeatherProps {
  children: React.ReactNode;
}

interface CardDescProps {
  temp: string | number;
  weather: string;
}

interface CardIconProps {
  icon: React.ReactNode;
}

const CardWeather = (props: CardWeatherProps) => {
  const { children } = props;

  return (
    <>
      <div className="w-auto px-3 py-3 bg-second rounded-md flex gap-6 justify-between items-center border-2 border-slate-300 xl:px-5 hover:bg-semilight group transition duration-300 ease-in-out">
        {children}
      </div>
    </>
  );
};

const CardDesc = (props: CardDescProps) => {
  const { temp, weather } = props;

  return (
    <>
      <div className="w-1/2">
        <p className="desc-card">hari Ini</p>
        <h4 className="font-quicksand font-semibold text-lg text-primary lg:text-xl group-hover:text-gray-700 transition duration-300 ease-in">
          {temp}
        </h4>
        <p className="desc-card">{weather}</p>
      </div>
    </>
  );
};

const CardIcon = (props: CardIconProps) => {
  const { icon } = props;

  return (
    <>
      <div className="w-1/2 pr-0.5 self-start">
        <div className="w-8 h-8 flex justify-center items-center">
          <div className="w-28 h-28">{icon}</div>
        </div>
      </div>
    </>
  );
};

CardWeather.CardDesc = CardDesc;
CardWeather.CardIcon = CardIcon;

export default CardWeather;
