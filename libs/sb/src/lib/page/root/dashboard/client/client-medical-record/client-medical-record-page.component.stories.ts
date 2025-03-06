import type { Meta, StoryObj } from '@storybook/angular';

import { ClientMedicalRecordPageComponent } from '@vet-client/lib-page';
import { StorybookUtilsService } from '../../../../../utils/storybook-utils.service';

const meta: Meta<ClientMedicalRecordPageComponent> = {
  component: ClientMedicalRecordPageComponent,
  title: 'Page/ClientMedicalRecord',
  ...StorybookUtilsService.getFullscreen(),
  ...StorybookUtilsService.getProviders()
};
export default meta;
type Story = StoryObj<ClientMedicalRecordPageComponent>;

export const Default: Story = {};
