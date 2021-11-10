import React from 'react';
import { Card } from "react-components";

export default {
  title: 'Example/Card',
  component: Card,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Card title",
  body: 'Card body',
  image: "",
  style: ""
};
