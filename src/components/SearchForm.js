import React from 'react'

export default function SearchForm(props) {
    return (
        <div className="container">
        <form>
            <div className="form-group">
                <input
                    onChange={props.handleInputChange}
                    value={props.value}
                    name="search"
                    type="text"
                    className="form-control"
                    placeholder="Search For an Employee"
                    id="search"
                />
                <br />
                <button onClick={props.handleFormSubmit} className="btn btn-primary">
                    Search
        </button>
            </div>
        </form>
        </div>
    )
}
