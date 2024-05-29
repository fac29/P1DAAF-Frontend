import React from "react"
import { FaHeart } from "react-icons/fa";
import { FaHeartBroken } from "react-icons/fa";

interface Props {
    state: boolean,
    onTog
}

function FavQuestion({ state }:Props)  {
    return (
      state? <FaHeart /> : <FaHeartBroken />
    );
  }

export default FavQuestion