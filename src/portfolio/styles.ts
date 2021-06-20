import { motion } from "framer-motion";
import styled from "styled-components";

export const PortfolioContainer = styled(motion.div)`
  max-width: 1366px;
  min-height: 100vh;
  margin: 0px auto;

  padding: 50px;

  display: grid;

  grid-template-columns: repeat(3, minmax(auto, 28.5rem));
  grid-auto-rows: 1fr;
  grid-auto-flow: dense;
  gap: 60px;

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

  .img-cont {
    overflow: hidden;
    position: relative;

    .info {
      pointer-events: none;
      position: absolute;
      bottom: 10px;
      left: 10px;
      right: 10px;
      background: #85adeb;

      height: 40px;
      border-radius: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
    }
  }

  .img {
    width: 100%;
    height: auto;
    box-sizing: border-box;
    overflow: hidden;

    position: relative;
    cursor: pointer;

    background-position: top;
    background-size: cover;
    border-radius: 30px;
    background-color: #85adeb;
    background-repeat: no-repeat;

    &::before {
      content: "";
      /* height: 100px; */
      padding-top: 100%; // This is rl cool
      display: block;
    }
  }
`;
