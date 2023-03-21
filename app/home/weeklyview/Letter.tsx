interface ILetterProps {
  letter: string;
  style: string;
}

export default function Letter({ letter, style }: ILetterProps) {
  return (
    <span className={`flex items-center justify-center h-8 w-8 ${style}`}>
      {letter}
    </span>
  );
}
