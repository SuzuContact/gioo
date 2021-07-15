import { motion } from "framer-motion";
import styled from "styled-components";

export const HomeContainer = styled(motion.div)`
  padding-bottom: 100px;
  scroll-behavior: smooth;

  @media only screen and (max-width: 1366px) {
    padding: 0px 50px;
  }

  @media only screen and (max-width: 1000px) {
    padding: 0px 30px;
  }

  .header {
    height: calc(100vh - 60px);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;

    .arrow-down {
      position: absolute;
      bottom: 20px;
      width: 32px;
      cursor: pointer;
    }
    .pfp {
      background: linear-gradient(
          0deg,
          rgba(255, 255, 255, 0.1),
          rgba(255, 255, 255, 0.1)
        ),
        url(image.png);
      background-blend-mode: normal, luminosity;
      opacity: 0.3;

      position: absolute;
      height: 25vw;
      min-height: 250px;
      top: 150px;
      right: 20%;
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
      font-size: clamp(42px, 6vw, 72px);
      line-height: 85px;

      @media only screen and (max-width: 1000px) {
        padding: 0px 15px;
      }

      /* #FF595D */

      color: #f26f71;
      padding: 0px 15px;
    }

    p {
      z-index: 2;
      font-family: Rubik;
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      font-size: clamp(18px, 2vw, 24px);
      line-height: 28px;

      color: #000000;
      text-align: center;
    }
  }

  .content {
    h2 {
      color: #f26f71;
      font-family: Rubik;
      font-style: normal;
      font-weight: bold;
      padding: 0px;
      margin: 0px;
      margin-bottom: 30px;
      font-size: 32px;
    }
    max-width: 1366px;
    margin: 0px auto;
    /* background: white; */
    border-radius: 60px;
    /* padding: 60px; */

    .social-media {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 100px;

      @media only screen and (max-width: 1000px) {
        flex-direction: column;
        gap: 30px;
      }

      .item {
        @media only screen and (max-width: 1000px) {
          width: 100%;
        }
        height: 250px;
        width: 250px;
        border-radius: 30px;
        border: 1px solid ${(props) => props.theme.palette.second};
        display: flex;
        align-items: center;
        justify-content: center;

        font-family: Rubik;
        font-style: normal;
        font-weight: 500;
        font-size: 32px;
        position: relative;
        background: white;
        transition: all 0.2s ease-in-out;

        cursor: pointer;

        :hover {
          background: #f1f1f1;
          ::before {
            top: 0px;
            bottom: 0px;
            left: 0px;
            right: 0px;
          }
        }

        ::before {
          transition: all 0.2s ease-in-out;
          content: "";

          position: absolute;
          top: 5px;
          bottom: -5px;
          left: 5px;
          right: -5px;

          border-radius: 30px;
          background: ${(props) => props.theme.palette.second};
          z-index: -1;
        }
      }
    }
  }
`;
