import React from 'react';
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
      name: "noname",
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

User.defaultProps = {
  age: 1
}

export default App;