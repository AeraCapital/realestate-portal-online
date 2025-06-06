import {AppHelper} from "@/helpers/appHelper";

export type IButtonVariant =
  | "primary-400"
  | "primary-600"
  | "secondary"
  | "neutral"
  | "danger"
  | "sub-danger"
  | "ghost"
  | "success"
  | "outline";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  isLoading?: boolean;
  variant?: IButtonVariant;
}

const Button = ({children, className, isLoading, variant = "primary-400", ...props}: IProps) => {
  return (
    <button
      disabled={isLoading}
      className={AppHelper.className(
        "btn min-h-0 rounded-0.75rem font-bold font-16",
        {
          "bg-colors-primary-colors-400 text-colors-grey-colors-100 hover:bg-colors-primary-colors-500":
            variant === "primary-400",
          "bg-colors-primary-colors-600 text-colors-grey-colors-100 hover:bg-colors-primary-colors-800":
            variant === "primary-600",
          "bg-colors-grey-colors-1000 text-colors-grey-colors-100 hover:bg-colors-grey-colors-900":
            variant === "secondary",
          "bg-neural-colors-50 text-colors-grey-colors-800 hover:bg-colors-neutral-100":
            variant === "neutral",
          "border border-colors-primary-colors-400 bg-white text-colors-primary-colors-400 hover:bg-colors-primary-colors-50":
            variant === "outline",
        },
        className
      )}
      {...props}
    >
      {children}
      {isLoading && <span className='loading loading-spinner loading-xs'></span>}
    </button>
  );
};

export default Button;
