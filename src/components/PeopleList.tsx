import React from "react";
import { useHistory } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import LinearProgress from "@material-ui/core/LinearProgress";
import { useFetch } from "@hooks";
import * as Swapi from "@client";
import { People } from "@interfaces";
import reactPathImage from "../assets/nature.jpg";

export const PeopleList: React.FC = () => {
  const [data, isLoading, isError] = useFetch<People[]>(Swapi.getAll);
  const history = useHistory();

  if (isLoading) return <LinearProgress />;

  if (isError) return <Typography variant="body2">Error!</Typography>;

  return (
    <>
      <Typography variant="h4">People List</Typography>
      <List>
        {data &&
          data.map((people, index) => (
            <ListItem
              button
              onClick={() => history.push(`/people/${index + 1}`)}
              key={people.created}
            >
              <ListItemAvatar>
                <Avatar src={reactPathImage} />
              </ListItemAvatar>
              <ListItemText
                primary={people.name}
                secondary={`height: ${people.height}, mass: ${people.mass}`}
              />
            </ListItem>
          ))}
      </List>
    </>
  );
};
