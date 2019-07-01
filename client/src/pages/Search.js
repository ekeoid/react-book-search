import React, { Component } from 'react';

import Jumbotron from '../components/Jumbotron';
import { Col, Row, Container } from '../components/Grid';
import Tile from '../components/Tile';
import Alert from '../components/Alert';
import { shuffle, colors } from '../util/Colors';

class Search extends Component {
    state = {
        
    };

    componentDidMount() {
    }
    
    clickTile = (event) => {

    }

    render() {
        return (
            <div>
                <Jumbotron>
                    <h1>Clicky Game!</h1>
                    <h3>Click on an image to earn points, but don't click on any more than once!</h3>
                </Jumbotron>

            <Container style={{ marginTop: 30 }}>
                <Row>
                    
                </Row>
                
            </Container>
            </div>
        );
    }
};

export default Search;
