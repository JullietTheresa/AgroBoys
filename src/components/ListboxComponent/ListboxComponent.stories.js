import { ListboxComponent } from ".";

export default {
  title: "Components/ListboxComponent",
  component: ListboxComponent,
  argTypes: {
    property1: {
      options: ["default", "variant-5", "variant-2", "variant-4", "variant-8", "variant-7", "variant-6"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "default",
    className: {},
    chevronClassName: {},
  },
};
