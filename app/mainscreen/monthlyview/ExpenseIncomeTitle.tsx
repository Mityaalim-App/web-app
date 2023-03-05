import PageTitle from "../../components/PageTitle";

interface IExpenseIncomeTitle {
  title: string;
  amount: number;
  isIncome: boolean;
}

export default function ExpenseIncomeTitle({
  title,
  amount,
  isIncome,
}: IExpenseIncomeTitle) {
  return (
    <div className="flex items-center gap-x-1">
      <p className="text-green-middle">{title}</p>
      <span
        className="flex items-center"
        style={{ color: isIncome ? "#22AA22" : "#EC7B29" }}
      >
        <PageTitle className="text-xl font-bold">{amount + ""}</PageTitle>₪
      </span>
    </div>
  );
}
