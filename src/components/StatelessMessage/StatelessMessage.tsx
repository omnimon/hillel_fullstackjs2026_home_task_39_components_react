type StatelessMessageProps = {
  title: string;
  text: string;
};

export const StatelessMessage = ({
  title,
  text,
}: StatelessMessageProps) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};
