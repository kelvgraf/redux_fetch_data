import React from 'react';

const ChampDescription = ({ champData }) => {
  const name = (champData && champData.id ? champData.id : "sem nome");
  const title = (champData && champData.title ? champData.title : "sem título");
  const lore = (champData && champData.lore ? champData.lore : "sem lore");
  return (
    <section className="champData">
      <h1>{`${name}, ${title}`}</h1>
      <div className="loreCont">
        <p>{lore}</p>
      </div>
    </section>
  );
}

export default ChampDescription;
