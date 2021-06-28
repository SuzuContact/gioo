import { motion } from "framer-motion";
import styled from "styled-components";

export const ContatoContainer = styled(motion.div)`
  max-width: 800px;
  min-height: 100vh;
  margin: 0px auto;
  padding: 50px;
  background: rgba(255, 255, 255, 0.95);

  @media only screen and (max-width: 1400px) {
    padding: 30px 50px;
  }

  @media only screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, minmax(auto, 28.5rem));
    gap: 30px;
    padding: 30px 50px;
  }

  @media only screen and (max-width: 600px) {
    grid-template-columns: repeat(1, minmax(auto, 28.5rem));
    padding: 30px 30px;
    gap: 15px;
  }

  h1 {
    font-family: Rubik;
    font-style: normal;
    font-weight: bold;
    font-size: 62px;
    line-height: 85px;
    text-align: end;

    color: ${(props) => props.theme.palette.main};
  }

  button {
    margin: 50px 0px;

    background: linear-gradient(270deg, #467fd7 0%, #f3575a 100%);
    border-radius: 50px;
    border: none;
    outline: none;
    padding: 10px 20px;
    width: 100%;

    font-family: Rubik;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 2px;
    font-size: 28px;
    line-height: 38px;
    color: #ffffff;

    cursor: pointer;
  }
`;
