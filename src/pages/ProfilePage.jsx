import React, { useState } from "react";
// import UpdatePassword from "../components/Profile/UpdatePassword";
// import UpdateProfile from "../components/Profile/UpdateProfile";

export default function ProfilePage(props) {
  const [displayUpdateProfile, setDisplayUpdateProfile] = useState(false);
  const [displayUpdatePassword, setDisplayUpdatePassword] = useState(false);
  const { user, authenticate } = props;

  function profileToggle() {
    setDisplayUpdateProfile(!displayUpdateProfile);
  }

  function passwordToggle() {
    setDisplayUpdatePassword(!displayUpdatePassword);
  }

  //  if there is no user, you should be redirected to /login
  // A "middleware" that is going to check if you are validated or not
  return (
    <div>
      <h1>Hi, {user.username}</h1>
      <img
        src={user.profilePic}
        width="200px"
        alt={`Profile picture for ${user.username}`}
      />
      <div>
        <button onClick={profileToggle}>Update profile</button>
        {/* {displayUpdateProfile ? <UpdateProfile /> : null} */}
        {displayUpdateProfile &&
          {
            /* <UpdateProfile user={user} authenticate={authenticate} /> */
          }}
        <br />
        <button onClick={passwordToggle}>Update Password</button>
        {/* {displayUpdatePassword && <UpdatePassword />} */}
        <br />
        <button>Delete Account</button>
      </div>
    </div>
  );
}
