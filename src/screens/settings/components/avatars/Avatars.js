import React from 'react'
import { AvatarImg, AvatarsContainer, AvatarSecondImg } from './Avatars.styles'

function Avatars({ images = [] }) {
    return (
        <AvatarsContainer>
            {images.map((e, i) => {
                return <AvatarImg max={images.length} index={images.length - i} src={e} />
            })}
        </AvatarsContainer>
    )
}

export default Avatars
