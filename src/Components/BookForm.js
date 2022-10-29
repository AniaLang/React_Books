import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'

function BookForm ({books, setBooks}) {
const [title, setTitle] = useState("")
const [author, setAuthor ] = useState("")
//TODO -> empty string validation
// -> clear inputs
  return (
<Form>
  <Row>
    <Col>
    <Form.Group className="mb-3">
      <Form.Label>Tittle</Form.Label>
        <Form.Control placeholder="Book Title" onChange={e => setTitle(e.target.value) } defaultValue={title}/>
      </Form.Group>
    </Col>
    <Col>
      <Form.Group className="mb-3">
        <Form.Label>Author</Form.Label>
        <Form.Control placeholder="Book Author"  onChange={e => setAuthor(e.target.value) } defaultValue={author} />
      </Form.Group>    
    </Col>
  </Row>
  <Button variant="success" type="button" onClick={e => setBooks([...books, {title, author}])}>
        Add
      </Button>{' '}
      <Button variant="danger" type="button">
        Delete
      </Button>{' '}
      <Button variant="warning" type="button">
        Edit
      </Button>
  
</Form>
  )
}

export default BookForm