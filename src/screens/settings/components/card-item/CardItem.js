import React from 'react'
import { Container, DetailsContainer, LeftContainer, SettingsImage, Title, Description,RightContainer } from './CardItem.style'

export default function CardItem({ text = "", image, description = "", children }) {
    return (
        <Container>
            <LeftContainer>
                <SettingsImage src={image} />
                <DetailsContainer>
                    <Title>{text}</Title>
                    <Description>{description}</Description>
                </DetailsContainer>
            </LeftContainer>
            <RightContainer>
                {children}
            </RightContainer>
        </Container>
    )
}
