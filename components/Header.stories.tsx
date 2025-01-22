import React from "react"
import type { Story, Meta } from "@storybook/react"
import Header from "../../app/components/Header"

export default {
  title: "Components/Header",
  component: Header,
} as Meta

const Template: Story = (args) => <Header {...args} />

export const Default = Template.bind({})
Default.args = {}

