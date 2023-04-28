import react from "react";
import Button from "@mui/material/Button";
import { Alert } from "@mui/material";
function Practice() {
  const arr = ["suyog ", "b", "c", "d", "e"];

  return (
    <>
      <h1
        style={{ backgroundColor: "red", margin: "0px", textAlign: "center" }}>
        this is rendered componet
      </h1>
      <Alert severity='error'>This is an error alert — check it out!</Alert>
      <Button variant='contained'>Hello World</Button>
    </>
  );
}

export default Practice;
