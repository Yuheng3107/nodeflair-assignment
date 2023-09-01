export default function Button({
  children,
  className,
}: {
  children: any;
  className: string;
}) {
  return (
    <button className={`rounded-lg py-1 px-2 font-bold ` + className}>
      {children}
    </button>
  );
}
