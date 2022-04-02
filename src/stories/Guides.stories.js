import Guides from "../pages/Guides";

export default {
  title: "Components/Guides",
  component: Guides,
  argTypes: {},
};

const Template = (args) => <Guides {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
