import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import { Button } from "../Button";

export default function Footer() {
  const { push } = useRouter();

  const redirectContact = () => {
    push("/contato");
  };

  return (
    <FooterContainer>
      <section className="section-footer">
        <footer className="section-content">
          <h3 style={{ textAlign: "center", color: "white" }}>Let's talk?</h3>
          <Button
            onClick={redirectContact}
            whileHover={{
              y: -10,
              filter: "hue-rotate(-20deg)",
            }}
            whileTap={{
              scale: 0.9,
            }}
          >
            make an enquiry
          </Button>
        </footer>
      </section>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
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

  button {
    margin: 50px 0px;
    @media only screen and (max-width: 800px) {
      margin: 30px 0px;
      width: 100%;
    }

    width: 600px;
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

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    @media only screen and (max-width: 800px) {
      flex-direction: column;
    }
  }

  .section-footer {
    background: #b6b9e9;
  }
`;
