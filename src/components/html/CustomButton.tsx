type ButtonProps = {
  variant: "primary" | "secondary";
  // restringir que children sea solo string
  children: string;
} & Omit<React.ComponentProps<"button">, "children">;
// Omit nos sirve para que podamos tener el type de React.ComponentProps<"button">
// pero que omita children, para que en este caso sea solo string

export const CustomButton = ({ variant, children, ...rest }: ButtonProps) => {
  return (
    <button className={`class-with-${variant}`} {...rest}>
      {children}
    </button>
  );
};
