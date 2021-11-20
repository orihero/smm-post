import React from 'react'
import { Buttons } from './PrimaryButton.style'


export default function PrimaryButton ({ text = "", primary = false, active = false, children,onClick }) {
    return (
        <Buttons active={active} primary={primary} onClick={onClick}>
            {text || children}
        </Buttons>
    )
}