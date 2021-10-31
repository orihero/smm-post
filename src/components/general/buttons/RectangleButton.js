import React from 'react'
import { Buttons, Container } from './RectangleButton.styles'

export default function RectangleButton({ text = "", primary = false, active = false, children }) {
    return (
        <Buttons active={active} primary={primary}>
            {text || children}
        </Buttons>
    )
}
