import type { Meta, StoryObj } from '@storybook/angular'

import { RegistrationFormComponent } from '@vet-client/lib-form'
import { StorybookUtilsService } from '../utils/storybook-utils.service'

const meta: Meta<RegistrationFormComponent> = {
  component: RegistrationFormComponent,
  title: 'Form/Registration',
  ...StorybookUtilsService.getProviders(),
}
export default meta
type Story = StoryObj<RegistrationFormComponent>

export const Default: Story = {}
