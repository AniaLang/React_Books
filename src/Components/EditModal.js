import { Form } from 'react-bootstrap';
import {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function EditModal ({ show, onHide, bookInModal, books, setBooks}) {
const [titleEdited, setTitleEdited] = useState(bookInModal.title)
const [authorEdited, setAuthorEdited] = useState(bookInModal.author)

const handleSaveChanges = (e) => {
  const bookToEdit = books.find(b => b.id === bookInModal.id)
  bookToEdit.title = titleEdited 
  bookToEdit.author = authorEdited
  setBooks([...books])
  onHide()
}

    return (
        <Modal
          show={show}
          onHide={onHide}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Edit Book
            </Modal.Title>
          </Modal.Header>
      <Modal.Body>
        <h4>Edit Book</h4>
        <Form>
          <Form.Label>Title</Form.Label>
          <Form.Control onChange={e => setTitleEdited(e.target.value)} value={titleEdited}/>
          <Form.Label>Author</Form.Label>
          <Form.Control onChange={e => setAuthorEdited(e.target.value)} value={authorEdited}/>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
        <Button variant="primary" onClick={e => handleSaveChanges(e)}>
            Save Changes
          </Button>
      </Modal.Footer>
    </Modal>
    )
}

export default EditModal