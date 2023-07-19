type Props = {
  text: string;
};

const Empty = ({ text }: Props) => {
  return <div className="flex justify-center items-center text-lg m-8">{text}</div>;
};

export default Empty;
