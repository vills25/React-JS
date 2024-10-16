import React, { useRef, useState } from 'react';
import './StudentList.css';

const Student = ({ name, email, contactNumber, onDelete }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>{contactNumber}</td>
      <td>
        <button className="btn btn-danger" onClick={onDelete}>Delete</button>
      </td>
    </tr>
  );
};

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const nameREf = useRef(null);
  const emailRef = useRef(null);
  const contactnumberRef = useRef(null);

  const addStudent = (e) => {
    e.preventDefault();
    const name = nameREf.current.value;
    const email = emailRef.current.value;
    const contactNumber = contactnumberRef.current.value;

    if (name && email && contactNumber) {
      setStudents([...students, {
        id: Date.now(),
        name: name,
        email: email,
        contactNumber: contactNumber,
      }]);
      nameREf.current.value = "";
      emailRef.current.value = ""
      contactnumberRef.current.value = ""
    }
  };

  const deleteStudent = (id) => {
    setStudents(students.filter(student => student.id !== id));
  };

  return (
    <div className="container">
      <h1>Student Registration</h1>
      <form className="form-group" onSubmit={addStudent}>
        <div className="row">
          <div className="col-md-4">
            <label htmlFor="nameInput">Name:</label>
            <input type="text" className="form-control" id="nameInput" placeholder="Enter name" ref={nameREf} />
          </div>
          <div className="col-md-4">
            <label htmlFor="emailInput">Email:</label>
            <input type="email" className="form-control" id="emailInput" placeholder="Enter email" ref={emailRef} />
          </div>
          <div className="col-md-4">
            <label htmlFor="contactNumberInput">Contact Number:</label>
            <input type="text" className="form-control" id="contactNumberInput" placeholder="Enter contact number" ref={contactnumberRef} />
          </div>
        </div>
        <button type="submit" className="btn btn-primary mt-3">Add Student</button>
      </form>
      <table className="table table-striped mt-3">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Contact Number</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <Student
              key={student.id}
              name={student.name}
              email={student.email}
              contactNumber={student.contactNumber}
              onDelete={() => deleteStudent(student.id)} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;