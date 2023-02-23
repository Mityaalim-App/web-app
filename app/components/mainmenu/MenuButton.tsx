interface IMenuButton {
  text: string;
}

export function MenuButton({ text }: IMenuButton) {
  return <div className="text-lg font-semibold">{text}</div>;
}
