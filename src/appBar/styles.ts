import { motion } from "framer-motion";
import styled from "styled-components";

export const AppBarContainer = styled(motion.div)`
  height: 50px;
  position: sticky;
  top: 0;
  z-index: 3;

  background: #f1f2ff;

  @media only screen and (max-width: 1400px) {
    padding: 0px 30px;
  }

  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    margin: 0px auto;
    max-width: 1366px;

    h3 {
      cursor: pointer;
    }

    .items {
      display: flex;
      height: 100%;
      .item {
        font-size: 14px;
        margin-left: 5px;
        border-radius: 10px;
        font-weight: 500;
        padding: 0px 20px;
        height: 100%;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${(props) => props.theme.palette.main};

        :hover {
          background: rgba(255, 255, 255, 0.5);
        }
      }
    }
  }
`;
