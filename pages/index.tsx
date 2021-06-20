import { useRouter } from "next/router";
import React from "react";
import { HomeContainer } from "../src/home";

export default function Home() {
  const { push } = useRouter();

  const redirect = () => {
    push("/commissions");
  };

  return (
    <HomeContainer>
      <div className="header">
        <img src="/header.png" alt="" />
        <h1>Suzume Gio</h1>
        <p>My name is Suzume Gio and I'm a Vtuber, Artist and Rigger.</p>
      </div>
      <div className="content">
        <iframe
          style={{ width: "100%", height: "75vh" }}
          src="https://trello.com/b/gOkXVD0Z.html"
        ></iframe>
      </div>
    </HomeContainer>
  );
}
