import React from "react";
import Profile from "./Profile";
import "./App.css";

function App() {
  const users = [
    {
      id: 1,
      name: "Leanne Graham",
      role: "Frontend Developer",
      avatarUrl: "https://api.dicebear.com/9.x/personas/svg?seed=Leanne"
    },
    {
      id: 2,
      name: "Ervin Howell",
      role: "Backend Developer",
      avatarUrl: "https://api.dicebear.com/9.x/personas/svg?seed=Ervin"
    },
    {
      id: 3,
      name: "Clementine Bauch",
      role: "UI/UX Designer",
      avatarUrl: "https://api.dicebear.com/9.x/personas/svg?seed=Clementine"
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      role: "Project Manager",
      avatarUrl: "https://api.dicebear.com/9.x/personas/svg?seed=Patricia"
    },
    {
      id: 5,
      name: "Chelsey Dietrich",
      role: "QA Engineer",
      avatarUrl: "https://api.dicebear.com/9.x/personas/svg?seed=Chelsey"
    },
    {
      id: 6,
      name: "Mrs. Dennis Schulist",
      role: "DevOps Engineer",
      avatarUrl: "https://api.dicebear.com/9.x/personas/svg?seed=Dennis"
    },
    {
      id: 7,
      name: "Kurtis Weissnat",
      role: "Fullstack Developer",
      avatarUrl: "https://api.dicebear.com/9.x/personas/svg?seed=Kurtis"
    }
  ];

  return (
    <div className="app">
      <h1>User Profiles</h1>
      <div className="profile-list">
        {users.map((user) => (
          <Profile
            key={user.id}
            name={user.name}
            role={user.role}
            avatarUrl={user.avatarUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default App;