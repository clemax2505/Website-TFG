const Logo = ({ className = "h-8 w-8" }: { className?: string }) => {
  return (
    <img 
      src="/logo TGF.png" 
      alt="The Gaming Forge Logo" 
      className={className}
    />
  );
};

export default Logo;
