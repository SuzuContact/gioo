import React, { useState } from "react";
import { Grid, TextField } from "@material-ui/core";
import { ContatoContainer } from "./styles";
import { motion } from "framer-motion";

import emailjs from "emailjs-com";

export default function ContatoPage() {
  const [success, setSuccess] = useState(false);

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fn8g7gj",
        "template_gzese6q",
        e.target,
        "user_pmYRF2IiMgo3UnQAGAvp6"
      )
      .then(
        (result) => {
          setSuccess(true);
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <ContatoContainer>
      {success ? (
        <h1>Enviado com sucesso!</h1>
      ) : (
        <>
          <h1>Contato</h1>
          <motion.form
            action=""
            initial={{
              y: 20,
              opacity: 0,
              rotate: "15deg",
            }}
            animate={{
              opacity: 1,
              y: 0,
              rotate: "0deg",
            }}
            transition={{
              delay: 0.35,
            }}
            onSubmit={sendEmail}
            autoComplete="off"
          >
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <TextField
                  variant="filled"
                  fullWidth
                  id="standard-basic"
                  label="Nome"
                  name="Nome"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="filled"
                  fullWidth
                  id="standard-basic"
                  label="Discord"
                  name="Discord"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="filled"
                  fullWidth
                  id="standard-basic"
                  label="Twitter"
                  name="Twitter"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="standard-basic"
                  multiline={true}
                  rows={6}
                  label="Mensagem"
                  name="Mensagem"
                  variant="filled"
                />
              </Grid>
            </Grid>
            <motion.button
              type="submit"
              whileHover={{
                y: -10,
                filter: "hue-rotate(-20deg)",
              }}
              whileTap={{
                scale: 0.9,
              }}
            >
              Enviar
            </motion.button>
          </motion.form>
        </>
      )}
    </ContatoContainer>
  );
}
