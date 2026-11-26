import Profile from "./Profile";

function ProfileSection() {
  return (
    <>
      <section className="profile_section">
        {/* card-1  */}
      
          <Profile name="subham" age="22" city="bbsr"/>
        {/* card-2  */}
        
          <Profile name="rama" age="21" city="bdk"/>
        
        {/* card-3  */}
        
          <Profile name="gita" age="20" city="puri"/>
        
      </section>
    </>
  );
}

export default ProfileSection;
