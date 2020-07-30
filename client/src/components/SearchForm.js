import React from 'react'

const SearchForm = (props) => {
    return (
        <div>
            <form>
                <div className="form-group">
                    <label for="busName">Business Name</label>
                    <input type="text" className="form-control" id="busName" />
                    {/* <label for="busName">Business Name</label>
                    <input type="text" className="form-control" id="busName" /> */}
                </div>
               
                <button onClick={props.handleFormSubmit} type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default SearchForm;
