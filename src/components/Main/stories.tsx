import { Story, Meta } from '@storybook/react/types-6-0';
import Main from '.';

export default {
  title: 'Main',
  component: Main,
  // You can use as default for every component:
  // args: {
  //   title: 'Default title',
  //   description: 'Default description',
  // }
} as Meta;

export const Basic: Story = (args) => <Main {...args} />;
export const Default: Story = (args) => <Main {...args} />;

Default.args = {
  title: 'Default title',
  description: 'Default description',
};
