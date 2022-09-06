import React from "react";
import { AccordionItem } from "./AccordionItem";

interface AccordionProps {
  defaultIndex: string;
  onItemClick: (itemIndex: string) => void;
  children: any;
}

const Accordion = ({ defaultIndex, onItemClick, children }: AccordionProps) => {
  const [bindIndex, setBindIndex] = React.useState<string>(defaultIndex);

  const changeItem = (itemIndex: string) => {
    if (typeof onItemClick === "function") onItemClick(itemIndex);
    if (itemIndex !== bindIndex) setBindIndex(itemIndex);
  };
  const items = children.filter(
    (item: any) => item.type.name === "AccordionItem"
  );

  return (
    <>
      {items.map(({ props }: any) => (
        <AccordionItem
          isCollapsed={bindIndex !== props.index}
          label={props.label}
          handleClick={() => changeItem(props.index)}
          children={props.children}
          index={props.index}
        />
      ))}
    </>
  );
};

export { Accordion };
