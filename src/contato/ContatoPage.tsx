import React, { useState } from "react";
import { Box, CircularProgress, Grid, TextField } from "@material-ui/core";
import { ContatoContainer } from "./styles";
import { motion } from "framer-motion";

import { BiCheck } from "react-icons/bi";

import emailjs from "emailjs-com";

export default function ContatoPage() {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  function sendEmail(e) {
    e.preventDefault();
    setLoading(true);

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
          setSuccess(false);
          console.log(error.text);
        }
      )
      .catch(() => setSuccess(false))
      .finally(() => setLoading(false));
  }

  if (success) {
    return (
      <ContatoContainer>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="100%"
          flexDirection="column"
          p={3}
        >
          <BiCheck size={42} color="#3d754c" />
          <h2>Sent with success!</h2>
        </Box>
      </ContatoContainer>
    );
  }

  if (loading) {
    return (
      <ContatoContainer>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="100%"
          flexDirection="column"
          p={3}
        >
          <CircularProgress />
          <br />
          <span>Sending...</span>
        </Box>
      </ContatoContainer>
    );
  }

  return (
    <ContatoContainer>
      <>
        <h1>Contact</h1>
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
                label="Name"
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
                label="Message"
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
            Send
          </motion.button>
        </motion.form>
      </>
    </ContatoContainer>
  );
}
