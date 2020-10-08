import styled from 'styled-components';
const mq = "@media (min-width:700px)";

export const StyledComponent = styled.div`
  ${mq} {
    display: none;
  }
  div {
    position: Fixed;
    /* top: 12px; */
    bottom: 12px;
    right: 16px;
    z-index: 10;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: auto;
    height: 46px;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;

    span {
      width: 44px;
      height: 4px;
      background: #444;
      border-radius: 10px;
      transition: all 0.3s linear;
      position: relative;
      transform-origin: 1px;

      :first-child {
        transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
      }

      :nth-child(2) {
        opacity: ${({ open }) => open ? '0' : '1'};
        transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
      }

      :nth-child(3) {
        transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
      }
    }
  }
  .overlay {
    background-color: #000;
    opacity: 0;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 5;
    transition: all 0.6s;
    visibility: ${({ open }) => open ? "" : "hidden"};
  }
`;
