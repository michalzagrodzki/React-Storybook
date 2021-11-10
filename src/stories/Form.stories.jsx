import React from 'react';
import { Form, Button, Input } from "react-components";

export default {
  title: 'Example/Form',
  component: Form,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Form {...args}><Input label="username"/><Button label="Submit" /></Form>;

export const Default = Template.bind({});
Default.args = {
  title: "Example form",
  style: ""
};
