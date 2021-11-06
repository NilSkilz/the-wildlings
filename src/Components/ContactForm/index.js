import React, { useRef, useState } from "react";
import Title from "../Text/Title";
import SubTitle from "../Text/Subtitle";
import { Row, Col, Container } from "reactstrap";
import { notification } from "antd";
import emailjs, { init } from "emailjs-com";
init("user_BuSWgZDrjMVm1FT62d5nN");

const Label = ({ id, children }) => {
  return (
    <div
      style={{ textAlign: "left", fontFamily: "candal", marginBottom: "10px" }}
    >
      <label htmlFor={id}>{children}</label>
    </div>
  );
};

const Input = ({ id }) => {
  return (
    <input
      style={{
        width: "100%",
        marginBottom: "30px",
        borderRadius: "25px",
        borderStyle: "none",
        minHeight: "50px",
        padding: "20px",
      }}
      id={id}
      name={id}
    ></input>
  );
};

export default function ContactForm() {
  const form = useRef();

  const [disabled, setDisabled] = useState();

  return (
    <Container style={{ height: "100%" }}>
      <Row>
        <Col xs={1}></Col>
        <Col xs={10}>
          <Title style={{ marginTop: "40px" }}>Contact Us</Title>
          <SubTitle>We can't wait to hear from you!</SubTitle>
          <form ref={form}>
            <Row>
              <Col>
                <div>
                  <Label id="name">Name</Label>
                </div>
                <Input id="name"></Input>
              </Col>
              <Col>
                <div>
                  <Label id="email">Email</Label>
                </div>
                <Input id="email"></Input>
              </Col>
            </Row>

            <div>
              <Label id="message">Message</Label>
            </div>
            <textarea
              name={"message"}
              style={{
                width: "100%",
                borderRadius: "25px",
                borderStyle: "none",
                height: "180px",
                padding: "20px",
              }}
              id="message"
            ></textarea>
            <button
              style={{
                width: "100px",
                height: "40px",
                borderRadius: "20px",
                color: "#fff",
                fontFamily: "candal",
                backgroundColor: disabled ? "grey" : "rgb(242, 104, 42)",
                borderStyle: "none",
                float: "right",
                marginTop: "20px",
              }}
              disabled={disabled}
              onClick={(e) => {
                setDisabled(true);
                e.preventDefault();
                emailjs
                  .sendForm(
                    `service_47bg3nq`,
                    "template_ersli3w",
                    form.current,
                    "user_BuSWgZDrjMVm1FT62d5nN"
                  )
                  .then(() => {
                    setDisabled(false);
                    notification.open({
                      message: "Success",
                      description:
                        "Your message has been sent, we'll get back to you soon!",
                    });
                    console.log("Success");
                  })
                  .catch((err) => {
                    notification.open({
                      message: "Error",
                      description:
                        "There was a problem sending your message... we're sorry - please try again.",
                    });
                    setDisabled(false);
                    console.log(err);
                  });
              }}
            >
              Send
            </button>
          </form>
        </Col>
        {/* <Col xs={5}> */}
        {/* <img
            style={{ width: "100%", marginTop: "150px" }}
            src="images/bg-14-copyright-2.jpeg"
          /> */}
        {/* </Col> */}
        <Col xs={1}></Col>
      </Row>
    </Container>
  );
}
