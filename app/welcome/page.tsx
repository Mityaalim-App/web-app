import Image from "next/image";
import Button from "../components/Button";
import PageTitle from "../components/PageTitle";

export default function Welcome() {
  return (
    <div className="h-full flex flex-col items-center justify-center px-5 pt-5 pb-10 w-full">
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

      <div className="bg-green-light flex flex-col items-center justify-center w-full h-[320px] -mt-10 rounded-3xl">
        <PageTitle className="text-2xl">איזה כיף שהצטרפת אלינו!</PageTitle>
        <p className="mt-1">ביחד נצליח להתייעל כלכלית </p>
      </div>

      <div className="w-full mt-10">
        <Button href="/personal-info">המשך</Button>
      </div>
    </div>
  );
}
