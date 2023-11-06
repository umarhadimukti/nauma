export default function InputError({ message, className = '', ...props }) {
    return message ? (
        <p {...props} className={'text-sm p-3 rounded-xl bg-rose-700 text-white ' + className}>
            {message}
        </p>
    ) : null;
}
