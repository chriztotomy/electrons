
import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js'
import './Home.css'
const supabase = createClient('https://nutlagdufpfpezhovzqy.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im51dGxhZ2R1ZnBmcGV6aG92enF5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk2MjQ2MTYsImV4cCI6MjAxNTIwMDYxNn0.ORhkozAiS7rfmuqgvyCOTREFwYTydOwQBolszpSg3ss')

function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [tags, setTags] = useState([]);
  const [selectedTag, setSelectedTag] = useState("");

  const checkUser = async () => {
    const { data } = await supabase.auth.getSession();
    if (data?.session != null) {
      setIsAuthenticated(true);
      console.log(data);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  return (
    <div className='HomeContainer'>
      {isAuthenticated ? showHomeContent() : showLoginContent()}
    </div>
  );

  function showLoginContent() {
    return (
      <div className=''>
        <h1>Not Logged In</h1>
      </div>
    )
  }

  function showHomeContent() {
    return (
      <div className='HomeContent'>
        <SideBar tags={tags} setTags={setTags} selectedTag={selectedTag} setSelectedTag={setSelectedTag} />
        <div className='RightSide'>
          Contacts List
        </div>
      </div>
    )
  }
}



const SideBar = ({ tags, setTags, selectedTag, setSelectedTag }) => {
  const handleAddTag = () => {
    if (selectedTag !== "" && !tags.includes(selectedTag)) {
      setTags([...tags, selectedTag]);
      setSelectedTag("");
    }
  };

  const handleRemoveTag = (tag) => {
    setTags(tags.filter((t) => t !== tag));
  };

  return (
    <div className='LeftSide'>
      <div className='Branding'>Logo Here</div>
      <button className='SideButton'>Favorites</button>
      <button className='SideButton'>Import Contacts</button>
      <div className="dropdown">
        <button className="dropbtn">Add Tag</button>
        <div className="dropdown-content">
          <input
            type="text"
            placeholder="Enter tag name"
            value={selectedTag}
            onChange={(e) => setSelectedTag(e.target.value)}
          />
          <button  className='dropbtn' onClick={handleAddTag}>Add</button>
        </div>
      </div>
      <div className="tags">
        {tags.map((tag) => (
          <div key={tag} className="tag">
            {tag}
            <button className='crossbt' onClick={() => handleRemoveTag(tag)}>x</button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Home;


