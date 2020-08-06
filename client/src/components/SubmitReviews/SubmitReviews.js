import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Alert from "react-bootstrap/Alert";
import "./SubmitReviews.css";

function SubmitReviews({addReview, businessId}){
    const [show, setShow] = React.useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [formHeadline, setHeadline] = React.useState("");
    const handleHeadline = (event) => setHeadline(event.currentTarget.value);
    const [formBody, setBody] = React.useState("");
    const handleBody = (event) => setBody(event.currentTarget.value);

    const [errorMessage, setErrorMessage] = React.useState("");

    function handleSubmit(){
        if(!formHeadline || !formBody){
            setErrorMessage("Please enter a headline and body text in order to submit your review.");
        } else {
            const userData = localStorage.getItem("currUser");
            if(!userData){
                setErrorMessage("You must be logged in to submit a review.")
            }
            const parsedUser = JSON.parse(userData);
            if(!parsedUser || !"id" in parsedUser){
                setErrorMessage("You must be logged in to submit a review.")
            }
            setErrorMessage("");
            fetch('/api/review', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    businessId, 
                    userId: parsedUser.id, 
                    review: {
                        title: formHeadline,
                        body: formBody
                    }
                })
            })
            .then(res => res.json())
            .then(res => {
                if(res.success){
                    addReview(res.body);
                    handleClose();
                } else {
                    setErrorMessage(res.message);
                }
            })
            .catch(() => {
                setErrorMessage("Oops! Something went wrong. Please try again.")
            })
        }
    }

    return(
        <div className="submit container mb-5">
            <Button className="submitButton outlineButton" variant="primary" onClick={handleShow}>
                Submit review
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Submit a review for this business</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {errorMessage ? <Alert variant={"danger"}>
                        {errorMessage}
                    </Alert> : null}
                    <Form>
                        <Form.Group controlId="formReviewHeadline">
                            <Form.Label>Headline</Form.Label>
                            <Form.Control type="text" placeholder="Enter headline" onChange={handleHeadline}/>
                        </Form.Group>
                        <Form.Group controlId="formReviewBody">
                            <Form.Label>Your review</Form.Label>
                            <Form.Control as="textarea" rows="3" onChange={handleBody}/>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" className="outlineButtonSecondary" onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="primary" className="outlineButton" onClick={handleSubmit}>
                    Submit review
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default SubmitReviews;