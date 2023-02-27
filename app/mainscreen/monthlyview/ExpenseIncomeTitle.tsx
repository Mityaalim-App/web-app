import PageTitle from "../../components/PageTitle";

interface IExpenseIncomeTitle {
  title: string;
  amount: number;
}

export default function ExpenseIncomeTitle({
  title,
  amount,
}: IExpenseIncomeTitle) {
  return (
    <div className="flex items-center gap-x-1">
      <p>{title}</p>
      <span className="flex items-center">
        <PageTitle className="text-xl font-bold">{amount + ""}</PageTitle>₪
      </span>
    </div>
  );
}
