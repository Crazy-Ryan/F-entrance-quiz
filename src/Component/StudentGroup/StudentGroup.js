import React, { useState } from 'react';
import StudentApi from '../../api/student';
import './StudentGroup.css';

function StudentGroup() {
  const [studentsGroup, setStudentsGroup] = useState({});

  const handleClick = () => {
    StudentApi.getStudentGroups().then((groups) => {
      setStudentsGroup({ groups });
    });
  };
  return (
    <div className="student-overview">
      <h1>分组列表</h1>
      <button onClick={handleClick} type="button">
        分组学员
      </button>
      <div className="student-groups">
        {studentsGroup.groups &&
          studentsGroup.groups.map((group) => (
            <div className="student-group" key={group.groupName}>
              <h2 className="group-name">{group.groupName}</h2>
              <div className="student-list">
                {group.studentsInThisGroup.map((student) => (
                  <div className="student-box" key={student.id}>
                    {student.id}. {student.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default StudentGroup;
