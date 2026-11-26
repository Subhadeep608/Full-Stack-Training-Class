// Destructuring of propes 
function Profile({name, age, city}) {
  return (
    <>
      <div className="profile-card">
        <h3>{name}</h3>
        <h4>Age: {age}</h4>
        <span>City: {city}</span>
      </div>
    </>
  );
}

// const Profile = (props) =>{
//   return (
//     <>
//       <div className="profile-card">
//         <h3>{props.name}</h3>
//         <h4>Age: {props.age}</h4>
//         <span>City: {props.city}</span>
//       </div>
//     </>
//   );
// }

export default Profile;
