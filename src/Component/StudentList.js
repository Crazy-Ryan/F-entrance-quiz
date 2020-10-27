import React, { useEffect, useState } from 'react';
import StudentApi from '../api/student';
import './StudentList.css';

function StudentList() {
  const [students, setStudents] = useState({});

  useEffect(() => {
    StudentApi.getAllStudents().then((allStudents) => {
      setStudents({ all: allStudents });
    });
  }, []);

  return (
    <div className="student-overview">
      <h1>学员列表</h1>
      <div className="student-list">
        {students.all &&
          students.all.map((student) => (
            <div className="student-box" key={student.id}>
              {student.id}. {student.name}
            </div>
          ))}
      </div>
    </div>
  );
}

export default StudentList;
