import Image from "next/image";
import Button from "../components/Button";
import PageTitle from "../components/PageTitle";

export default function Welcome() {
  return (
    <div className="h-full flex flex-col justify-between px-5 pt-5 w-full">
      <div className="flex flex-col items-center">
        <Image
          src="/images/mityaalim-logo-text.png"
          width={125}
          height={50}
          alt="logo"
        />
        <Image
          src="/images/welcome-iilustration.svg"
          width={262}
          height={282}
          alt="illustration"
          className="mt-5 relative z-10"
        />
        <div className="bg-green-100 flex flex-col items-center justify-center w-full min-h-[200px] h-[30vh] -mt-10 rounded-3xl">
          <PageTitle className="text-2xl">איזה כיף שהצטרפת אלינו!</PageTitle>
          <p className="mt-1 text-gray-400">ביחד נצליח להתייעל כלכלית </p>
        </div>
      </div>

      <div className="w-full mt-20 pb-10">
        <Button href="/personal-info">המשך</Button>
      </div>
    </div>
  );
}
