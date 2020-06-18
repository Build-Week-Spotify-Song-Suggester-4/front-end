import React from "react";
import {Container, Row, Col, Button, Form, FormGroup, Label, Input} from "reactstrap";

function LogInForm(){
	return(
		<Container>
		<Form>
          <Row>
          <Col sm="6">
            <FormGroup >
              <Label>Email: </Label>
              <Input type="email" name="email" id="email" placeholder="email" />
            </FormGroup>
          </Col>
          <Col sm="6">
            <FormGroup>
              <Label>Password: </Label>
              <Input type="password" name="password" id="password" placeholder="password" />
            </FormGroup>
          </Col>
          <Col sm="12">
            <FormGroup>
              <Label check>
              <Input type="checkbox" />
              Terms and Conditions
              </Label>
            </FormGroup>
          </Col>

          <Col sm="12">
            <Button type="submit" >Log In</Button>
          </Col>
            
            
          </Row>
        </Form>

        </Container>
	);
}

export default LogInForm;