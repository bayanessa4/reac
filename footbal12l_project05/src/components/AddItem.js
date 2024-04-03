import React, { useState } from 'react';

function AddItem() {
  const [footballArray, setFootballArray] = useState([])
  const [name , setName] = useState('')
  const [description , setDescription] = useState('')
  const [teamCode , setTeamCode] = useState('')
  const [teamLogo , setTeamLogo] = useState('')

  const teamSubmit = () => {
    setFootballArray([{logo:teamLogo,name: name, description: description, code: teamCode}])
  }
  return (
    <div className="container">
      <h2>Add Item</h2>
      <form>
        {/* Form fields */}
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" onChange={event => setName(event.target.value)} />
        </div>
        <div>
          <label htmlFor="description">Team Description:</label>
          <textarea
            id="description" name="description" onChange={event => setDescription(event.target.value)} />
        </div>
        <div>
          <label htmlFor="Code">Team Code:</label>
          <input type="String" id="Code" name="TeamCode" onChange={event => setTeamCode(event.target.value)} />
        </div>
        <div>
          <label>Team Logo:</label>
          <input type="text" id="logo" name="TeamLogo" onChange={event => setTeamLogo(event.target.value)} />
        </div>
        <button onClick={teamSubmit}>Add Item</button>
      </form>
      {footballArray.map((item, index) => (
        <div key={index}>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <p>{item.TeamCode}</p>
          <img src={item.logo} alt={item.name} width={50} height={50} />
        </div>
      ))}
    </div>
  );
}

export default AddItem;