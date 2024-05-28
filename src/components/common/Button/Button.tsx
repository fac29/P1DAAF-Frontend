import <React></React>

interface Props {
    name: string,
    preIcon?: string,
    postIcon?: string,
    handler: () => void
}

const Button: React.FC<Props> = ({ name, preIcon, postIcon, handler }) => {
    return (
      <button onClick={handler}>
        {preIcon && <span className="pre-icon">{preIcon}</span>}
        {name}
        {postIcon && <span className="post-icon">{postIcon}</span>}
      </button>
    );
  }

export default Button