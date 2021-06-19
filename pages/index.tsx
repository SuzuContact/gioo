import React from "react";
import { useRouter } from "next/router";
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
        <h2 onClick={redirect}>Title</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
          exercitationem perferendis natus aut aliquid quisquam quo non earum
          totam tempore eaque sed officiis at laborum vel ea ipsam laboriosam
          architecto iure sequi soluta sapiente! Quis alias quibusdam laborum
          maxime in suscipit facilis eligendi totam modi nesciunt a autem odit,
          labore maiores consequuntur incidunt aliquam provident mollitia.
          Itaque nisi cupiditate repellendus ratione quia? Consequatur nihil
          recusandae nesciunt inventore perferendis ea placeat? Corporis maiores
          fugiat cum iste eum ipsum sequi vitae sit. Magni architecto earum
          rerum est cumque, hic minima blanditiis! Corporis deserunt quaerat ex
          hic magnam, sapiente non laborum debitis aliquid.
        </p>
        <br />
        <br />
        <h2>Title</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
          exercitationem perferendis natus aut aliquid quisquam quo non earum
          totam tempore eaque sed officiis at laborum vel ea ipsam laboriosam
          architecto iure sequi soluta sapiente! Quis alias quibusdam laborum
          maxime in suscipit facilis eligendi totam modi nesciunt a autem odit,
          labore maiores consequuntur incidunt aliquam provident mollitia.
          Itaque nisi cupiditate repellendus ratione quia? Consequatur nihil
          recusandae nesciunt inventore perferendis ea placeat? Corporis maiores
          fugiat cum iste eum ipsum sequi vitae sit. Magni architecto earum
          rerum est cumque, hic minima blanditiis! Corporis deserunt quaerat ex
          hic magnam, sapiente non laborum debitis aliquid.
        </p>
      </div>
    </HomeContainer>
  );
}
