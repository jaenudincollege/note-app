type Props = {
  type: string;
  label: string;
  value: string;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
};

const Input = ({ type, label, value, onChange }: Props) => {
  const inputId = label.toLowerCase().replace(/\s+/g, "-");

  const baseClasses =
    "peer block w-full appearance-none rounded-md border border-gray-300 bg-white px-4 pt-6 pb-2 text-base text-gray-900 placeholder-transparent shadow-sm transition focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500 dark:bg-gray-900 dark:text-white dark:border-gray-700 dark:focus:border-teal-400 dark:focus:ring-teal-400";

  const sharedProps = {
    id: inputId,
    placeholder: " ",
    className: baseClasses,
  };

  return (
    <div className="relative w-full">
      {type === "text" ? (
        <input type="text" {...sharedProps} value={value} onChange={onChange} />
      ) : (
        <textarea
          {...sharedProps}
          rows={4}
          className={`${baseClasses} resize-none`}
          value={value}
          onChange={onChange}
        />
      )}

      <label
        htmlFor={inputId}
        className="absolute left-4 top-2 text-sm text-gray-500 transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-teal-600 dark:text-gray-400 dark:peer-placeholder-shown:text-gray-500 dark:peer-focus:text-teal-400"
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
