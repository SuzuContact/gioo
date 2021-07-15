import styled from "styled-components";

export const Icon = styled.div`
  position: absolute;
  color: white;
  top: 50%;
  transform: translateY(-50%);
  padding: 12px;
  border-radius: 22px;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    background: rgba(255, 255, 255, 0.5);
  }
`;
export const IconRight = styled(Icon)`
  right: 0px;
`;

export const IconLeft = styled(Icon)`
  left: 0px;
`;

export const IconClose = styled(Icon)`
  top: 22px;
  right: 0px;
`;

export const ModalArtistContainer = styled.div`
  position: fixed;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 100vw;
  height: 100vh;
  z-index: 99;

  h1 {
    letter-spacing: 2px;
    color: white;
    position: fixed;
    top: 40px;
    left: 40px;

    font-size: 62px;
    z-index: 9999;
    padding: 10px 10px;
    background: rgba(0, 0, 0, 0.2);
    cursor: pointer;
    margin: 0px;
    :hover {
      background: rgba(0, 0, 0, 0.5);
    }
  }

  .closeI {
    position: fixed;
    top: 40px;
    right: 40px;
    padding: 10px;
    cursor: pointer;
    z-index: 9999;
    border-radius: 50%;
    color: white;

    :hover {
      background: rgba(255, 255, 255, 0.2);
    }
  }
`;
