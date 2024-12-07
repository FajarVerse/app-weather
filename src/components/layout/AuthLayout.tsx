import { format } from "date-fns";
import { id } from "date-fns/locale";
import { useEffect, useState } from "react";
import sunrise_bg from "../../assets/image/sunrise_bg.jpg";
import sunset_bg from "../../assets/image/sunset_bg.jpg";
import afternoon_bg from "../../assets/image/afernoon_bg.jpg";
import night_bg from "../../assets/image/night_bg.jpg";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = (props: AuthLayoutProps) => {
  const { children } = props;
  const [background, setBackground] = useState<string>("");

  useEffect(() => {
    const hours = format(new Date(), "HH", { locale: id });
    if (hours >= "5" && hours <= "10") {
      setBackground(sunrise_bg);
    } else if (hours > "10" && hours <= "15") {
      setBackground(afternoon_bg);
    } else if (hours > "15" && hours <= "19") {
      setBackground(sunset_bg);
    } else if (hours > "19" && hours <= "5") {
      setBackground(night_bg);
    }
    console.log(hours);
  }, []);

  console.log(background);

  return (
    <>
      <section
        className="py-9 bg-cover bg-fixed lg:h-screen "
        style={{ backgroundImage: `url(${background})` }}
      >
        {children}
      </section>
    </>
  );
};

export default AuthLayout;
