import React from 'react'
import { PlansButtonContainer } from './PlansButton.style'

function PlansButton({ text = "", primary = false, active = false, children }) {
    return (
        <PlansButtonContainer active={active} primary={primary} >
            {text || children}
        </PlansButtonContainer>
    )
}

export default PlansButton
