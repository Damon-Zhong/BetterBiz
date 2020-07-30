import React from 'react'

const SearchResult = (props) => {
    return (
        <div>
            <ul>
                {props.resultList.map((bus, index) => (<li key={index}>{bus}</li>))}
            </ul>
        </div>
    )
}

export default SearchResult;
