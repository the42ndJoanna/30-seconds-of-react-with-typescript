import { ComponentMeta } from "@storybook/react";
import ControlledInputForm from "../snippets/intermediate/ControlledInput/ControlledInputForm";

export default {
  title: "Intermediate/ControlledInput",
  component: ControlledInputForm,
} as ComponentMeta<typeof ControlledInputForm>;

export const AccordionStory = () => {
  return <ControlledInputForm />;
};
