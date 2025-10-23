const Button = ({ type, children, onClick }) => {
  return (
    <button
      type={type}
      className="outline-none border border-gdsc-blue-1 px-2 py-1 w-80"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
