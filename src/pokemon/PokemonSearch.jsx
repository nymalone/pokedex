import React from "react";

const PokeSearch = (props) => {

  let filteredArray = props.pokeList.filter((e) => {
   return e.name.toLowerCase().includes(props.nameList.toLowerCase());
  });

  const newArray = filteredArray.map((e) => {
      let str = e.url;
      str = str.substring(34);
      return str = str.substring(0, str.length - 1);
  });

  for(let i = 0; i < newArray.length; i += 1){
      filteredArray[i].position = newArray[i]
  }

  return (
      <div className="contain">
        <div className="list">
          {filteredArray.map((e,i) => (
            <div key={i}>
              <div className="card">
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${e.position}.png`} alt={e.name} />
                <strong>{e.name}</strong>
              </div>
            </div>
          ))}
        </div>
    </div>
  );
}

export default PokeSearch