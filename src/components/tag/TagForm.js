import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import { addTag } from "../../modules/TagManager"
import './Tags.css'

export const TagForm = () => {
    const [tag, setTag] = useState({})

    const navigate = useHistory()

    //button function:
    const handleClickSaveTag = () => {
        // event.preventDefault() //Prevents the browser from submitting the form

        addTag(tag)
            .then(() => navigate.push("/tag"))
    }

    //new category text:
    const handleInput = (event) => {
        const newTag = { ...tag }
        let selectedVal = event.target.value

        newTag[event.target.id] = selectedVal
        setTag(newTag)
    }

    return (
        <>
            <div>
                <div className="tag__text">
                    <label htmlFor="tag"> Add A Tag</label>
                    <br/>
                    <br/>
                    <input type="text" id="tag" onChange={handleInput} required autoFocus className="Tag__label" placeholder="Add Tag" value={tag.label}  />
                </div>
                <br/>
                {/* <Link to={"/tag"}> */}
                <button className="tag__btn" onClick={handleClickSaveTag}> Submit</button>
                {/* </Link> */}
            </div>
        </>
    )
}


// import React from "react"
// import { useEffect, useState } from "react"
// import { useParams, useHistory } from "react-router-dom"
// import { addTag, getTagById } from "../../modules/TagManager"


// export const TagForm = () => {
//     const { tagId } = useParams()
//     const [tag, setTag] = useState({})
//     const navigate = useHistory()
//     const editMode = tagId ? true : false

//     const handleControlledInputChange = (event) => {
//         const newTag = Object.assign({}, tag)
//         newTag[event.target.name] = event.target.value
//         setTag(newTag)
//     }

//     useEffect(() => {
//         if (editMode) {
//             getTagById(tagId).then((res) => {
//                 setTag(res)
//             })
//         }
//     }, [])

//     const constructNewTag = () => {
//          {addTag({label: tag.label})
//             .then(() => navigate.push("/tags"))
//         }
//     }

//     return (
//         <form className="tagForm">
//             <h2 className="tagForm__title">{"Add Tag"}</h2>
//             <fieldset>
//                 <div className="form-group">
//                     <label htmlFor="label">Label</label>
//                     <input type="text" name="label" required autoFocus className="form-control"
//                         placeholder="Tag Label"
//                         defaultValue={tag.label}
//                         onChange={handleControlledInputChange}
//                     />
//                 </div>
//             </fieldset>
//             <button type="submit"
//                 onClick={evt => {
//                     evt.preventDefault()
//                     constructNewTag()
//                 }}
//                 className="btn btn-primary">
             
//             </button>
//         </form>
//     )
// }

