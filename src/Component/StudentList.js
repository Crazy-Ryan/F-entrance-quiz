import React, { useEffect, useState } from 'react';
import StudentApi from '../api/student';
import 'babel-polyfill';

function StudentList() {
  const arr = ['one', 'two'];
  const [students, setStudents] = useState({ all: arr });

  useEffect(() => {
    StudentApi.getAllStudents().then((allStudents) => {
      console.log(allStudents);
      setStudents({ all: allStudents });
    });
  });

  return (
    <>
      {students.all.map((student) => (
        <div>
          {student.id}
          {student.name}
        </div>
      ))}
    </>
  );
}

export default StudentList;
