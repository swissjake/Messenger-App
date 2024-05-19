import { FC } from "react";
import { IconType } from "react-icons";

interface AuthSocialButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: IconType;
}

const AuthSocialButton: FC<AuthSocialButtonProps> = ({
  icon: Icon,
  ...rest
}) => {
  return (
    <button
      className="inline-flex w-full justify-center rounded-md bg-white px-4 py-2 text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0"
      {...rest}
    >
      <Icon />
    </button>
  );
};

export default AuthSocialButton;
