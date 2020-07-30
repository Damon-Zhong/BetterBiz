import React, {useState} from 'react';
import axios from 'axios';

let warning = 0;

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

    function handleFormSubmit(event) {
        event.preventDefault();
        let confirmInput = Object.values(formInput).filter(value => { return value !== "" })
        if (confirmInput.length === 4) {

            axios.post('/api/register', formInput)
            .then((data)=>{
                /* Set insertId into localStrorage, redirect to profile page */
                if (data.status === "exists") {
                    clearTimeout(warning);
                    setFormState({ ...formState, userValidStyle: "block" })
                    warning = setTimeout(() => {
                        setFormState({ ...formState, userValidStyle: "none" })
                    }, 5000)
                } else {
                    window.localStorage.setItem('currUser', JSON.stringify({id: data.insertId, role: null}));
                    window.location.pathname = '/';
                }
            })
            .catch((err)=>{
                console.log(err, 'err')
            });

        } else {
            clearTimeout(warning);
            setFormState({ ...formState, formValidStyle: "block" })
            warning = setTimeout(() => {
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