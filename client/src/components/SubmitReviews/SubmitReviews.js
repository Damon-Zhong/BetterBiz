import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./SubmitReviews.css";

function SubmitReviews(){
    const [show, setShow] = React.useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <div className="submit container mb-5">
            <Button className="submitButton" variant="primary" onClick={handleShow}>
                Submit review
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Submit a review for this business</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formReviewHeadline">
                            <Form.Label>Headline</Form.Label>
                            <Form.Control type="text" placeholder="Enter headline" />
                        </Form.Group>
                        <Form.Group controlId="formReviewBody">
                            <Form.Label>Your review</Form.Label>
                            <Form.Control as="textarea" rows="3" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Submit review
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default SubmitReviews;