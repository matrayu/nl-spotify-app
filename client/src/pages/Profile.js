import { useState, useEffect } from "react";
import { catchErrors } from "../utils";
import { getCurrentUserProfile } from "../spotify";
import { StyledHeader } from "../styles";

const Profile = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getCurrentUserProfile();
      setProfile(data);
    };

    catchErrors(fetchData());
  }, []);

  return (
    <>
      <StyledHeader type="user">
        {profile && (
          <div>
            <h1>{profile.display_name}</h1>
            <p>{profile.followers.total} Followers</p>
            {profile.images.length && profile.images[0].url && (
              <img src={profile.images[0].url} alt="Avatar" />
            )}
          </div>
        )}
      </StyledHeader>
    </>
  );
};

export default Profile;
