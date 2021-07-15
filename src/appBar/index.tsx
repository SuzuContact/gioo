import { ButtonBase } from "@material-ui/core";
import { useRouter } from "next/router";
import React from "react";
import { AppBarContainer } from "./styles";

export default function AppBar() {
  const history = useRouter();
  return (
    <AppBarContainer>
      <div className="content">
        <h3 onClick={() => history.push("/")}>Gioo</h3>
        <div className="items">
          <ButtonBase onClick={() => history.push("/termos")} className="item">
            Terms
          </ButtonBase>
          <ButtonBase
            onClick={() => history.push("/portfolio")}
            className="item"
          >
            Gallery
          </ButtonBase>
          <ButtonBase onClick={() => history.push("/contato")} className="item">
            Contact
          </ButtonBase>
          <ButtonBase
            onClick={() => history.push("/commissions")}
            className="item"
          >
            Commission
          </ButtonBase>
        </div>
      </div>
    </AppBarContainer>
  );
}
