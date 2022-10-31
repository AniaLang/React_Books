import { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card'
import BookForm from '../Components/BookForm'
import BooksTable from '../Components/BooksTable'

const LOCAL_STORAGE_KEY = "books-key"

function DefaultPage () {
    const getBooksFromLocalStorage = () => JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || []

    const [books, setBooks] = useState(getBooksFromLocalStorage)
    const [checkedBooks, setCheckedBooks] = useState([])

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(books))
    }, [books])
    
return (
    <Card className="text-center">
        <Card.Body>
            <Card.Title>BOOKS</Card.Title>
            <Card.Text></Card.Text>
            <BookForm setBooks={setBooks} books={books} checkedBooks={checkedBooks} setCheckedBooks={setCheckedBooks} />
            <BooksTable books={books} setBooks={setBooks} checkedBooks={checkedBooks} setCheckedBooks={setCheckedBooks}  />
        </Card.Body>
    </Card>
)
}

export default DefaultPage