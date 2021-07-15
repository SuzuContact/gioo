import { motion } from "framer-motion";
import styled from "styled-components";

export const CommissionsContainer = styled(motion.div)`
  max-width: 1366px;
  margin: 0px auto;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 1366px) {
    padding: 0px 50px;
  }

  @media only screen and (max-width: 900px) {
    padding: 0px 30px;
  }

  h1 {
    font-family: Rubik;
    font-style: normal;
    font-weight: bold;
    font-size: clamp(42px, 6vw, 72px);
    line-height: 85px;
    text-align: right;

    color: ${(props) => props.theme.palette.main};
    @media only screen and (max-width: 800px) {
      margin: 0px;
    }
  }

  h3 {
    font-family: Rubik;
    font-style: normal;
    font-weight: bold;
    font-size: 42px;
    line-height: 50px;
    text-align: right;

    width: 100%;
    justify-self: flex-end;
    color: ${(props) => props.theme.palette.main};
  }

  .show-content {
    display: flex;
    gap: 60px;
    @media only screen and (max-width: 800px) {
      gap: 30px;
    }

    @media only screen and (max-width: 1366px) {
      flex-direction: column-reverse;
    }
    .tabs {
      flex: 2;
      flex-grow: 2;
      margin-top: 30px;
      @media only screen and (max-width: 800px) {
        margin-top: 0px;
      }

      .tabContents {
        background: white;
        padding: 30px;
        border-radius: 30px;
        line-height: 24px;
      }

      .tab-header {
        margin-left: 30px;
        display: flex;
        flex-direction: column;

        .indicator {
          height: 3px;
          width: 150px;
          background: #a0a1f8;
          border-radius: 5px;
        }
        .tabTitles {
          display: flex;

          .tabTitle {
            font-weight: 300;

            width: 150px;
            padding: 15px 0px;
            cursor: pointer;
            border-radius: 10px;
            text-align: center;
            :hover {
              background: rgba(0, 0, 0, 0.05);
            }
          }
          .active {
            font-weight: 500;
          }
        }
      }
    }

    img {
      border-radius: 30px;
      object-fit: cover;

      max-height: 500px;
      min-height: 500px;
      flex-grow: 1;
      flex: 1;

      @media only screen and (max-width: 1366px) {
        max-height: 350px;
        min-height: 350px;
      }

      filter: drop-shadow(4px 4px 16px rgba(0, 0, 0, 0.1));
    }
  }

  .additional {
    margin-top: 30px;
    .tags {
      overflow: auto;
      display: flex;
      flex-wrap: wrap;
      /* max-height: 100vh; */
      /* flex-direction: column; */

      justify-content: space-around;
      align-content: space-around;
      padding: 30px 0px;
      width: 100%;

      gap: 60px;

      .tag {
        @media only screen and (max-width: 1000px) {
          width: 100%;
        }
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;

        background: white;
        height: 250px;
        width: 250px;
        border-radius: 10px;
        border: 1px dashed #85adeb;

        .title-tag {
          font-style: normal;
          font-weight: normal;
          font-size: 26px;
          line-height: 31px;
          text-align: center;
        }

        .price-tag {
          font-family: Rubik;
          font-style: normal;
          font-weight: bold;
          font-size: 42px;
          line-height: 50px;

          color: #f26f71;
        }
      }
    }
  }

  footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media only screen and (max-width: 800px) {
      flex-direction: column;
    }

    button {
      margin: 100px 0px;
      @media only screen and (max-width: 800px) {
        margin: 30px 0px;
        width: 100%;
      }

      background: linear-gradient(270deg, #467fd7 0%, #f3575a 100%);
      border-radius: 50px;
      border: none;
      outline: none;
      padding: 15px 30px;
      width: 600px;

      font-family: Rubik;
      font-style: normal;
      font-weight: 500;
      font-size: 32px;
      line-height: 38px;
      color: #ffffff;

      cursor: pointer;
    }
  }
`;
