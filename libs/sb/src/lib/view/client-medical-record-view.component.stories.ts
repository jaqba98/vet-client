import type { Meta, StoryObj } from '@storybook/angular';

import { ClientMedicalRecordViewComponent } from '@vet-client/lib-view';
import { StorybookUtilsService } from '../utils/storybook-utils.service';

const meta: Meta<ClientMedicalRecordViewComponent> = {
  component: ClientMedicalRecordViewComponent,
  title: 'View/ClientMedicalRecord',
  ...StorybookUtilsService.getProviders()
};
export default meta;
type Story = StoryObj<ClientMedicalRecordViewComponent>;

export const Default: Story = {};
