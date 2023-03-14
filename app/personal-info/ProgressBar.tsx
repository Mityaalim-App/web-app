interface IProgressBarProps {
  step: number;
}
function ProgressBar({ step }: IProgressBarProps) {
  return (
    <div className="progress bg-green-100 flex h-1 rounded-full overflow-hidden mb-5 w-full">
      <span
        className={`flex-1 ${
          step === 1 ? "rounded-l-full bg-green-300" : "bg-green-300"
        }`}
      />
      <span
        className={`flex-1 ${step === 2 ? "rounded-l-full bg-green-300" : ""}
        ${step > 2 ? "bg-green-300" : ""}`}
      />
      <span
        className={`flex-1 ${step === 3 ? "rounded-l-full bg-green-300" : ""}`}
      />
    </div>
  );
}
export default ProgressBar;
