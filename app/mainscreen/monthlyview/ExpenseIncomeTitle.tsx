import PageTitle from "../../components/PageTitle";

interface IExpenseIncomeTitle {
  title: string;
  amount: number;
  style: string;
}

export default function ExpenseIncomeTitle({
  title,
  amount,
  style,
}: IExpenseIncomeTitle) {
  return (
    <div className="flex items-center gap-x-1">
      <p className="text-green-middle">{title}</p>
      <span className={`flex items-center ${style}`}>
        <PageTitle className="text-xl font-bold">{amount + ""}</PageTitle>₪
      </span>
    </div>
  );
}
