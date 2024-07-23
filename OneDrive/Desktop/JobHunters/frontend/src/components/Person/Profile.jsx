// Profile.jsx
import axios from "axios";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Context } from "../../main";

const Profile = () => {
  const { user, setIsAuthorized } = useContext(Context);
  const navigateTo = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/v1/user/logout",
        {
          withCredentials: true,
        }
      );
      setIsAuthorized(false);
      navigateTo("/login");
      toast.success(response.data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const renderAuthButton = () => {
    if (user) {
      return <button onClick={handleLogout}>Logout</button>;
    } else {
      return <button onClick={() => navigateTo("/login")}>Login</button>;
    }
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-header">
          <h2>Welcome, {user?.name || "Guest"}!</h2>
        </div>
        <div className="profile-content">
          <p>
            <span className="label">Email:</span> {user?.email || "N/A"}
          </p>
          <p>
            <span className="label">Role:</span> {user?.role || "N/A"}
          </p>
          <p>
            <span className="label">Contact:</span> {user?.phone|| "N/A"}
          </p>
        </div>
        <div className="profile-footer">{renderAuthButton()}</div>
      </div>
    </div>
  );
};

export default Profile;
