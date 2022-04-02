import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Guide } from "../components/Guide";

export default {
  title: "Components/Guide",
  component: Guide,
  argTypes: {},
};

const Template = (args) => <Guide {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  postId: "1",
};
