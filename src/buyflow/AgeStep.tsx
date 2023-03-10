import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import Alert from 'react-bootstrap/Alert';
import FormLabel from 'react-bootstrap/FormLabel'
import { config } from '../utils';

interface AgeStepProps {
  cb: (field: string, value: string) => void
}

export const AgeStep: React.FC<AgeStepProps> = (props) => {
  const [age, setAge] = useState('');
  const [showFormValidationFeedback, setShowFormValidationFeedback] = useState('')
  const handleNext = () => {
    age ? setShowFormValidationFeedback("") : setShowFormValidationFeedback("Age field is required.")
    if(!age){
        return;
    }
    if(Number(age) < config.MIN_AGE || Number(age) > config.MAX_AGE) {
      setShowFormValidationFeedback(`Our service is accessible to individuals between the ages of ${config.MIN_AGE} and ${config.MAX_AGE}`);
      return;
    }
    props.cb('age', age)
  }

  return (
    <>
      <Form>
        <Container fluid={false}>
          <Row className="mb-2 half-width">
            <FormLabel>your age</FormLabel>
          </Row>
          <Row className="mb-2 d-grid gap-2 col-4 mx-auto">
          <Form.Control
                type="number"
                placeholder="Enter your age"
                onChange={({ target: { value } }) => {
                  setAge(value)
                }}
                value={age}
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
