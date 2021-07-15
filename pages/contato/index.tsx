import React from "react";
import dynamic from "next/dynamic";

const ContatoPage = dynamic(() => import("../../src/contato/ContatoPage"), {
  ssr: false,
});

export default function Contato() {
  return <ContatoPage />;
}
