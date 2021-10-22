import React from 'react'
import { Container } from './RoundButton.style'

export default function RoundButton({ text = "", primary = false, active = false, children }) {
    return (
        <Container active={active} primary={primary}>
            {text || children}
        </Container>
    )
}
