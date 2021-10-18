import React from 'react'
import { PreviewButton } from '../../screens/new-post/Newpost.styles'
import { Container } from './RoundButton.style'

export default function RoundButton({ text = "", primary = false, active = false }) {
    return (
        <Container active={active} primary={primary}>
            {text}
        </Container>
    )
}
