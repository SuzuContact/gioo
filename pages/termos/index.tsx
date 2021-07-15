import React from "react";

export default function Termos({ pdfUrl }: { pdfUrl: string }) {
  return (
    <div style={{ margin: "0px auto", width: "100%" }}>
      <embed
        style={{ height: "calc(100vh - 60px)" }}
        width="99%"
        src={pdfUrl}
        type="application/pdf"
      />
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      pdfUrl: process.env.PDF_URL,
    },
  };
}
