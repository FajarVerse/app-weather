interface HeaderProps {
  children: string | number | undefined;
  className?: string;
}

const Header = (props: HeaderProps) => {
  const { children, className } = props;
  return (
    <>
      <h2
        className={`font-quicksand font-extrabold text-3xl text-primary text-shadow lg:text-4xl ${className}`}
      >
        {children}
      </h2>
    </>
  );
};

export default Header;
