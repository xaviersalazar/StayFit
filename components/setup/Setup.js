import React from "react";
import { Container } from "../common/Container";
import { Title } from "../common/Title";
import { Subtitle } from "../common/Subtitle";

export const Setup = () => {
  return (
    <Container>
      <Title category="h1">Setup</Title>
      <Subtitle category="c1" appearance="hint">
        Let's get some initial stats
      </Subtitle>
    </Container>
  );
};
