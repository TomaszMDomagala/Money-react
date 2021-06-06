import { useState } from 'react'
import '../spendings_style/Spendings.css'

const AddSpending = ({ onAdd }) => {
    const [title, setTitle] = useState('')
    const [value, setValue] = useState('')
    const [description, setDescription] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        onAdd({ title, value, description })

        setTitle('')
        setValue('')
        setDescription('')
    }

    return (
        <form className="add__form" onSubmit={onSubmit}>
            <h3 className="add__title">Add item</h3>
            <div className="add__item">
                <label className="add__title"></label>
                <input 
                    type="text"
                    placeholder="Title"
                    value={title}
                    className="add__input"
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div className="add__item">
                <label className="add__value"></label>
                <input 
                    type="text"
                    placeholder="Value"
                    value={value}
                    className="add__input"
                    onChange={(e) => setValue(e.target.value)}
                />
            </div>
            <div className="add__item">
                <label className="add__desc"></label>
                <input 
                    type="text"
                    placeholder="Description"
                    value={description}
                    className="add__input"
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div> 
            <input type='submit' value='Add' className='btn' />           
        </form>
    )
}

export default AddSpending
