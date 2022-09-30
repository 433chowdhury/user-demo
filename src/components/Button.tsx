import React from "react";

type Props = { icon?: string } & React.HTMLAttributes<HTMLButtonElement>;

function Button({ children, className, icon, ...rest }: Props) {
  return (
    <button
      {...rest}
      className={`py-3 px-12 rounded-md bg-neutral-100 shadow-lg active:bg-neutral-200/60 ${className}`}
    >
      {children}
      {icon && (
        <img src={icon} alt="refresh" className="h-4 w-4 inline ml-4 mb-1" />
      )}
    </button>
  );
}

export default Button;
