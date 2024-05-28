import React from "react"
interface Props {
    name: string,
    preIcon?: React.ReactNode,
    postIcon?: React.ReactNode,
    handler: () => void
}

const Button: React.FC<Props> = ({ name, preIcon, postIcon, handler }:Props) => {
    return (
      <button onClick={handler}>
        {preIcon && <span className="pre-icon">{preIcon}</span>}
        {name}
        {postIcon && <span className="post-icon">{postIcon}</span>}
      </button>
    );
  }

export default Button