import React,{ useState } from 'react'
import { Redirect } from 'react-router-dom';
import Modal from '../components/PopupModal'

const SubmitBus = () => {
    const [busData, setBusData] = useState({name:"", address:"", highlight:""})
    const [isSubmit, setIsSubmit] = useState(false)

    const handleInputChange = (event) => {
            const { id, value } = event.target
            setBusData( { ...busData, [id]: value } )
        }

    const handleFormSubmit = async (event) => {
            event.preventDefault()
            const feedback = await fetch("/api/submit", {   
                method: 'post',
                headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
                },
                body:JSON.stringify(busData)
            }).then( res=>res.json() )
            setTimeout(()=>{
                setIsSubmit(true)
            }, 5000)
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
            <Modal />
            {/* Submit business form  */}
            <div  className="mt-5 container">
                <form>
                    <div className="form-group">
                        <label htmlFor="busType">Type of Business</label>
                        <select onChange={handleInputChange} value={busData.busType} className="form-control" id="busType">
                            <option>Restaurant</option>
                            <option>Barber</option>
                            <option>Coffee Shop</option>
                            <option>Others</option>
                            <option>Others</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Business Name</label>
                        <input onChange={handleInputChange} value={busData.name} type="text" className="form-control" id="name" name="name" />
                        <label onChange={handleInputChange} value={busData.address} htmlFor="address">Business Address</label>
                        <input type="text" className="form-control" id="address" name="address" />
                        <label htmlFor="city">City</label>
                        <input type="text" className="form-control" id="city" name="city" />
                        <label htmlFor="country">Country</label>
                        <input type="text" className="form-control" id="country" name="country" />
                        <label htmlFor="postalcode">Postal Code</label>
                        <input type="text" className="form-control" id="postalcode" name="postalcode" />
                        <label onChange={handleInputChange} value={busData.highlight} htmlFor="highlight">Business Highlights</label>
                        <input type="text" className="form-control" id="highlight" name="highlight" />
                    </div>
                    {/* <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1">
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div> */}
                    <button onClick={handleFormSubmit} type="submit" className="btn btn-primary" data-toggle="modal" data-target="#thankyouModal">Submit</button>
                </form>
            </div>          
        </div>
    )
}

export default SubmitBus;
