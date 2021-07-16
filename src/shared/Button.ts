import { motion } from "framer-motion";
import styled from "styled-components";

export const Button = styled(motion.button)`
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
`;
