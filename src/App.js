import React from 'react';
import PropTypes from 'prop-types';

const App =()=>{
  const profiles = [
    {
      name: "Taro",
      age: 109
    },
    {
      name: "Hanako",
      age: 20
    },
    {
      name: "Hanaki",
      age: 12
    }
  ];
  return (
    <div>
      {
        profiles.map((profile, index)=> {
          return <User name={profile.name} age={profile.age}　key={index}/>
        })
      }
    </div>
  )
}
const User =(props)=>{
return <div>I am {props.name}: {props.age}</div>
}

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}

export default App;