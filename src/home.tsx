import { motion } from "framer-motion";
import styled from "styled-components";

export const HomeContainer = styled(motion.div)`
  scroll-behavior: smooth;

  section {
    padding: 50px 0px;
  }

  .section-content {
    max-width: 1366px;
    /* width: 100%; */
    margin: 0px auto;
    padding: 50px 0px;

    @media only screen and (max-width: 1366px) {
      padding: 0px 50px;
    }

    @media only screen and (max-width: 900px) {
      padding: 0px 30px;
    }
  }

  .section-header {
    background: #f1f2ff;
  }

  .section-social {
    background: #f1fffd;
  }

  .section-trello {
    background: #f1f2ff;
  }

  .header {
    height: calc(100vh - 100px - 50px);
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    position: relative;
    padding-left: 100px;
    gap: 10px;

    @media only screen and (max-width: 1000px) {
      align-items: center;
      padding-left: 0px;
    }

    button {
      max-width: 30%;
      z-index: 3;
      margin-top: 150px;

      @media only screen and (max-width: 1300px) {
        margin: 30px 0px;
        max-width: 40%;
      }

      @media only screen and (max-width: 1000px) {
        margin: 30px 0px;
        max-width: 80%;
      }
    }

    .arrow-down {
      position: absolute;
      bottom: 20px;
      width: 32px;
      cursor: pointer;
      align-self: center;
      justify-self: center;
    }
    .pfp {
      background-blend-mode: normal, luminosity;
      opacity: 0.5;

      position: absolute;
      max-width: 60%;
      max-height: calc(100% + 100px);
      right: 0px;
      /* top: 0px;
      bottom: 0px;
      right: 0px; */
    }
    h1 {
      z-index: 2;
      padding: 0px;
      margin: 0px;
      color: ${(props) => props.theme.palette.main};
      font-family: Rubik;
      font-style: normal;
      font-weight: bold;
      font-size: clamp(42px, 6vw, 72px);
      line-height: 85px;

      /* #FF595D */
    }

    p {
      max-width: 400px;
      text-align: left;
      z-index: 2;
      font-family: Rubik;
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      font-size: clamp(18px, 2vw, 24px);
      line-height: 28px;

      color: #363636;
    }
  }

  .section-content {
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

    .social-media {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 30px;

      @media only screen and (max-width: 1000px) {
        flex-direction: column;
      }

      .item {
        @media only screen and (max-width: 1000px) {
          width: 100%;
        }
        min-height: 200px;
        flex: 1;
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
        }
      }
    }
  }
`;
