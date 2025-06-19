import { useState } from "react";
import StudentCard from " ./comp/card.jsx";
const CreateStudent = (props)=>{
    const [name, setName] = useState("");
    const [city, setCity] = useState("");
    const [age, setAge] = useState("0");
    const formContainerStyle = {
        width: "60%",
        background: "#121a97",
        padding: "20px",
        borderRadius: "15px",
        margin: "15px auto"
    }

    const honeStyle = {
        textDecoration: "underline",
        color: "white",
        textAlign: "center"
    }
    const inputStyle={
        padding: "8px",
        margin: "5px",
        borderRadius: "5px",
        border: "1px solid white",
        boxShadow: "2px 2px 5px gray",
        width: "80%"
    }
    return (
        <div style={formContainerStyle}>
            <h1 style={honeStyle}>Create Student Form</h1>
            
            <input value={name} onChange={(e)=>{setName(e.target.value)}} style={inputStyle} type="text" placeholder="Student name" />
            <input value={age} onChange={(e)=>{setAge(e.target.value)}} style={inputStyle} type="number" placeholder="Student age" />
            <input value={city} onChange={(e)=>{setCity(e.target.value)}} style={inputStyle} type="text" placeholder="Student city" />
            <button onClick={()=>{
                props.addStd(name, age, city)
                setName("");
                setAge("0");
                setCity("");
            }}>Add Student</button>
        </div>
    );
}
const App = ()=>{
    // const studentName = "Mahesh";
    // const age = 24;
    // const city = "Bangalore";
    const student = {
        sname: "Kamlesh",
        age: 22,
        city: "Delhi"
    }
    // const students = [
    //     { sname: "Kamlesh", age: 22, city: "Delhi" },
    //     { sname: "Ramesh", age: 27, city: "Asam" },
    //     { sname: "Suresh", age: 19, city: "Pune" },
    //     { sname: "Mukesh", age: 25, city: "Chennai" },
    // ]
    const [students, setStudents] = useState([
        { sname: "Kamlesh", age: 22, city: "Delhi" },
    ])

    const addStudent = (sname, age, city)=>{
        let newStudent = {sname, age, city};
        setStudents([...students, newStudent])
    }
    return (
        <div>
            <h1>Total available students #{students.length}</h1>
            <CreateStudent addStd={addStudent}/>
            {
                students.map(function(std){
                    return <StudentCard student={std}></StudentCard>
                })
            }
        </div>
    );
}

export default App;