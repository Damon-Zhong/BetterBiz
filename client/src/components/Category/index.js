import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import './category.css';

function createRows(cards){
    const projectRows = [];
    for (let i=0; i <= (cards.length / 3); i++) {
    const startingIndex = i * 3;
    projectRows[i] = [cards[startingIndex], cards[startingIndex + 1], cards[startingIndex + 2]];
    }
    return projectRows;
}

const Category = ({match}) => {
    const [businessList, setBusinessList] = useState([])

    useEffect(() => {
        async function initCategoryPage( category ){
            const DBresult = await axios.get(`/api/overview/${category}`)
            console.log( DBresult.data )
            setBusinessList(DBresult.data)
        }
        initCategoryPage(match.params.category)
    }, []);

    const cards = 
        businessList.map( (business, index) => {
            return (
                <Col className="col-sm-4" key={index}>
                    <Card className="mb-2 category-card" style={{ width: '100%' }}>
                        <Card.Img variant="top" src={business.image ? business.image : "https://thumbs.dreamstime.com/b/no-image-available-icon-photo-camera-flat-vector-illustration-132483296.jpg%27%7D"} />
                        <Card.Body>
                            <Card.Title className="card-title">{business.name}</Card.Title>
                            <Card.Text>
                            {business.highlight.join(' | ')}
                            </Card.Text>
                            <a href={`/businesses/${business.url}`} className="btn btn-primary btn-category btn-block">Learn more</a>
                        </Card.Body>
                    </Card>
                </Col>
            )
        });
    const rows = createRows(cards);
    return (<div>
                <div className="container mt-5">
                <h3 className='mt-3 mb-3 categoryHead'>Toronto {match.params.category}s: find diverse businesses in our city</h3>     
                </div>
                <div className="container mt-5">
                {rows.map((row, index) => {
                    return (
                        <Row key={index}>
                            {row}
                        </Row>
                    )
                })}
                </div>
                <div className="line mt-5"></div>
            </div>
        )
    }

export default Category;
