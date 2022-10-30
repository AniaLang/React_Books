import { useState } from 'react'
import Card from 'react-bootstrap/Card'
import BookForm from '../Components/BookForm'
import BooksTable from '../Components/BooksTable'

function DefaultPage () {
    const [books, setBooks] = useState([])
    const [checkedBooks, setCheckedBooks] = useState([])

return (
    <Card className="text-center">
        <Card.Body>
            <Card.Title>BOOKS</Card.Title>
            <Card.Text></Card.Text>
            <BookForm setBooks={setBooks} books={books} checkedBooks={checkedBooks} />
            <BooksTable books={books} checkedBooks={checkedBooks} setCheckedBooks={setCheckedBooks} />
        </Card.Body>
    </Card>
)
}

export default DefaultPage