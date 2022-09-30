import React from "react";

type Props = {} & React.ThHTMLAttributes<HTMLTableHeaderCellElement>;

function Th({ children, className, ...rest }: Props) {
  return (
    <th
      {...rest}
      className={`bg-neutral-700 text-neutral-100 first:rounded-l-lg last:rounded-r-lg p-5 font-medium ${className}`}
    >
      {children}
    </th>
  );
}

export default Th;
