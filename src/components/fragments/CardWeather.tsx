interface CardWeatherProps {
  children: React.ReactNode;
  classname?: string;
}

interface CardDescProps {
  date: string;
  temp: string | number;
  weather: string;
}

interface CardIconProps {
  url: string;
}

const CardWeather = (props: CardWeatherProps) => {
  const { children, classname } = props;

  return (
    <>
      <div
        className={`w-48 h-auto pl-2 pr-0 py-3 bg-second rounded-md flex gap-6 justify-between items-center border-2 border-slate-300 xl:px-5 hover:bg-semilight group transition duration-300 ease-in-out ${classname}`}
      >
        {children}
      </div>
    </>
  );
};

const CardDesc = (props: CardDescProps) => {
  const { date, temp, weather } = props;

  return (
    <>
      <div className="w-1/2">
        <p className="desc-card">{date}</p>
        <h4 className="font-quicksand font-semibold text-lg text-primary lg:text-xl group-hover:text-gray-700 flex gap-0.5 transition duration-300 ease-in">
          <span>{temp}</span><span className="text-base">{` \u00B0C`}</span>
        </h4>
        <p className="desc-card text-wrap">{weather}</p>
      </div>
    </>
  );
};

const CardIcon = (props: CardIconProps) => {
  const { url } = props;

  return (
    <>
      <div className="w-1/2 h-full self-start">
        <div className="w-[50px] h-[50px] flex justify-center items-start">
          <div className="w-full h-full">
            <img
              src={`https:${url}`}
              alt="icon"
              className="w-full h-full bg-blend-multiply"
            />
          </div>
        </div>
      </div>
    </>
  );
};

CardWeather.CardDesc = CardDesc;
CardWeather.CardIcon = CardIcon;

export default CardWeather;
