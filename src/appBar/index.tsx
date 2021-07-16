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
          <div onClick={() => history.push("/termos")} className="item">
            Terms
          </div>
          <div onClick={() => history.push("/portfolio")} className="item">
            Gallery
          </div>
          <div onClick={() => history.push("/contato")} className="item">
            Contact
          </div>
          <div onClick={() => history.push("/commissions")} className="item">
            Commission
          </div>
        </div>
      </div>
    </AppBarContainer>
  );
}
