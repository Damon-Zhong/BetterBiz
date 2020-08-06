import React,{useState} from 'react'
import axios from 'axios'

const SubmitEvent = () => {
    const [inputState, setInputState ] = useState({isFree:false})

    function  handleInputChange( event ){
        const { id, value } = event.target
        console.log(`${id}: ${value}`)
        setInputState({...inputState, [id]:value})
    }

    function handleCheckBox(){
        console.log(inputState)
        setInputState({...inputState, isFree: !inputState.isFree })
    }

    async function submitEvent(){
        await axios.post('/api/event/submit', inputState)
    }
    return (
        <div className='container'>
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
                    <label className="form-check-label" htmlFor="isFree">Free Event</label>
                    <input type="checkbox" className="form-check-input" id="isFree" onChange={handleCheckBox} />
                    
                </div>
                <button type="submit" className="btn btn-primary" onClick={submitEvent}>Submit</button>
            </form>
        </div>
    )
}

export default SubmitEvent;
