import Image from "next/image";
import Button from "../components/Button";
import TextContainer from "../components/TextContainer";

interface IImage {
  src: string;
  className: string;
}

interface IIntroSectionsProps {
  image: IImage;
  text: string;
  title: string;
  onClick: () => void;
  isMale: boolean;
}

function IntroSection({
  image,
  title,
  text,
  onClick,
  isMale,
}: IIntroSectionsProps) {
  return (
    <section>
      <Image
        alt=""
        {...image}
        src={`/images/${image.src}`}
        width={200}
        height={200}
      />
      <div className="flex flex-col gap-y-11">
        <TextContainer title={title} text={text} />
        <div
          className={`${
            isMale ? "flex flex-row-reverse" : "flex"
          } items-center justify-center gap-x-2`}
          onClick={onClick}
        >
          <span className="w-8 h-2.5 bg-green-primary rounded-3xl" />
          <span className="h-2.5 w-2.5 border-solid border-2 border-green-light rounded-3xl " />
        </div>
        <div className="w-full">
          <Button href="/personal-info">המשך</Button>
        </div>
      </div>
    </section>
  );
}

export default IntroSection;
