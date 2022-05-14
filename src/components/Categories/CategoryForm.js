import React, { useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { addCategory } from "./CategoryManager"
// import './Category.css'

export const CategoryForm = () => {
    const [category, setCategory] = useState({})

    const navigate = useHistory()

    //button function:
    const handleClickSaveCategory = () => {
        // event.preventDefault() //Prevents the browser from submitting the form

        addCategory(category)
            .then(() => navigate.push("/category"))
    }

    //new category text:
    const handleInput = (event) => {
        const newCategory = { ...category }
        let selectedVal = event.target.value

        newCategory[event.target.id] = selectedVal
        setCategory(newCategory)
    }

    return (
        <>
            <div>
                <div className="cat__text">
                    <label htmlFor="category"> Create a new category</label>
                    <input type="text" id="category" onChange={handleInput} required autoFocus className="Category__label" placeholder="Add text" value={category.label} />
                </div>
                <button className="cat__btn" onClick={handleClickSaveCategory}></button>
            </div>
        </>
    )
}