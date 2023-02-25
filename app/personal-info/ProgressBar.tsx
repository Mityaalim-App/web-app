interface IProgressBarProps {
  step: number;
}
function ProgressBar({ step }: IProgressBarProps) {
  return (
    <div className="progress bg-green-light flex h-1 rounded-full overflow-hidden mb-5 w-full">
      <span
        className={`flex-1 ${
          step === 1 ? "rounded-l-full bg-green-primary" : "bg-green-primary"
        }`}
      />
      <span
        className={`flex-1 ${
          step === 2 ? "rounded-l-full bg-green-primary" : ""
        }
        ${step > 2 ? "bg-green-primary" : ""}`}
      />
      <span
        className={`flex-1 ${
          step === 3 ? "rounded-l-full bg-green-primary" : ""
        }`}
      />
    </div>
  );
}
export default ProgressBar;
