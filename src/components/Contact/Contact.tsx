import React, { useReducer, useState, useRef } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
// Components
import { Button, Grid, Box, Typography } from "@mui/material";
// Images
import { map } from "../../assets";
// Icons
import { LineWobble } from "@uiball/loaders";
// Styles
import { Container, ContactForm } from "./Contact.styles";

const nameReducer = (state: any, action: any) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isError: action.val === "" };
  }
  return { value: "", isError: null };
};
const emailReducer = (state: any, action: any) => {
  if (action.type === "USER_INPUT") {
    return {
      value: action.val,
      isError: action.val === "" || !action.val.includes("@"),
    };
  }
  return { value: "", isError: null };
};
const subjectReducer = (state: any, action: any) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isError: action.val === "" };
  }
  return { value: "", isError: null };
};
const messageReducer = (state: any, action: any) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isError: action.val === "" };
  }
  return { value: "", isError: null };
};

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formLoading, setFormLoading] = useState<boolean>(false);
  const [formStatus, setFormStatus] = useState<"error" | "done" | null>(null);

  const [nameState, dispatchName] = useReducer(nameReducer, {
    value: "",
    isError: null,
  });
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isError: null,
  });
  const [subjectState, dispatchSubject] = useReducer(subjectReducer, {
    value: "",
    isError: null,
  });
  const [messageState, dispatchMessage] = useReducer(messageReducer, {
    value: "",
    isError: null,
  });

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setFormLoading(true);
    if (
      !messageState.isError &&
      !subjectState.isError &&
      !emailState.isError &&
      !nameState.isError &&
      form.current
    ) {
      emailjs
        .sendForm(
          process.env.REACT_APP_EMAILJS_SERVICES!,
          process.env.REACT_APP_EMAILJS_TEMPLATE!,
          form.current,
          process.env.REACT_APP_EMAILJS_PUBLIC_KEY!
        )
        .then(
          (result) => {
            messageState.value = "";
            subjectState.value = "";
            emailState.value = "";
            nameState.value = "";
            setFormLoading(false);
            setFormStatus("done");
          },
          (error) => {
            setFormStatus("error");
          }
        );
    }
  };
  return (
    <Container>
      <article>
        <div>
          <h2>Contact</h2>
          <p>
            I’m interested in freelance opportunities – especially ambitious or
            large projects. However, if you have other request or question,
            don’t hesitate to use the form.
          </p>
        </div>
      </article>
      <Grid container>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ p: { xs: 2, md: 5 }, mt: { xs: 1, md: 10 } }}
        >
          <ContactForm ref={form} onSubmit={sendEmail}>
            <ul>
              <li className="half name-div">
                <input
                  onChange={(event) =>
                    dispatchName({
                      type: "USER_INPUT",
                      val: event?.target.value,
                    })
                  }
                  placeholder="Name"
                  name="name"
                  required
                  disabled={formLoading}
                  value={nameState.value}
                  style={{
                    border: nameState.isError ? "1px solid #f44336" : "",
                    color: nameState.isError ? "#f44336" : "",
                  }}
                />
                <label></label>
              </li>
              <li className="half email-div">
                <input
                  placeholder="Email"
                  type="email"
                  name="email"
                  disabled={formLoading}
                  required
                  value={emailState.value}
                  onChange={(event) =>
                    dispatchEmail({
                      type: "USER_INPUT",
                      val: event?.target.value,
                    })
                  }
                  style={{
                    border: emailState.isError ? "1px solid #f44336" : "",
                    color: emailState.isError ? "#f44336" : "",
                  }}
                />
                <label></label>
              </li>
              <li className="entire subject-div">
                <input
                  placeholder="Subject"
                  name="subject"
                  required
                  disabled={formLoading}
                  value={subjectState.value}
                  onChange={(event) =>
                    dispatchSubject({
                      type: "USER_INPUT",
                      val: event?.target.value,
                    })
                  }
                  style={{
                    border: subjectState.isError ? "1px solid #f44336" : "",
                    color: subjectState.isError ? "#f44336" : "",
                  }}
                />
                <label></label>
              </li>
              <li className="entire">
                <textarea
                  value={messageState.value}
                  placeholder="Message"
                  rows={9}
                  disabled={formLoading}
                  onChange={(event) =>
                    dispatchMessage({
                      type: "USER_INPUT",
                      val: event?.target.value,
                    })
                  }
                  name="message"
                  required
                  style={{
                    border: messageState.isError ? "1px solid #f44336" : "",
                    color: messageState.isError ? "#f44336" : "",
                  }}
                />
                <label></label>
              </li>
              <li
                className="entire"
                style={{ justifySelf: "flex-end", marginTop: "20px" }}
              >
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  sx={{
                    fontSize: 18,
                    letterSpacing: 1,
                    display: "grid",
                    justifyItems: "center",
                    minWidth: "193.75px",
                    minHeight: "50px",
                    background:
                      formStatus === "done"
                        ? "#4caf50"
                        : formStatus === "error"
                        ? "#f44336"
                        : formLoading
                        ? "#2196f3"
                        : "var(--color-secondary)",
                  }}
                >
                  {formLoading ? (
                    <LineWobble
                      size={150}
                      lineWeight={5}
                      speed={1.75}
                      color="white"
                    />
                  ) : formStatus === "done" ? (
                    "SENDED MESSAGE"
                  ) : formStatus === "error" ? (
                    "ERROR"
                  ) : (
                    "SEND MESSAGE!"
                  )}
                </Button>
              </li>
            </ul>
          </ContactForm>
        </Grid>
        <Grid item xs={12} md={6} sx={{ postion: "relative" }}>
          <Box
            sx={{
              position: "absolute",
              background: "var(--color-primary-dark)",
              color: "#fff",
              padding: 2,
              right: 10,
              marginTop: 3,
            }}
          >
            <Typography variant="body1">Marek Purwin</Typography>
            <Typography variant="body1">POLAND</Typography>
            <Typography variant="body1">purwinmarek16@gmail.com</Typography>
          </Box>
          <img src={map} alt="mapa" style={{ pointerEvents: "none" }} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
