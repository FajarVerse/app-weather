interface ParagraphProps {
  children: string;
}

const Paragraph = (props: ParagraphProps) => {
  const { children } = props;

  return (
    <>
      <p className="font-raleway font-semibold text-sm text-primary text-shadow lg:text-base">
        {children}
      </p>
    </>
  );
};

export default Paragraph;
