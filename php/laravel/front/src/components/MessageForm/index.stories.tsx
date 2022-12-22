import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { MessageForm } from '.'

const Meta: ComponentMeta<typeof MessageForm> = {
  title: 'MessageForm',
  component: MessageForm,
  parameters: {
    docs: {
      description: {
        component: 'MessageFormコンポーネント',
      },
    },
  },
}

export default Meta

export const Default: ComponentStoryObj<typeof MessageForm> = {
  args: {},
}
