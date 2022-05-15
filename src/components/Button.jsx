export function Button(props) {
  return (
    <button className="bg-brand-500 hover:bg-brand-300 transition-colors w-full p-2 text-white rounded-md">
      {props.children}
    </button>
  );
}
