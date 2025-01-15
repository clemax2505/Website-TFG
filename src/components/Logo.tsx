const Logo = ({ className = "h-8 w-8" }: { className?: string }) => {
  return (
    <img 
      src="/public/logo TGF.png" 
      alt="The Gaming Forge Logo" 
      className={className}
    />
  );
};

export default Logo;
