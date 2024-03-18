import React, { useState, useEffect } from 'react';
// import img from '../components/Faculty/users.png';
import { useNavigate } from 'react-router-dom';
import './UserProfileCss.css';
import UserDetails from './userdetails'

function ProfileCard(props) {
    const navigate = useNavigate();

    const handleDetailsClick =() => {
        navigate('/ProjectDesc');
    };
    return (
        <div className="container9">
            <div className="row">
                <div className="col-md-3">
                    <img src={props.image} alt="student pic" className="profile-img" />
                </div>
                <div className="col-md-9">
                    <div className="profile-info">
                        <div className="profile-info-item">
                            <h3>Name: {props.name}</h3>
                        </div>
                        <div className="profile-info-item">
                            <h3>Roll No: {props.rollno}</h3>
                        </div>
                        <div className="profile-info-item">
                            <h3>Email Id: {props.email}</h3>
                        </div>
                        <div className="profile-info-item">
                            <h3>Resume Link: {props.resume}</h3>
                        </div>
                        
                        <div className="table-container">
                            <h2>Projects History</h2>
                            <table>
                                <thead>
                                    <tr>
                                        <th className='tableid'>Sr.No.</th>
                                        <th className='tableproject'>Project Name</th>
                                        <th className='tablestatus'>Accepted/Rejected</th>
                                        <th>Professor Name</th>
                                        {/* <th>Details</th> */}
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function ProfileCard1(project) {
    const navigate = useNavigate();

    const handleDetailsClick =() => {
        navigate('/ProjectDesc');
    };
    return (
        <div className="container8">
            <div className="row8">
                {/* <div className="col-md-3">
                    <img src={user.image} alt="student pic" className="profile-img" />
                </div> */}
                <div className="col-md-98">
                    <div className="profile-info1">                        
                        <div className="table-container1">
                            <h2></h2>
                            <table>
                                <tbody>
                                    {/* Sample table data */}
                                    <tr>
                                        <td className='tableid'>{project.id}</td>
                                        <td className='tableproject'>{project.name}</td>
                                        <td className='tablestatus'>{project.status}</td>
                                        <td>{project.prof}</td>
                                        {/* <td><button onClick={() => handleDetailsClick()}>Details</button></td> */}
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function UserProfile(props){
  const  myData = props.logedInStudentData
      console.log("data in userProfile: "+myData);
//   const [oneUserData, setOneUserData] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(`https://mohdnasar.vercel.app/api/user/faculty/abhas/${myData}`); //"abhas" should be replaced by "unique id" of professor signed in
//         if (!response.ok) {
//           throw new Error('Failed to fetch oneUserData data');
//         }
//         const data = await response.json();
//         setOneUserData(data);
        
//         console.log(data);
//       } catch (error) {
//         console.error('Error fetching oneUserData data:', error);
//       }
//     };

//     fetchData();
//   }, []);

    return (
        <div className='flexcard8'>
            
                   <ProfileCard  
                    name  ={myData.name}
                    email = {myData.email}
                    //image = {item.image}
                    interest = "no"
                   resume ={myData.resumeLink}
                    rollno={myData.rollno}
                    image="sjnv"
                   />
                            
                              {/* {
                UserDetails.UserDetails.map((item) => {
            return (
                   <ProfileCard  
                    name  ={item.name}
                    email = {item.email}
                    //image = {item.image}
                    interest = {item.interest}
                    branch ={item.branch}
                    rollno={item.rollno}
                    image={item.image}
                   />
                  )
                })
            } */}
            {/* {
                UserDetails.Projects.map((item)=>{
                    return(
                        <ProfileCard1
                         id={item.id}
                         name={item.name}
                         status={item.status}
                         prof={item.prof}
                        />
                    )
                }
                )
            } */}
        
        </div>
      )
}

export default UserProfile;