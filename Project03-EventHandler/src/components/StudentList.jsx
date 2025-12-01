import StudentCard from "./StudentCard";

const StudentList = ({ students, toggleDetails, deleteStudent, markStatus }) => {
  if (students.length === 0) {
    return <p className="text-center text-gray-600 mt-10">No Students Found</p>;
  }

  return (
    <>
      {students.map((stu) => (
        <StudentCard
          key={stu.id}
          student={stu}
          toggleDetails={toggleDetails}
          deleteStudent={deleteStudent}
          markStatus={markStatus}
        />
      ))}
    </>
  );
};

export default StudentList;
