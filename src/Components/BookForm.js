import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'

function BookForm ({books, setBooks, checkedBooks}) {
const [title, setTitle] = useState("")
const [author, setAuthor ] = useState("")
const [currentId, setCurrentId] = useState(0)

const handleAdd = () => {
  const id = currentId + 1
  const book = {title, author, id}
  setBooks([...books, book ])
  setCurrentId(id)
}

const handleDelete = () => {
  setBooks(books.filter(b => !checkedBooks.includes(b)))

}
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
  <Button variant="success" type="button" onClick={e => handleAdd()}>
        Add
      </Button>{' '}
      <Button variant="warning" type="button">
        Edit
      </Button>{' '}
      <Button variant="danger" type="button" onClick={e => handleDelete()} >
        Delete
      </Button>
</Form>
  )
}

export default BookForm