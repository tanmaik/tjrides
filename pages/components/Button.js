const Button = ({ text }) => {
  return (
    <div>
      <button className="font-semibold rounded-3xl py-3 px-8 bg-blue-800 hover:bg-blue-600 transition-all ease-out">
        {text}
      </button>
    </div>
  );
};

export default Button;
