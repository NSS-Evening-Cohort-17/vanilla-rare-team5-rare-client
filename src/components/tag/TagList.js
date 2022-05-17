import React, { useState, useEffect } from "react"
import { TagForm } from "./TagForm";
import { getAllTags } from "../../modules/TagManager";
import './Tags.css'

export const TagList = () => {
    const [tags, setTags] = useState([]);

    // const handleDeleteCat = (id) => {
    //     //invoke the delete function in AnimalManger and re-direct to the animal list.
    //     // setIsLoading(true);
    //     deleteCategory(id)
    //     // .then(() =>
    //     // navigate("/CategoryList")
    //     // );


    useEffect(() => {
        getAllTags()
            .then((allTags) => {
                setTags(allTags);
                // setIsLoading(false);
            });
    }, []);

    return (
        <>
            <div>
                <div className="tag_title"> Tags</div>
                <div>
                    Tags List
                </div>
                <div className="tag_list">
                    <ul>
                        {tags.map((tag) => {
                            return <li key={tag.id}>
                                {tag.label}
                            </li>
                        })}
                    </ul>
                </div>
                <div className="tag_form">
                    <TagForm />
                </div>
            </div>
        </>
    )
}


// import React, {useEffect, useState} from "react"
// import { useHistory } from "react-router-dom";
// import {Tag} from "./Tags"
// import {getAllTags} from "../../modules/TagManager"
// import "./TagList.css"

// export const TagList = () => {
//     const [tags, setTags] = useState([]);
//     const history = useHistory();

//     useEffect (() => {
//         getAllTags().then(tagsFromAPI => {
//             setTags(tagsFromAPI)
//         })
//     }, []);

//     return (
//         <>
//             <section className="tag-list">
//                 <h1>Tags</h1>
//                 <div style={{  }}>
//                     <button style={{ display: "flex", margin: "auto" }} onClick={() => history.push("/tags/create")}>
//                         Create a new tag
//                     </button>
//                     <div className="container-cards">
//                         {tags.map(tag => <Tag key={tag.id} tag={tag} />)}
//                     </div>
//                 </div>
//             </section>
//         </>
//     )
// }

// // export const TagList = () =>{
//     // const [tags, setTags] = useState

//     // useEffect(()=>{
//     //     getAllTags().then(newTags => (
//     //         setTags(newTags);
//     //     });
//     // }, []);

//     // console.log(tags)

// //     return(
    
// //         <div className="tags-input-container">

// //         {
// //             <span className="text">Yo</span> }
// //         </div>
// //  )}

//   //<input> </input>   
//         //<span className="text">Yo</span>
