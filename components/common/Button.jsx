const Button = ({ 
  children, 
  variant = "primary", 
  size = "md", 
  className = "", 
  onClick,
  disabled = false,
  ...props 
}) => {
  const baseClasses = "font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-gradient-to-r from-accent-a to-accent-b text-white shadow-lg hover:shadow-xl hover:scale-105 focus:ring-accent-a",
    secondary: "border-2 border-border bg-surface text-text-primary hover:bg-accent-faded hover:border-accent-a focus:ring-accent-a",
    ghost: "text-text-primary hover:bg-surface hover:text-accent-a focus:ring-accent-a",
    outline: "border-2 border-accent-a text-accent-a hover:bg-accent-a hover:text-white focus:ring-accent-a",
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };
  
  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;
  
  if (disabled) {
    return (
      <button
        disabled
        className={`${classes} opacity-50 cursor-not-allowed`}
        {...props}
      >
        {children}
      </button>
    );
  }
  
  return (
    <button
      className={classes}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button; 