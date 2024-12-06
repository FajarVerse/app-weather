interface SubHeaderProps {
  children: string;
  icon?: React.ReactNode;
}

const SubHeader = (props: SubHeaderProps) => {
  const { children, icon } = props;

  return (
    <>
      <h3 className="font-quicksand font-bold text-lg text-primary text-shadow flex gap-2 items-center lg:text-xl">
        <span>{icon}</span>
        <span>{children}</span>
      </h3>
    </>
  );
};

export default SubHeader;
