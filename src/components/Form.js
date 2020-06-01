import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    marginRight: "15px",
    marginBottom: "10px",
  },
});

const Form = ({ inputChange, print }) => {
  const classes = useStyles();
  return (
    <form onSubmit={(e) => print(e)}>
      <TextField
        className={classes.root}
        placeholder="enter item name"
        onChange={(e) => inputChange(e)}
        type="text"
      />
      <Button variant="outlined" onClick={() => print()}>
        Search
      </Button>
    </form>
  );
};

export default Form;
