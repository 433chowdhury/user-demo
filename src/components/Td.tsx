import React from "react";

type Props = {} & React.TdHTMLAttributes<HTMLTableDataCellElement>;

function Td({ children, className, ...rest }: Props) {
  return (
    <td
      {...rest}
      className={`bg-neutral-100/80 group-first:pt-14 group-last:pb-14 group-first:first:rounded-tl-lg group-first:last:rounded-tr-lg group-last:first:rounded-bl-lg group-last:last:rounded-br-lg p-5 text-center ${className}`}
    >
      {children}
    </td>
  );
}

export default Td;
