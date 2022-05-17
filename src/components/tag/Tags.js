import React from "react"
// import "./Tags.css"

export const Tag = ({tag}) => {
  return (
      <div className="card">
          <div className="tag-content">
              <h3><span className="tag__title">{tag.label}
              <button type="button" className="edit-btn">Edit</button>
              <button type="button" className="delete-btn">Delete</button>
              </span></h3>
          </div>
      </div>
  )
}

// export const Tags = () => {
// //  const [tag, SetTag] = useState({name:""});


// const [isLoading, setIsLoading] = useState(false);

// const handleSubmit = (e) => {
//     e.preventDefault();
// alert('Tag added!')

//    return(
//     <div className="eventForm">
//         <h2></h2>

//         {/* <form onSubmit={handleSubmit}>
//         <label>Tag</label>
//         <input type="text"  value={name} 
//               onChange={(e) => setTag(t.target.value)}/>
//         </form> */}
//     </div>
//    )}

// }
// export const Tags = () =>{

//     const [input, setInput] = useState('');
//     const [tags, setTags] = useState([]);

//     <div className="container">
//         {tags.map((tag) => <div className="tag">{tag}</div>)}
//     <input
//         value={input}
//         placeholder="Enter a tag"
//         onKeyDown={onKeyDown}
//         onKeyUp={onKeyUp}
//         onChange={onChange}/>
//     </div>

//     const onChange = (e) => {
//         const { value } = e.target;
//         setInput(value);
//     };

//     const onKeyDown = (e) => {
//         const { key } = e;
//         const trimmedInput = input.trim();
      
//         if (key === ',' && trimmedInput.length && !tags.includes(trimmedInput)) {
//           e.preventDefault();
//           setTags(prevState => [...prevState, trimmedInput]);
//           setInput('');
//         }
//       };
        
//     if (key === "Backspace" && !input.length && tags.length) {
//         e.preventDefault();
//         const tagsCopy = [...tags];
//         const poppedTag = tagsCopy.pop();

//         setTags(tagsCopy);
//         setInput(poppedTag);
//     }

//     setIsKeyReleased(false);

//     const onKeyUp = () => {
//     setIsKeyReleased(true);
//     }

// };
   
