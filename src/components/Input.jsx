import { forwardRef } from "react";

const Input = forwardRef(function Input({ label, textarea, ...props }, ref) {
  return (
    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 sm:max-w-lg">
      <div className="col-span-full">
        <label
          htmlFor={label}
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          {label}
        </label>
        {textarea ? (
          <div className="mt-2">
            <textarea
              id={label}
              name={label}
              rows="3"
              ref={ref}
              className="block w-full bg-transparent rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            ></textarea>
          </div>
        ) : (
          <div className="mt-2">
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
              <input
                type="text"
                name={label}
                id={label}
                ref={ref}
                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900  sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
});
export default Input;
