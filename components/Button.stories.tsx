import React from "react"
import type { Story, Meta } from "@storybook/react"
import { Button, type ButtonProps } from "../../components/ui/button"

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: ["default", "destructive", "outline", "secondary", "ghost", "link"],
      },
    },
    size: {
      control: {
        type: "select",
        options: ["default", "sm", "lg"],
      },
    },
  },
} as Meta

const Template: Story<ButtonProps> = (args) => <Button {...args}>Button</Button>

export const Default = Template.bind({})
Default.args = {}

export const Primary = Template.bind({})
Primary.args = {
  variant: "default",
}

export const Secondary = Template.bind({})
Secondary.args = {
  variant: "secondary",
}

export const Outline = Template.bind({})
Outline.args = {
  variant: "outline",
}

