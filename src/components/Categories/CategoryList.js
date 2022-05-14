import React, { useState, useEffect } from "react"
import { CategoryForm } from "./CategoryForm";
import { getAllCategories } from "../../modules/CategoryManager";
// import './Category.css'

export const CategoryList = () => {
    const [categories, setCategories] = useState([]);

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