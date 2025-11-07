const Button = ({ type = "button", children, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`relative w-full bg-[#8eb8fd] border-4 outline-4 border-white outline-[#444244] px-4 md:px-6 py-1 md:py-2 transition-transform hover:translate-x-0.5 hover:translate-y-0.5 active:translate-x-1 active:translate-y-1 ${
        className
      }`}
    >
      <span className="text-2xl md:text-3xl tracking-wide font-pocket-monk cursor-pointer font-light">
        {children}
      </span>
    </button>
  );
};

export default Button;
