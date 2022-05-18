export function Input(props) {
  return (
    <input
      type={props.type}
      className=" border-solid border dark:border-brand-500 mb-2 p-2 rounded-md w-full dark:border-0 dark:bg-slate-800 dark:text-zinc-50 border-zinc-200 focus:border-brand-500 focus:ring-brand-500 focus:outline-none focus:ring-1"
      placeholder={props.placeholder}
      onChange={props.onChange}
    />
  );
}
