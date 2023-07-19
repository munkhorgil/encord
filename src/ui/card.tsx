type Props = React.PropsWithChildren<{
  className?: string;
}>;

const Card: React.FC<Props> = ({ className, children }: Props) => {
  return (
    <div
      className={`p-6 rounded-2xl overflow-hidden border-[1px] shadow-lg ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
