import React from 'react'
import { StyledComponent } from "./SectionTitle.styled"

function SectionTitle({
  title,
}) {
  return (
    <StyledComponent>
      {title}
    </StyledComponent>
  );
}

export default SectionTitle;
