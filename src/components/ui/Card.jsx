
  // src/components/ui/Card.jsx
  export const Card = ({ children, className = '', ...props }) => {
    return (
      <div 
        className={`bg-white rounded-lg shadow-sm ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  };
  
  export const CardHeader = ({ children, className = '', ...props }) => {
    return (
      <div 
        className={`px-6 py-4 border-b border-gray-200 ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  };
  
  export const CardContent = ({ children, className = '', ...props }) => {
    return (
      <div 
        className={`px-6 py-4 ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  };
  
  