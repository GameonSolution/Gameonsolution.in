import { twMerge } from "tailwind-merge";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export const Container = ({ children, className }: Props) => {
  return (
    <div
      className={twMerge("mx-auto w-full md:w-[75%] px-6 text-center", className)}
    >
      {children}
    </div>
  );
};
