import React from 'react';
import axios from 'axios';

let warning = 0;

function LogIn() {
    const [formInput, setFormInput] = useState({
        email: "",
        password: ""
    })

    const [formState, setFormState] = useState({
        formValidStyle: "none",
        formFailedStyle: "none"
    })

    function handleFormSubmit(event) {
        event.preventDefault();
        let confirmInput = Object.values(formInput).filter(value => { return value.trim() !== "" })
        if (confirmInput.length === 2) {
            console.log("All areas filled!")
            axios.get("/api/login", {
                params: {
                    email: formInput.email,
                    password: formInput.password
                }
            }).then(result => {
                if (result.data === "failed") {
                    clearTimeout(warning);
                    setFormState({ ...formState, formFailedStyle: "block" })
                    warning = setTimeout(() => {
                        setFormState({ ...formState, formFailedStyle: "none" })
                    }, 3000)
                } else {
                    window.localStorage.setItem('currUser', JSON.stringify({ id: result.data[0].id, role: result.data[0].role }));
                    if (result.data[0].role !== null) {
                        window.location.pathname = `/profile/${result.data[0].id}`;
                    } else {
                        window.location.pathname = "/setup";
                    }
                }
            })
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
            case ("user"):
                setFormInput({ ...formInput, email: event.target.value })
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
                <h1 className="text-center">Log In</h1>
                <form onSubmit={handleFormSubmit}>
                    <div className="form-group">
                        <label><i><strong> Email</strong></i></label>
                        <input type="email" className="form-control form-control-lg" id="user" onChange={handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1"><i><strong> Password</strong></i></label>
                        <input type="password" className="form-control form-control-lg" id="password" onChange={handleInputChange} />
                    </div>
                    <div className="button">
                        <button className="btn btn-primary" style={{ marginBottom: "10px" }} id="logIntoAccount">Submit</button>
                    </div>
                </form>
                <div className="alert alert-danger" id="alertEmpty" style={{ display: formState.formValidStyle }}>
                    Please fill in missing information!
                </div>
                <div className="alert alert-danger" id="alertFailed" style={{ display: formState.formFailedStyle }}>
                    Email or password is invalid!
                </div>
            </div>
        </div>
    )

}

export default LogIn;