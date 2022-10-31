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
  if(title === "" || author === ""){
    return
  }
  const rate = 0
  const id = currentId + 1
  const book = {title, author, id, rate}
  setBooks([...books, book ])
  setCurrentId(id)
  setTitle("")
  setAuthor("")
}

const handleDelete = () => {
  setBooks(books.filter(b => !checkedBooks.includes(b)))
}
  return (
<Form> 
  <Row>
    <Col>
    <Form.Group className="mb-3">
      <Form.Label>Tittle</Form.Label>
        <Form.Control placeholder="Book Title" onChange={e => setTitle(e.target.value) } value={title}/>
      </Form.Group>
    </Col>
    <Col>
      <Form.Group className="mb-3">
        <Form.Label>Author</Form.Label>
        <Form.Control placeholder="Book Author"  onChange={e => setAuthor(e.target.value) } value={author} />
      </Form.Group>    
    </Col>
  </Row>
  <Button variant="success" type="button" onClick={e => handleAdd()}>
        Add
      </Button>{' '}
  <Button variant="danger" type="button" onClick={e => handleDelete()} >
        Delete
      </Button>
</Form>
  )
}

export default BookForm