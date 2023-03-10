import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import Alert from 'react-bootstrap/Alert';
import FormLabel from 'react-bootstrap/FormLabel'

interface NameStepProps {
  cb: (field: string, value: string) => void
}

export const NameStep: React.FC<NameStepProps> = (props) => {
  const [name, setName] = useState('');
  const [showFormValidationFeedback, setShowFormValidationFeedback] = useState('')
  const handleNext = () => {
    name ? setShowFormValidationFeedback("") : setShowFormValidationFeedback("Name field is required.")
    if(!name){
        return;
    }
    props.cb('name', name)
  }

  return (
    <>
      <Form>
        <Container fluid={false}>
          <Row className="mb-2 half-width">
            <FormLabel>Full Name</FormLabel>
          </Row>
          <Row className="mb-2 d-grid gap-2 col-4 mx-auto">
          <Form.Control
                type="text"
                placeholder="Enter your full name"
                onChange={({ target: { value } }) => {
                  setName(value)
                }}
                value={name}
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
