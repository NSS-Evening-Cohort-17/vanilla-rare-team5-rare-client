import React, { useState, useEffect } from "react"
import { addCategory, getAllCategories } from "./CategoryManager";

export const CategoryForm = () => {
    const [category, setCategory] = useState([]);

    const handleControlledInputChange = (event) => {
        const newCategory = { ...category }
        let selectedVal = event.target.value
        // forms always provide values as strings. But we want to save the ids as numbers.
        if (event.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }
        newCategory[event.target.id] = selectedVal
        setCategory(newCategory)
    }

    useEffect(() => {
        getAllCategories()
            .then((newCategory) => {
                setCategory(newCategory);
                setIsLoading(false);
            });
    }, []);

    const handleClickSaveCategory = (event) => {
        event.preventDefault() //Prevents the browser from submitting the form

        addCategory(category)
    }

    return (
        <>
            <div>
                <div className="Category__text">
                    <label htmlFor="category"> Create a new category</label>
                    <input type="text" id="category" onChange={handleControlledInputChange} className="Category__label" placeholder="Add text" value={cat.label} />
                </div>
                <button className="Category__btn" onClick={handleClickSaveCategory}></button>
            </div>
        </>
    )
}