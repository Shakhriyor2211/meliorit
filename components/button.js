import { arrow } from "../utils/icon";

function Button(props) {
  return (
    <button className={props.styleClass}>
      {props.text}
      <span className="hidden lg:block w-3 h-3 trasinition-all duration-300 transform -rotate-90 -mb-1 group-hover:translate-x-1.5">
        {arrow}
      </span>
    </button>
  );
}

export default Button;
