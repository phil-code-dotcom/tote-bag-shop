// One reusable button. "variant" picks the style.
function Button({ children, variant = "outline", onClick }) {
  const styles = {
    filled: "px-5 py-2 bg-[#06201c] text-white rounded-full",
    outline: "px-5 py-2 border border-gray-300 text-gray-700 hover:bg-gray-100 rounded-full",
    light: "px-5 py-2 bg-white text-black hover:bg-gray-100 rounded-full",
    plain: "p-1 text-black hover:bg-gray-100 rounded-full",
    wideDark: "w-full bg-black text-white rounded-[5px] py-3 justify-center",
  };

  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 text-sm ${styles[variant]}`}
    >
      {children}
    </button>
  );
}

export default Button;