import PropTypes from 'prop-types'

export default function PrimaryButton({ className = '', disabled, children, type = 'submit', variant = 'primary', ...props }) {
    return (
        <button
            {...props}
            className={
                `rounded-2xl py-[13px] text-center transition ease-in-out duration-150 w-full ${disabled && 'opacity-25'} btn-${variant} ${className}`
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}

PrimaryButton.propTypes = {
    type: PropTypes.oneOf(['submit', 'button', 'reset']),
    className: PropTypes.string,
    variant: PropTypes.oneOf(['primary', 'warning', 'danger', 'light-outline', 'white-outline']),
    disabled: PropTypes.bool,
    children: PropTypes.node
};