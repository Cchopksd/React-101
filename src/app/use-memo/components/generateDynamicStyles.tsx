// 🎨 CSS class generator
export const generateDynamicStyles = (
  theme: string,
  size: string,
  variant: string
) => {
  console.log(`🎨 Generating styles for: ${theme}-${size}-${variant}`);

  const themeClasses = {
    light: "bg-white text-gray-800 border-gray-200",
    dark: "bg-gray-800 text-white border-gray-600",
    blue: "bg-blue-50 text-blue-800 border-blue-200",
    green: "bg-green-50 text-green-800 border-green-200",
  };

  const sizeClasses = {
    sm: "px-2 py-1 text-xs",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
    xl: "px-8 py-4 text-lg",
  };

  const variantClasses = {
    solid: "border-2 rounded-md shadow-sm",
    outline: "border-2 rounded-md bg-transparent",
    ghost: "border-0 rounded-md hover:bg-opacity-20",
  };

  return `${themeClasses[theme as keyof typeof themeClasses]} ${
    sizeClasses[size as keyof typeof sizeClasses]
  } ${variantClasses[variant as keyof typeof variantClasses]}`;
};
