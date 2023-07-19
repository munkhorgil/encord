import React, { ComponentProps, PropsWithChildren } from "react";

type TableProps = PropsWithChildren & ComponentProps<"table">;

const Table = ({ children, ...props }: TableProps) => {
  return (
    <table
      className="min-w-full bg-white border border-gray-200 rounded-2xl"
      {...props}
    >
      {children}
    </table>
  );
};

const THead = ({ children }: PropsWithChildren) => <thead>{children}</thead>;
const TBody = ({ children }: PropsWithChildren) => <tbody>{children}</tbody>;
const Tr = ({ children }: PropsWithChildren) => <tr>{children}</tr>;
const Th = ({ children }: PropsWithChildren) => (
  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
    {children}
  </th>
);
const Td = ({ children }: PropsWithChildren) => (
  <td className="px-6 py-4 whitespace-nowrap">{children}</td>
);

Table.THead = THead;
Table.TBody = TBody;
Table.Th = Th;
Table.Tr = Tr;
Table.Td = Td;

export default Table;
