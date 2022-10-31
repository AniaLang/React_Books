import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'

function BookForm ({books, setBooks, checkedBooks, setCheckedBooks}) {
  const maxId = () => Math.max(...books.map(b => b.id))

  const [title, setTitle] = useState("")
  const [author, setAuthor ] = useState("")
  const [currentId, setCurrentId] = useState(() => maxId())


const handleAdd = () => {
  const clearInputs = () => {
    setTitle("")
    setAuthor("")
  }
  if(books.some(b => b.title === title && b.author === author)){
    clearInputs()
      return
    }
    const rate = 0
    const id = currentId + 1
    const book = {title, author, id, rate}
  setBooks([...books, book ])
  setCurrentId(id)
  clearInputs()
}

const handleDelete = () => {
  setBooks(books.filter(b => !checkedBooks.includes(b)))
  setCheckedBooks([])
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
  <Button variant="success" type="button" onClick={e => handleAdd()} disabled={title === "" || author === ""}>
        Add
      </Button>{' '}
  <Button variant="danger" type="button" onClick={e => handleDelete()} disabled={checkedBooks.length === 0}>
        Delete
      </Button>
</Form>
  )
}

export default BookForm