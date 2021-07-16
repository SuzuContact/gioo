import { motion } from "framer-motion";
import styled from "styled-components";

export const CommissionsContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;

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
    background: linear-gradient(
        -270deg,
        rgba(255, 255, 255, 0.32),
        rgba(255, 255, 255, 0.82),
        rgba(255, 255, 255, 1)
      ),
      url("/images/SEMFUNDO_1.png");
    background-size: cover;
    background-position: center;
  }
  .section-rigging {
    background: #f1f2ff;
  }

  .section-model {
    background: #f1fffd;
  }
  .section-footer {
    background: #b6b9e9;
  }

  .tab-content-item {
    @media only screen and (max-width: 1000px) {
      flex-direction: column-reverse;
      align-items: flex-start;
      padding: 15px !important;
      /* justify-content: s-start; */
    }
  }

  ul {
    padding: 0px;
    margin: 0px;

    @media only screen and (max-width: 1000px) {
      align-self: flex-start;
    }
    li {
      list-style: none;

      display: flex;
      gap: 15px;
      align-items: center;
      font-size: 16px;

      .icon {
        font-size: inherit;
        display: block;
        height: 100%;
        width: 100%;
        margin: auto;

        color: #3d754c;
      }
    }
  }

  h1 {
    font-family: Rubik;
    font-style: normal;
    font-weight: bold;
    font-size: clamp(42px, 6vw, 72px);
    line-height: 85px;
    text-align: right;

    color: black;
    @media only screen and (max-width: 800px) {
      margin: 0px;
    }
  }

  .title-add {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media only screen and (max-width: 800px) {
      flex-direction: column-reverse;
      align-items: flex-end;
    }

    .extra-add {
      flex: 1;

      font-size: 18px;
      color: #363636;
    }

    h3 {
      flex: 1;
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
        @media only screen and (max-width: 800px) {
          margin-left: -15px;
          margin-right: -15px;
        }
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
          overflow: hidden;
          display: flex;

          .tabTitle {
            font-weight: 300;

            min-width: 150px;
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
      background-color: white;
      object-fit: cover;
      object-position: top center;

      max-height: 500px;
      min-height: 500px;
      max-width: 500px;
      flex-grow: 1;
      flex: 1;

      @media only screen and (max-width: 1366px) {
        max-height: 350px;
        min-height: 350px;

        max-width: 100%;
      }

      filter: drop-shadow(4px 4px 16px rgba(0, 0, 0, 0.1));
    }
  }

  .additional {
    margin-top: 30px;
    .tags {
      /* overflow: auto; */
      /* display: flex; */
      /* flex-wrap: wrap; */
      /* max-height: 100vh; */
      /* flex-direction: column; */

      display: grid;
      grid-template-columns: repeat(3, minmax(30%, 1fr));
      @media only screen and (max-width: 1200px) {
        grid-column-gap: 30px;
        grid-template-columns: repeat(2, minmax(calc(50% - 30px), 1fr));
      }

      @media only screen and (max-width: 700px) {
        grid-template-columns: repeat(1, minmax(100%, 1fr));
      }
      justify-content: space-around;
      align-content: space-around;
      padding: 30px 0px;
      width: 100%;

      /* gap: 40px; */
      grid-column-gap: 60px;
      grid-row-gap: 30px;

      .tag {
        filter: drop-shadow(2px 2px 8px rgba(0, 0, 0, 0.1));
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;

        background: white;
        height: 250px;
        /* width: 280px; */
        border-radius: 10px;
        /* border: 1px dashed #85adeb; */

        .title-tag {
          /* padding: 0px 30px; */
          font-style: normal;
          font-weight: bold;
          font-size: 22px;
          line-height: 31px;
          text-align: center;
        }

        .price-tag {
          font-family: Rubik;
          font-style: normal;
          font-weight: 500;
          font-size: 42px;
          line-height: 50px;

          color: #f26f71;
        }

        .extra-tag {
          padding: 0px 30px;
          font-style: normal;
          font-weight: lighter;
          font-size: 16px;
          line-height: 20px;
          text-align: center;
        }
      }
    }
  }

  footer {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    @media only screen and (max-width: 800px) {
      flex-direction: column;
    }

    button {
      margin: 50px 0px;
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
