import React from "react";
import { connect } from "react-redux";
import { getChampData } from "../dataFlow/actions";

const mapDispatchToProps = (dispatch) => {
  return {
    getChampData: (name) => dispatch(getChampData(name))
  };
};

const Selector = ({ getChampData }) => {
  const AATROX_IMG =
    "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Aatrox_0.jpg";
  const URGOT_IMG =
    "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Urgot_0.jpg";

  return (
    <div>
      {/* <img
        onClick={() => getChampData("Atrox")}
        alt="champ_img"
        className="champIMG"
        src={AATROX_IMG}
      ></img> */}

      <button
        onClick={() => getChampData()}
        // alt="champ_img"
        // className="champIMG"
        // src={URGOT_IMG}
      >
        Fetch Urgot Data
      </button>
    </div>
  );
};

export default connect(null, mapDispatchToProps)(Selector);
