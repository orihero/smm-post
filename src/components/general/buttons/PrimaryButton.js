import React from 'react'
import { Buttons } from './PrimaryButton.style'


export default function PrimaryButton ({ text = "", primary = false, active = false, children }) {
    return (
        <Buttons active={active} primary={primary}>
            {text || children}
        </Buttons>
    )
}