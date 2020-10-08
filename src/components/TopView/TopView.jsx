import React from 'react'
import { StyledComponent } from "./TopView.styled"

function TopView({
  title,
  subtitle,
  img,
}) {
  return (
    <StyledComponent>
      <div className="top-view-text">
        {title && <h2>{title}</h2>}
        {subtitle && <h3>{subtitle}</h3>}
      </div>
      <img src={img} />
    </StyledComponent>
  );
}

export default TopView;
