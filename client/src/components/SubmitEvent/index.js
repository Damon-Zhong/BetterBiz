import React,{useState} from 'react'
import axios from 'axios'

const SubmitEvent = () => {
    const currUser = JSON.parse(localStorage.getItem('currUser'))
    const [inputState, setInputState ] = useState({isFree:false, createBy: currUser.name})
    const [submitState, setSubmitState] = useState()

    function  handleInputChange( event ){
        const { id, value } = event.target
        console.log(`${id}: ${value}`)
        setInputState({...inputState, [id]:value})
    }

    function handleCheckBox(){
        console.log(inputState)
        setInputState({...inputState, isFree: !inputState.isFree })
    }

    async function submitEvent(event){
        event.preventDefault()
        const newEvent = await axios.post('/api/event/submit', inputState)
        if( newEvent.data ){
            setSubmitState(true)
        }
    }
    return (
        <div className='container'>
            {submitState ? (<div className="alert alert-success" role="alert">
            Event submitted successfully!
            </div>) : ""}
            <h3>Submit Events</h3>
            <form>
                <div className="form-group">
                    <label htmlFor="name">Event Name</label>
                    <input type="text" className="form-control" id="name" onChange={handleInputChange} />
                    <label htmlFor="description">Event Description</label>
                    <input type="text" className="form-control" id="description" onChange={handleInputChange} />
                    <label htmlFor="image">Image URL</label>
                    <input type="text" className="form-control" id="image" onChange={handleInputChange} />
                    <label>Start Date</label>
                    <input id="startDate" type="date" className="form-control" onChange={handleInputChange} />
                    <label>End Date</label>
                    <input id="endDate" type="date" className="form-control" onChange={handleInputChange} />
                    <label htmlFor="location">Event Location</label>
                    <input type="text" className="form-control" id="location" onChange={handleInputChange} />
                    <input type="checkbox" className="form-check-input" id="isFree" onChange={handleCheckBox} />
                    <label className="form-check-label" htmlFor="isFree">Free Event</label>
                </div>
                <button type="submit" className="btn btn-primary" onClick={submitEvent}>Submit</button>
            </form>
        </div>
    )
}

export default SubmitEvent;
