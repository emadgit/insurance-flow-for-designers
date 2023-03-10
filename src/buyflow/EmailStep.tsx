import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import Alert from 'react-bootstrap/Alert';
import FormLabel from 'react-bootstrap/FormLabel'
import { emailRegex } from '../utils';

interface EmailStepProps {
  cb: (field: string, value: string) => void
}

export const EmailStep: React.FC<EmailStepProps> = (props) => {
  const [email, setEmail] = useState('');
  const [showFormValidationFeedback, setShowFormValidationFeedback] = useState('')
  const handleNext = () => {
    email ? setShowFormValidationFeedback("") : setShowFormValidationFeedback("Email field is required.")
    if(!email){
        return;
    }
    const isValidEmail = emailRegex.test(email);
    if(!isValidEmail){
      setShowFormValidationFeedback("Invalid email format.");
      return;
    }

    props.cb('email', email)
  }

  return (
    <>
      <Form>
        <Container fluid={false}>
          <Row className="mb-2 half-width">
            <FormLabel>Email</FormLabel>
          </Row>
          <Row className="mb-2 d-grid gap-2 col-4 mx-auto">
          <Form.Control
                type="email"
                placeholder="Enter your Email"
                onChange={({ target: { value } }) => {
                  setEmail(value)
                }}
                value={email}
              ></Form.Control>

          </Row>
          <Row className="mb-2 d-grid gap-2 col-4 mx-auto">

          <Button size='sm'
                onClick={handleNext}
              >
                Next
              </Button>
              {showFormValidationFeedback && <Alert variant='danger'>{showFormValidationFeedback}</Alert>}
          </Row>
        </Container>
      </Form>
    </>
  )
}
