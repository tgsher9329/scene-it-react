import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import Movie from '../components/Movie'

export default function SavedMovies() {
    const movies = useSelector((state) => {return state.movies})
    return (
        <div>
            <h2>Saved Movies</h2>
            
            <Container>
                    <Row >
                        
                    {
                            movies.length === 0 ? (
                                <div class="noMoviesMessage">You have no movies saved</div>
                            ) : (
                                movies.map((movie) => {
                                    return (
                                        <Col xs={12} md={4} lg={3} key={movie.imdbID}>
                                            <div  className="mb-4">
                                                <Movie movie={movie}/>
                                            </div>
                                        </Col>
                                    )
                                })

                            )}
                    </Row>
                </Container>
        </div>
    )
}
