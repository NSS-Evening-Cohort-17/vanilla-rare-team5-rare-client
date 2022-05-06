import react from "react";


export const CategoryList = () => {


    return (
        <>
            <div>
                <div className="category_title"> Categories</div>
                <div>
                    <ul>

                    </ul>
                </div>
                <div>
                    {category.map(cat =>
                        <CategoryForm
                            key={cat.id}
                            cat={cat}
                            handleDeletecat={handleDeletecat} />)}
                </div>
            </div>
        </>
    )
}