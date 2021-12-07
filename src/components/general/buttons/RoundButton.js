import React from "react";
import { Container } from "./RoundButton.style";

export default function RoundButton({
  text = "",
  primary = false,
  active = false,
  children,
  onClick = () => { },
}) {
  return (
    <Container active={active} primary={primary} onClick={onClick}>
      {text || children}
    </Container>
  );
}
