import { Button } from 'react-bootstrap'
import React from 'react'
import { Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { createAddMovie, createDeleteMovie } from '../redux/actions'

export default function Movie(props) {
    const { Title, Poster, Year, imdbID } = props.movie
    const dispatch = useDispatch()
    const savedMovie = useSelector((state) => {
        return state.movies.find((movie) => movie.imdbID === imdbID)
    })

    const addMovie = () => {
        dispatch(createAddMovie(props.movie))
    }

    const deleteMovie = () => {
        dispatch(createDeleteMovie(props.movie))
    }
    
    return (
        
        <div>
            <Card>
                <Card.Img variant="top" src={Poster} />
                <Card.Body>
                    <Card.Title>{Title}</Card.Title>
                    <Card.Text>{Year}</Card.Text>
                    {
                        savedMovie ? (
                            <Button variant = "danger" onClick = {deleteMovie}>
                                Remove
                            </Button>
                        ) : (
                            <Button variant="primary" onClick={addMovie}>Add Movie</Button>
                        )}
                </Card.Body>
            </Card>
        </div>
    )
}
