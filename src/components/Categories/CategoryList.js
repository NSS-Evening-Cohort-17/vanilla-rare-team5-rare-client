import React, { useState, useEffect } from "react"
import { CategoryForm } from "./CategoryForm";
// import { useParams } from "react-router-dom"
import { getAllCategories } from "./CategoryManager";
// import './Category.css'

export const CategoryList = () => {
    const [categories, setCategories] = useState([]);

    // const handleInput = (event) => {
    //     const newCategory = { ...category }
    //     let selectedVal = event.target.value
    //     // forms always provide values as strings. But we want to save the ids as numbers.
    //     if (event.target.id.includes("Id")) {
    //         selectedVal = parseInt(selectedVal)
    //     }
    //     newCategory[event.target.id] = selectedVal
    //     setCategories(newCategory)
    // }

    // const navigate = useNavigate()

    // const handleDeleteCat = (id) => {
    //     //invoke the delete function in AnimalManger and re-direct to the animal list.
    //     // setIsLoading(true);
    //     deleteCategory(id)
    //     // .then(() =>
    //     // navigate("/CategoryList")
    //     // );


    useEffect(() => {
        getAllCategories()
            .then((allCategories) => {
                setCategories(allCategories);
                // setIsLoading(false);
            });
    }, []);

    return (
        <>
            <div>
                <div className="cat_title"> Categories</div>
                <div>
                    Category List
                </div>
                <div className="cat_list">
                    <ul>
                        {categories.map((cat) => {
                            return <li key={cat.id}>
                                {cat.label}
                            </li>
                        })}
                    </ul>
                </div>
                <div className="cat_form">
                    <CategoryForm />
                </div>
            </div>
        </>
    )
}