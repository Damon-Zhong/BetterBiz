import React from 'react'

const SearchForm = (props) => {
    return (
        <div>
            <form>
                <div class="form-group">
                    <label for="busName">Business Name</label>
                    <input type="text" class="form-control" id="busName" />
                    {/* <label for="busName">Business Name</label>
                    <input type="text" class="form-control" id="busName" /> */}
                </div>
               
                <button onClick={props.handleFormSubmit} type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default SearchForm;
