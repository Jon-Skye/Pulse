interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function Container({ children, className = "" }: ContainerProps) {
  const hasMaxWidthOverride = /max-w-/.test(className);
  const baseClasses = hasMaxWidthOverride
    ? "mx-auto px-6"
    : "max-w-content mx-auto px-6";
  return (
    <div className={`${baseClasses} ${className}`}>
      {children}
    </div>
  );
}
