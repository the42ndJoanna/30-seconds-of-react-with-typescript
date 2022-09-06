import "./AccordionItemStyle.css";

export interface AccordionItemProps {
  label: string;
  isCollapsed?: boolean;
  handleClick?: () => void;
  children: any;
  index: string;
}

const AccordionItem = ({
  label,
  isCollapsed,
  handleClick,
  children,
}: AccordionItemProps) => {
  return (
    <>
      <button className="accordion-button" onClick={handleClick}>
        {label}
      </button>
      <div
        className={`accordion-item ${isCollapsed ? "collapsed" : "expanded"}`}
        aria-expanded={isCollapsed}
      >
        {children}
      </div>
    </>
  );
};

export { AccordionItem };
