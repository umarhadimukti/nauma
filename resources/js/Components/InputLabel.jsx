export default function InputLabel({ value, forInput, className = '', children, ...props }) {
    return (
        <label {...props} htmlFor={forInput} className={`block font-medium text-sm text-gray-700 ` + className}>
            {value ? value : children}
        </label>
    );
}
