import { useState, useEffect } from 'react';
import axios from 'axios';

function Students() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/students')  // Django API
      .then(response => setStudents(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2>Students List</h2>
      <ul>
        {students.map(student => (
          <li key={student.id}>{student.name} - {student.grade}</li>
        ))}
      </ul>
    </div>
  );
}

export default Students;
