import Table from 'react-bootstrap/Table'
import Form from 'react-bootstrap/Form'
import EditModal from './EditModal';
import { useState } from 'react'

function BooksTable({books, checkedBooks, setCheckedBooks}) {
    const [modalShow, setModalShow] = useState(false);

    const handleChange = (e, index) => {
        let copy = [...checkedBooks]

        if (e.target.checked === true) {
            copy[index] = books[index]
            copy = copy.filter(b => b !== undefined)
        } else {
            copy.splice(index, 1)
        }

        setCheckedBooks(copy)
    }

return (
    <Table striped>
        <thead>
            <tr>
                <th>#</th>
                <th>Book Tittle</th>
                <th>Book Author</th>
            </tr>
        </thead>
            <tbody>{books.map((book, index) =>  
                <tr key={book.id} onClick={() => setModalShow(true)}>
                    <td>
                        <Form.Check
                            type='checkbox'
                            onChange={e => handleChange(e, index)}
                            onClick={e => e.stopPropagation()} />
                    </td>
                    <td>{book.title}</td>
                    <td>{book.author}</td>
                </tr>)}
            </tbody>
            <EditModal show={modalShow} onHide={() => setModalShow(false)}/>
    </Table>
)
}

export default BooksTable