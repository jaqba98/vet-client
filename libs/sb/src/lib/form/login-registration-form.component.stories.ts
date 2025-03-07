import type { Meta, StoryObj } from '@storybook/angular'

import { BigLoginRegistrationFormComponent } from '@vet-client/lib-form'
import { StorybookUtilsService } from '../utils/storybook-utils.service'

const meta: Meta<BigLoginRegistrationFormComponent> = {
  component: BigLoginRegistrationFormComponent,
  title: 'Form/LoginRegistration',
  ...StorybookUtilsService.getProviders(),
}
export default meta
type Story = StoryObj<BigLoginRegistrationFormComponent>

export const Default: Story = {}
