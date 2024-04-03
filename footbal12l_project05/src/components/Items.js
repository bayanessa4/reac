import React, { useState, useEffect } from 'react';

export default function Items() {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const url = "/teams.json";
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setTeams(data.clubs); // Set the fetched clubs into the state
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error('Error fetching data:', error);
        alert("There is a problem, come back later");
        setLoading(false); // Set loading to false even if there's an error
      }
    };

    fetchData(); // Call the async function to fetch data
  }, []);

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filter teams based on search query
  const filteredTeams = teams.filter((team) =>
    team.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ color: 'white' }}>
      <h1>Premier League 2015/16 Teams:</h1>
      {/* Search bar */}
      <input
        type="text"
        placeholder="Search teams..."
        value={searchQuery}
        onChange={handleSearchInputChange}
        style={{ marginBottom: '15px' }}
      />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {filteredTeams.map((team, index) => (
            <li key={index}>
              <img src={team.logo} alt={team.name} style={{ width: '30px', marginRight: '10px' }} /> {/* Display team logo */}
              {team.name} - {team.country}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
