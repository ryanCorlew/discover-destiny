import React from "react";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "fit-content",
    maxWidth: "60%",
    padding: "8px",
    margin: "auto",
  },
});

const Result = ({ searchResult }) => {
  const classes = useStyles();
  const searched = searchResult ? (
    <div>
      <h2>{searchResult.name}</h2>
      <p>{searchResult.description}</p>
      <img
        src={`https://www.bungie.net${searchResult.icon}`}
        alt={searchResult.name}
      />
    </div>
  ) : (
    <h2>Result Not Found</h2>
  );
  return <Card className={classes.root}>{searched}</Card>;
};

export default Result;
