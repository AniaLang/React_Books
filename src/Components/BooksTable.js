import Table from 'react-bootstrap/Table'
import Form from 'react-bootstrap/Form'

function BooksTable({books, checkedBooks, setCheckedBooks}) {

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
                <tr key={book.id}>
                    <td><Form.Check type='checkbox' onChange={e => handleChange(e, index)} /></td>
                    <td>{book.title}</td>
                    <td>{book.author}</td>
                </tr>)}
            </tbody>
    </Table>
)
}

export default BooksTable