
import { useState } from "react";

const StudentCard =(props)=>{
    console.log(props.student)
    const [likes, setLikes] = useState(0);

    const stdCardStyle = {
        border: "2px solid gray",
        padding: "15px",
        margin: "10px",
        borderRadius: "10px",
        backgroundColor: "#eee",
        boxShadow: "0 4px 4px gray"
    }

    return (
        <div style={stdCardStyle}>
            <h1>Student: {props.student.sname}</h1>
            <p>Age: <b>{props.student.age}</b></p>
            <p>Address: <b>{props.student.city}</b></p>
            <button onClick={()=>{
                setLikes(likes+1)
            }}>Like #{likes}</button>
        </div>
    );
}
export default StudentCard;


