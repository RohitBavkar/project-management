function Input({ label, textarea, ...props }) {
  return (
    <p>
      <label>{label}</label>
      {textarea ? <textarea /> : <input />}
    </p>
  );
}
export default Input;
