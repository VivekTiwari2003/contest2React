import React, { useEffect, useState } from 'react';


const Profile = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (user) {
      fetch(`https://dummyjson.com/users/${user.id}`)
        .then(res => res.json())
        .then(data => setUserData(data));
    }
  }, [user]);


  

  return (
    <center>
    <div>
      {userData ? (
        <div>
          <p>Email: {userData.email}</p>
          <p>Password: {userData.password}</p>
          {/* Display other user information */}
        </div>
      ) : (
        <p></p>
      )}
    </div>
    </center>
  );
};

export default Profile;
