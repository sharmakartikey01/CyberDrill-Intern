const Button = ({ text }) => {
  return (
    <button className="mt-16 ml-6 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white font-bold py-2 px-6 rounded-full shadow-lg transition-transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-purple-400"
    >
      {text}
    </button>
  );
};

export default Button;

