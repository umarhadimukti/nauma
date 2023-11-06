import { forwardRef, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const TextInput = forwardRef(({ type = 'text', id, className = '', isFocused = false, value, defaultValue, name, placeholder, variant = 'primary', isError, autoComplete, required, ...props }, ref) => {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <input
            {...props}
            type={type}
            id={id}
            name={name}
            value={value}
            defaultValue={defaultValue}
            placeholder={placeholder}
            autoComplete={autoComplete}
            required={required}
            className={
                `rounded-2xl bg-form-bg py-[13px] px-7 w-full input-${variant} ${isError && 'input-error'} ${className}`
            }
            ref={input}
        />
    );
});

TextInput.propTypes = {
    type: PropTypes.oneOf(['text', 'email', 'password', 'number', 'file']),
    name: PropTypes.string,
    id: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    className: PropTypes.string,
    variant: PropTypes.oneOf(['primary', 'error', 'primary-outline']),
    autoComplete: PropTypes.string,
    required: PropTypes.bool,
    isFocused: PropTypes.bool,
    handleChange: PropTypes.func,
    placeholder: PropTypes.string,
    isError: PropTypes.bool
};

export default TextInput;