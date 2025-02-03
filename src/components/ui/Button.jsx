// src/components/ui/Button.jsx
const Button = ({ children, variant = 'primary', className = '', ...props }) => {
    const baseStyles = 'px-4 py-2 rounded-lg transition duration-300 font-medium';
    const variants = {
      primary: 'bg-indigo-900 text-white hover:bg-indigo-800',
      secondary: 'bg-indigo-100 text-indigo-900 hover:bg-indigo-200',
      outline: 'border-2 border-indigo-900 text-indigo-900 hover:bg-indigo-50'
    };
  
    return (
      <button 
        className={`${baseStyles} ${variants[variant]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  };
  
  export default Button;
  