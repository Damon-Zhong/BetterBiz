import React, {useState} from 'react';
import axios from 'axios';

function SignUp() {
    const [formInput, setFormInput] = useState({
        email: "",
        firstName: "",
        lastName: "",
        password: ""
    })

    const [formState, setFormState] = useState({
        userValidStyle: "none",
        formValidStyle: "none"
    })

    async function handleFormSubmit(event) {
        event.preventDefault();
        let confirmInput = Object.values(formInput).filter(value => { return value !== "" })
        if (confirmInput.length === 4) {
            const result = await axios.post('/api/register', formInput).catch((err)=>{ console.log(err, 'err') })
            if( result.data.isExist ){
                setFormState({ ...formState, userValidStyle: "block" })
                setTimeout(() => {
                    setFormState({ ...formState, userValidStyle: "none" })
                }, 5000)
            }else{
                window.localStorage.setItem('currUser', JSON.stringify({id:result.data.body._id, email: result.data.body.email, firstName: result.data.body.firstName }))
                window.location.pathname = "/"
            }
        }else{
            setFormState({ ...formState, formValidStyle: "block" })
            setTimeout(() => {
                setFormState({ ...formState, formValidStyle: "none" })
            }, 3000)
        }
    }

    function handleInputChange(event) {
        switch (event.target.id) {
            case ("email"):
                setFormInput({ ...formInput, email: event.target.value })
                break;
            case ("first-name"):
                setFormInput({ ...formInput, firstName: event.target.value })
                break;
            case ("last-name"):
                setFormInput({ ...formInput, lastName: event.target.value })
                break;
            case ("password"):
                setFormInput({ ...formInput, password: event.target.value })
                break;
            default:
                break;
        }
    }

    return (
        <div className="container">
            <div className="container col-xl-5 col-lg-6 col-md-8 col-sm-10">
                <h1 className="text-center">Create an account</h1>
                <form onSubmit={handleFormSubmit}>
                    <div className="form-group">
                        <label><i><strong> Email</strong></i></label>
                        <input type="email" className="form-control form-control-lg" id="email" autoComplete="off" onChange={handleInputChange} />
                        <small id="alertTaken" className="form-text text-danger" style={{ display: formState.userValidStyle }}>
                            This email is already in use!
                        </small>
                    </div>
                    <div className="form-group">
                        <label><i><strong> First Name</strong></i></label>
                        <input className="form-control form-control-lg" id="first-name" autoComplete="off" onChange={handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label><i><strong> Last Name</strong></i></label>
                        <input className="form-control form-control-lg" id="last-name" autoComplete="off" onChange={handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1"><i><strong> Password</strong></i></label>
                        <input type="password" className="form-control form-control-lg" id="password" autoComplete="off" onChange={handleInputChange} />
                    </div>
                    <div className="button">
                        <button className="btn btn-primary" style={{ marginBottom: "10px" }} id="createNewAccount">Submit</button>
                        <span className='pl-5'>Already have an account? <a className="text-decoration-none text-white" href="/account"><u>Log in</u></a></span>
                    </div>
                </form>
                <div className="alert alert-danger" id="alertFailed" style={{ display: formState.formValidStyle }}>
                    Please fill in missing information!
                </div>
            </div>
        </div>
    )
}

export default SignUp;