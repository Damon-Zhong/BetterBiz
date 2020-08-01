import React, {useState} from 'react';
import axios from 'axios';
import OAuth from './OAuth'

function LogIn() {
  const [formInput, setFormInput] = useState({
    email: "",
    password: "",
  });

  const [formState, setFormState] = useState({
    formValidStyle: "none",
    formFailedStyle: "none",
  });

  async function handleFormSubmit(event) {
    event.preventDefault();
    let confirmInput = Object.values(formInput).filter((value) => {
      return value.trim() !== "";
    });
    if (confirmInput.length === 2) {
      const result = await axios.get(
        `/api/login?email=${formInput.email}&pwd=${formInput.password}`
      );
      if (result.data.isMatch) {
        window.localStorage.setItem(
          "currUser",
          JSON.stringify({
            id: result.data.body._id,
            email: result.data.body.email,
            firstName: result.data.body.firstName,
          })
        );
        window.location.pathname = "/login";
      } else {
        setFormState({ ...formState, formFailedStyle: "block" });
        setTimeout(() => {
          setFormState({ ...formState, formFailedStyle: "none" });
        }, 3000);
      }
    } else {
      setFormState({ ...formState, formValidStyle: "block" });
      setTimeout(() => {
        setFormState({ ...formState, formValidStyle: "none" });
      }, 3000);
    }
           
    function handleInputChange(event) {
        const { id, value } = event.target
        setFormInput({ ...formInput, [id]:value } )
    }
  }

    return (
        <div className="container">
            <div className="container col-xl-5 col-lg-6 col-md-8 col-sm-10">
                <h1 className="text-center">Log In</h1>
                <form onSubmit={handleFormSubmit}>
                    <div className="form-group">
                        <label><i><strong> Email</strong></i></label>
                        <input type="email" className="form-control form-control-lg" id="email" onChange={handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1"><i><strong> Password</strong></i></label>
                        <input type="password" className="form-control form-control-lg" id="password" onChange={handleInputChange} />
                    </div>
                    <div className="button">
                        <button className="btn btn-primary" style={{ marginBottom: "10px" }} id="logIntoAccount">Submit</button>
                        <span className='pl-5'>Don't have an account yet? <a className="text-decoration-none text-white" href="/account/signup"><u>Sign up</u></a></span>
                    </div>
                </form>
                <div className="alert alert-danger" id="alertEmpty" style={{ display: formState.formValidStyle }}>
                    Please fill in missing information!
                </div>
                <div className="alert alert-danger" id="alertFailed" style={{ display: formState.formFailedStyle }}>
                    Email or password is invalid!
                </div>
                {''}
                <OAuth providers={['twitter','facebook','github','google','linkedin']}/>
            </div>
      </div>
  );
}

export default LogIn;
