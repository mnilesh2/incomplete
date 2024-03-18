import React,{useState,useEffect} from 'react';
import './Requests.css';

const Contacts = [
  {
      project: 'Web Dev',
      name: "Pavani Priya",
      department: '8919047022',
      rollNo:"220xxx",
      email: "pavanipriya6124@gmail.com"
  },
  {
    project: 'Web Dev',
    name: "Pavani Priya",
    department: '8919047022',
    rollNo:"220xxx",
    email: "pavanipriya6124@gmail.com"
},{
  project: 'Web Dev',
  name: "Pavani Priya",
  department: '8919047022',
  rollNo:"220xxx",
  email: "pavanipriya6124@gmail.com"
},{
  project: 'Web Dev',
  name: "Pavani Priya",
  department: '8919047022',
  rollNo:"220xxx",
  email: "pavanipriya6124@gmail.com"
},{
  project: 'Web Dev',
  name: "Pavani Priya",
  department: '8919047022',
  rollNo:"220xxx",
  email: "pavanipriya6124@gmail.com"
},{
  project: 'Web Dev',
  name: "Pavani Priya",
  department: '8919047022',
  rollNo:"220xxx",
  email: "pavanipriya6124@gmail.com"
},{
  project: 'Web Dev',
  name: "Pavani Priya",
  department: '8919047022',
  rollNo:"220xxx",
  email: "pavanipriya6124@gmail.com"
},{
  project: 'Web Dev',
  name: "Pavani Priya",
  department: '8919047022',
  rollNo:"220xxx",
  email: "pavanipriya6124@gmail.com"
},
]

const FacultyCard = (props) => {
  const x = "65f6e6d7b90787bc4fbdbabf";

  return (
    props.id === x ?
      props.registered.length > 0 ?
        props.registered.map((student, index) => (
          <div key={index} className="facultycard">
            <h2 className='BC'>Project: {student.project}</h2>
            <p className='info'>Name: {student.name}</p>
            <p className='info'>Department: {student.department}</p>
            <p className='info'>Roll Number: {student.rollNo}</p>
            <p className='info'>Email: {student}</p>
            <button className="accept-button">ACCEPT</button>
            <button className="reject-button">REJECT</button>
          </div>
        ))
        : <div className='facultycard'><h1>No student has requested this project.</h1></div>
      : <div></div>
  );
};

const EnrolledStudents = () => {
  const [facultyData, setFacultyData] = useState(null);
  const id = '65f6ed417188a428b0764b06';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://cs253backederror404teamnotfoundmohammaadnasarsiddiqui.vercel.app/api/user/faculty/abhas');
        if (!response.ok) {
          throw new Error('Failed to fetch faculty data');
        }
        const data = await response.json();
        setFacultyData(data);
      } catch (error) {
        console.error('Error fetching faculty data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className='MC'>
        {facultyData && facultyData.projects.map((item, index) => (
          <FacultyCard key={index} id={item._id} registered={item.studentsEnrolled} />
        ))}
      </div>
    </div>
  );
};

export default EnrolledStudents;