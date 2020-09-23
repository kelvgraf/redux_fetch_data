import React from "react";
import { connect } from "react-redux";
import ChampDescription from "./ChampDescription";
import FetchingData from './FetchingData';

const mapStateToProps = (state) => ({
  loading: state.loading,
  payload: state.payload,
  selectedChamp: state.selectedChamp
});

const Output = ({ payload, loading, selectedChamp }) => {
  const render = () => {
    switch(selectedChamp){
      case null:
        return (
          loading ? <FetchingData /> : <p>Selecione um campeão</p>
        )
      default:
        return(
          loading ? <FetchingData /> : <ChampDescription champData={champ}/>
        )
    }


  }

  const data = payload;
  const champ = data && data.data && data.data[selectedChamp];
  return render()
};

export default connect(mapStateToProps)(Output);
