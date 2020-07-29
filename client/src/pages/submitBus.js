import React,{ useState } from 'react'
import { Redirect } from 'react-router-dom';
import axios from 'axios'
import Modal from '../components/PopupModal'

const SubmitBus = () => {
    const [busData, setBusData] = useState({busType:"", name:"", address:"", city:"", country:"", postalCode:"", highlight:""})
    const [isSubmit, setIsSubmit] = useState(false)

    const handleInputChange = (event) => {
            const { id, value } = event.target
            setBusData( { ...busData, [id]: value } )
        }

    const handleFormSubmit = async (event) => {
            event.preventDefault()
            const feedback = await axios.post('/api/submit', busData)
            if( feedback.data.status ){
                setTimeout(()=>{
                    setIsSubmit(true)
                }, 3000)
            }
        }
    return (
        <div>
            { isSubmit ? <Redirect to='/' /> : '' }

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="/">BetterBiz</a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/submit">Submit</a>
                        </li>
                    </ul>
                </div>
            </nav>
            {/* <!-- Thank-you Modal --> */}
            <Modal status={isSubmit}/>
            {/* Submit business form  */}
            <div  className="mt-5 container">
                <form>
                    <div className="form-group">
                        <label htmlFor="busType">Type of Business</label>
                        <select onChange={handleInputChange} value={busData.busType} className="form-control" id="busType" required>
                            <option>Restaurant</option>
                            <option>Barber</option>
                            <option>Coffee Shop</option>
                            <option>Others</option>
                            <option>Others</option>
                        </select>
                  
                        <label htmlFor="name">Business Name</label>
                        <input onChange={handleInputChange} value={busData.name} type="text" className="form-control" id="name" name="name" required />

                        <label htmlFor="address">Business Address</label>
                        <input onChange={handleInputChange} value={busData.address} type="text" className="form-control" id="address" required />

                        <label htmlFor="city">City</label>
                        <input onChange={handleInputChange} value={busData.city} type="text" className="form-control" id="city" name="city" />

                        <label htmlFor="country">Country</label>
                        <input onChange={handleInputChange} value={busData.country} type="text" className="form-control" id="country" name="country" />

                        <label htmlFor="postalCode">Postal Code</label>
                        <input onChange={handleInputChange} value={busData.postalcode} type="text" className="form-control" id="postalCode" name="postalCode" />

                        <label htmlFor="highlight">Business Highlights</label>
                        <input onChange={handleInputChange} value={busData.highlight} type="text" className="form-control" id="highlight" name="highlight" />
                    </div>
                    <button onClick={handleFormSubmit} type="submit" className="btn btn-primary" data-toggle="modal" data-target="#thankyouModal">Submit</button>
                </form>
            </div>          
        </div>
    )
}

export default SubmitBus;
