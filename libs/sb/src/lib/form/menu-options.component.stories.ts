import type { Meta, StoryObj } from '@storybook/angular';

import { MenuOptionsFormComponent } from '@vet-client/lib-form';
import { StorybookUtilsService } from '../utils/storybook-utils.service';

const meta: Meta<MenuOptionsFormComponent> = {
  component: MenuOptionsFormComponent,
  title: 'Form/MenuOptions',
  ...StorybookUtilsService.getFormConfiguration()
};
export default meta;
type Story = StoryObj<MenuOptionsFormComponent>;

export const Default: Story = {};

export const FlexDirectionColumn: Story = {
  args: {
    flexDirectionColumn: true
  }
};
