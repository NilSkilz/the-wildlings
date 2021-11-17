import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
import Title from "../Text/Title";
import SubTitle from "../Text/Subtitle";

export default function WelcomeModal() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Modal isOpen={isOpen} toggle={() => setIsOpen(false)} centered>
      <ModalHeader toggle={() => setIsOpen(false)}>
        <Title style={{ fontSize: "24px" }}>Wildlings Forest School</Title>
        <SubTitle style={{ fontSize: "20px" }}>Opening Soon!!!</SubTitle>
      </ModalHeader>
      <ModalBody>
        <p>
          Our Forest school isn't quite ready for visitors just yet - we'll
          hopefully be opening in the next few months!
        </p>
        <p>
          Feel free to browse our site and get in touch if you have any
          questions or want some information about booking a place when we're
          open.
        </p>
      </ModalBody>
      <ModalFooter>
        <Button
          style={{
            backgroundColor: "rgb(242, 104, 42)",
            borderStyle: "none",
            borderRadius: "10px",
          }}
          color="primary"
          onClick={() => setIsOpen(false)}
        >
          Close
        </Button>
      </ModalFooter>
    </Modal>
  );
}
