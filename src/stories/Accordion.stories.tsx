import { ComponentMeta } from "@storybook/react";
import { Accordion } from "../snippets/Accordion/Accordion";
import { AccordionItem } from "../snippets/Accordion/AccordionItem";

export default {
  title: "Accordion",
  component: Accordion,
  subcomponents: { AccordionItem },
} as ComponentMeta<typeof Accordion>;

export const AccordionStory = () => {
  return (
    <Accordion defaultIndex="1" onItemClick={console.log}>
      <AccordionItem label="A" index="1">
        Lorem ipsum
      </AccordionItem>
      <AccordionItem label="B" index="2">
        Dolor sit amet
      </AccordionItem>
    </Accordion>
  );
};
