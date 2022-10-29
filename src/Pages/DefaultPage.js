import { useState } from 'react'
import Card from 'react-bootstrap/Card'
import BookForm from '../Components/BookForm'
import BooksTable from '../Components/BooksTable'


function DefaultPage () {
    const [books, setBooks] = useState([])

return (
    <Card className="text-center">
        <Card.Body>
            <Card.Title>BOOKS</Card.Title>
            <Card.Text></Card.Text>
            <BookForm setBooks={setBooks} books={books}/>
            <BooksTable books={books}/>
        </Card.Body>
    </Card>
)
}

export default DefaultPage