import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

const Example = ({ id }) => {
  return (
    <Form>
      <FormGroup>
        <Label for="exampleTitle">Email</Label>
        <Input
          type="text"
          name="example"
          id={id}
          placeholder="Place example here"
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleDetails">Example content</Label>
        <Input type="textarea" name="details" id={id} />
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  );
};

export default Example;
