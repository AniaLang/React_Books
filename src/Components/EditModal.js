import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function EditModal (props) {
    return (
        <Modal
          {...props}
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
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        <Button variant="primary">
            Save Changes
          </Button>
      </Modal.Footer>
    </Modal>
    )
}

export default EditModal