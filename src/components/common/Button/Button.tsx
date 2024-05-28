import React from "react"
interface Props {
    name: string,
    preIcon?: React.ReactNode,
    postIcon?: React.ReactNode,
    handler: () => void
}

function Button({ name, preIcon, postIcon, handler }:Props)  {
    return (
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handler}>
        {preIcon && <span className="pre-icon">{preIcon}</span>}
        {name}
        {postIcon && <span className="post-icon">{postIcon}</span>}
      </button>
    );
  }

export default Button