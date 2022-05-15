export function Input(props) {
  return (
    <input
      type={props.type}
      className="border-1 border-brand-500 mb-2 p-2 rounded-md w-full bg-zinc-800 text-zinc-50 focus:border-brand-500 focus:ring-brand-500 focus:outline-none focus:ring-1"
      placeholder={props.placeholder}
      onChange={props.onChange}
    />
  );
}
