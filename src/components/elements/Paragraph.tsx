interface ParagraphProps {
  children: string;
}

const Paragraph = (props: ParagraphProps) => {
  const { children } = props;

  return (
    <>
      <p className="font-raleway font-semibold text-sm text-primary text-shadow lg:text-lg">
        {children}
      </p>
    </>
  );
};

export default Paragraph;
