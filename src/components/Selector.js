import React from "react";
import { connect } from "react-redux";
import { getChampData } from "../dataFlow/actions";

const mapDispatchToProps = (dispatch) => {
  return {
    getChampData: (uri, selectedChamp) => dispatch(getChampData(uri, selectedChamp))
  };
};

const Selector = ({ getChampData }) => {
  const AATROX_IMG = "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Aatrox_0.jpg";
  const URGOT_IMG = "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Urgot_0.jpg";
  const URGOT_DATA = "http://ddragon.leagueoflegends.com/cdn/10.19.1/data/pt_BR/champion/Urgot.json"
  const AATROX_DATA = "http://ddragon.leagueoflegends.com/cdn/10.19.1/data/pt_BR/champion/Aatrox.json"

  return (
    <div>
      <img
        onClick={() => getChampData(AATROX_DATA, "Aatrox")}
        alt="champ_img"
        className="champIMG"
        src={AATROX_IMG}
      ></img>

      <img
        onClick={() => getChampData(URGOT_DATA, "Urgot")}
        alt="champ_img"
        className="champIMG"
        src={URGOT_IMG}
      ></img>
    </div>
  );
};

export default connect(null, mapDispatchToProps)(Selector);
