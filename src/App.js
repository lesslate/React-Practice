import React from 'react';



const foodILike =
  [
    {
      id: 1,
      name: "kimchi",
      rating: 3.0
    },
    {
      id=2,
      name: "kimbap",
      rating: 4.8
    },
    {
      id=3,
      name: "dduk",
      rating: 2
    }
  ];


function Food({ name })
{
  return <h1>i like {name}!</h1>
}


function App()
{
  return (
    <div>
      <h1>Hello</h1>
      {foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} />
      ))}
    </div>
  );
}

export default App;
