function Input({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Add Your Task here ..."
      className="input  py-6 text-xl w-full rounded-xl"
      value={value}
      onChange={onChange}
    />
  );
}
export default Input;
