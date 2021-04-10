import React, { Component } from 'react'
import { Button, Col, Container, Form, FormControl, InputGroup, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import Movie from '../components/Movie';
import { setData, setLoading } from '../redux/actions';

class MovieSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //? movies: [],
            search: 'Jason Bourne',
        }
    }

    componentDidMount() {
        this.fetchMovies()
    }

    handleSubmit = (event) => {
        // ? put what was in the search bar into the api fetch
        event.preventDefault()
        this.fetchMovies()
    }

    handleChange = (event) => {
        this.setState({
            search: event.target.value
        })
    }

    fetchMovies = () => {
        this.props.dispatch(setLoading(true))
        // fetch('http://www.omdbapi.com/?apikey=59354c85&s=action')
        fetch(`http://www.omdbapi.com/?apikey=59354c85&s=${this.state.search}`)
            .then(response => response.json())
            .then(data => {
                this.props.dispatch(setLoading(false))
                // this.setState({
                //     movies: data.Search || []
                // })
                this.props.dispatch(setData(data.Search || []))
            });
            // console.log(this.state.movies)
    }

    render() {
        return (
            <div>
                <Row>
                    <Col xs={2}></Col>
                    <Col xs={8}>
                        <InputGroup className="mb-3">
                        <Form  onSubmit={this.handleSubmit} inline>
                            <FormControl type="text" placeholder="Search" value={this.state.search} onChange={this.handleChange} required/>
                            <Button type="submit" variant="outline-success">Search</Button>
                        </Form>
                        </InputGroup>

                        {/* <InputGroup className="mb-3">
                            <FormControl
                            placeholder="Search Movies"
                            aria-label="Search Movies"
                            onChange={this.handleChange}
                            value={this.search}
                            />
                            <InputGroup.Append>
                                <Button type="submit" variant="outline-secondary">
                                Search
                                </Button>
                            </InputGroup.Append>
                        </InputGroup> */}

                    </Col>
                    <Col xs={2}></Col>
                </Row>

                { this.props.loading ? (
                    'Loading...'
                ) : (

                <Container className="movieSectionContainer">
                    <Row className="my-auto">
                        {this.props.movies.map((movie) => {
                            return (
                                <Col xs={12} md={4} lg={3} key={movie.imdbID}>
                                    <div  className="mb-4">
                                        <Movie movie={movie}/>
                                    </div>
                                </Col>
                            )
                        })}
                    </Row>
                </Container>

                )}

            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        loading: state.loading,
        movies: state.data,
    }
}

export default connect(mapStateToProps)(MovieSection)