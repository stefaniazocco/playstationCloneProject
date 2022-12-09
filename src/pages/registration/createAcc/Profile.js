import React from "react";
import "./profile.scss";

export const Profile = ({ formData, setFormData }) => {
  return (
    <div className="profile-wrapper">
      <h6>
        Enter your online ID and your name. <br />
        Other players can see your online ID in online features such as games,
        chats, and friend searches. It's recommended that you don't include your
        real name or personal information. <br />
      </h6>
      <h6>
        This name will be used in emails that will be sent from PlayStation.
        Other players won't be able to see it.
      </h6>

      <div className="profile-single-input">
        <div className="input-container">
          <p>Online ID</p>
          <input
            type="text"
            value={formData.userName}
            onChange={(event) =>
              setFormData({ ...formData, userName: event.target.value })
            }
          />
        </div>
        <div className="input-container">
          <p>Name</p>
          <input
            type="text"
            placeholder="First Name"
            value={formData.firstName}
            onChange={(event) =>
              setFormData({ ...formData, firstName: event.target.value })
            }
          />
        </div>
        <div className="input-container">
          <input
            type="text"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={(event) =>
              setFormData({ ...formData, lastName: event.target.value })
            }
          />
        </div>
      </div>
    </div>
  );
};
