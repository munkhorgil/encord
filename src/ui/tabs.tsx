import { PropsWithChildren } from "react";
import classNames from "classnames";

type TabProps = PropsWithChildren;

type ItemProps = PropsWithChildren<{
  isActive?: boolean;
  onClick: () => void;
}>;

const Tabs = ({ children }: TabProps) => {
  return <div className="flex justify-center mb-6 bg-gray-100">{children}</div>;
};

const Item = ({ isActive = false, children, onClick }: ItemProps) => {
  const btnClass = classNames("p-4 capitalize", {
    "border-b-primary border-b-2": isActive,
  });

  return (
    <button className={btnClass} onClick={onClick}>
      {children}
    </button>
  );
};

Tabs.Item = Item;

export default Tabs;
