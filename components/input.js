function Input(props) {
  return (
    <>
      <label htmlFor="props.id"></label>
      <input
        className={props.styleClass}
        type={props.type}
        placeholder={props.placeholder}
        id={props.id}
        required
        onChange={(e) => {
          props.valueState(e.target.value);
        }}
      />
    </>
  );
}

export default Input;
