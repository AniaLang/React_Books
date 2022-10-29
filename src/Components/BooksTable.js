import Table from 'react-bootstrap/Table'
import Form from 'react-bootstrap/Form'

function BooksTable({books}) {
return (
    <Table striped>
        <thead>
            <tr>
                <th>#</th>
                <th>Book Tittle</th>
                <th>Book Author</th>
            </tr>
        </thead>
            <tbody>{books.map((book, i) =>  
                <tr key={i}>
                    <td><Form.Check/></td>
                    <td>{book.title}</td>
                    <td>{book.author}</td>
                </tr>)}
            </tbody>
    </Table>
)
}

export default BooksTable