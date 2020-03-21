import React from "react";
import { useParams } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import LinearProgress from "@material-ui/core/LinearProgress";
import { useFetch } from "@hooks";
import * as Swapi from "@client";
import { People } from "@interfaces";
import { PeopleList } from "../components/PeopleList";

export const PeopleOnePage: React.FC = () => {
  const params = useParams<{ index: string }>();
  const [data, isLoading, isError] = useFetch<People>(
    Swapi.getOne,
    params.index
  );

  if (isLoading) return <LinearProgress />;

  if (isError) return <Typography variant="body2">Error!</Typography>;

  return (
    <div>
      <Typography variant="body2">{data && data.name}</Typography>
      <PeopleList />
    </div>
  );
};
