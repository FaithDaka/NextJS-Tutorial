import React from 'react'
import PropTypes from "prop-types"

function Form({ title, target, onHandleChange, handleSubmit }) {
    Form.propTypes = {
        title: PropTypes.string.isRequired,
        target: PropTypes.string,
        handleSubmit: PropTypes.func,
        onHandleChange: PropTypes.func.isRequired 
    }
    
    return (
        <div className='form'>
            <h2>{title}</h2>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label>Item:</label>
                    <input type='text' value={target}
                        onChange={onHandleChange} required/>
                </div>
                <div className='form-group'>
                    <button type='submit' className='btn btn-primary'>Save</button>
                </div>
            </form>
        </div>
    )
}

export default Form