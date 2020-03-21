import React from "react";

import Container from "@material-ui/core/Container";
import { PeopleList } from "../components/PeopleList";

export const PeoplePage = () => (
  <Container maxWidth="lg">
    <PeopleList />
  </Container>
);
