import { motion } from "framer-motion";
import styled from "styled-components";

export const HomeContainer = styled(motion.div)`
  margin-bottom: 100px;
  .header {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    img {
      background: linear-gradient(
          0deg,
          rgba(255, 255, 255, 0.1),
          rgba(255, 255, 255, 0.1)
        ),
        url(image.png);
      background-blend-mode: normal, luminosity;
      opacity: 0.3;

      position: absolute;
      top: 150px;
      right: 300px;
    }
    h1 {
      background: #e3eeff;
      border-radius: 10px;
      z-index: 2;
      padding: 0px;
      margin: 0px;
      color: #f26f71;
      font-family: Rubik;
      font-style: normal;
      font-weight: bold;
      font-size: 72px;
      line-height: 85px;

      /* #FF595D */

      color: #f26f71;
      padding: 15px;
    }

    p {
      z-index: 2;
      font-family: Rubik;
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      line-height: 28px;

      color: #000000;
    }
  }

  .content {
    max-width: 1366px;
    margin: 0px auto;
    background: white;
    border-radius: 60px;
    padding: 60px;
  }
`;
