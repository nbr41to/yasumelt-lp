import React from 'react'
import { StyledComponent } from "./Section.styled"

function Section({
  title,
  subtitle,
  children,
  imgComp,
  imgRight = false,
  imgCircle = false,
}) {
  return (
    <StyledComponent imgRight={imgRight} imgCircle={imgCircle}>
      <img src={imgComp} />
      <div className="text-box">
        {title && <h2>{title}</h2>}
        {subtitle && <h3>{subtitle}</h3>}
        {children}
      </div>
    </StyledComponent>
  );
}

export default Section;
