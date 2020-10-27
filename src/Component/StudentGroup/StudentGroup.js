import React, { useEffect, useState } from 'react';
import StudentApi from '../../api/student';
import './StudentGroup.css';

function StudentGroup() {
  const [studentsGroup, setStudentsGroup] = useState({});

  useEffect(() => {
    StudentApi.getStudentGroups().then((groups) => {
      setStudentsGroup({ groups });
      console.log(groups);
    });
  }, []);

  return (
    <div className="student-overview">
      <h1>分组列表</h1>
      <div className="student-groups">
        {studentsGroup.groups &&
          studentsGroup.groups.map((group) => (
            <div className="group-name" key={group.groupName}>
              {group.groupName}
            </div>
          ))}
      </div>
    </div>
  );
}

export default StudentGroup;
