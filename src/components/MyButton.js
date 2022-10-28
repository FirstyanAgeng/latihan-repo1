const MyButton = (props) => {
  return (
    <div>
      <button onClick={() => props.clicked()}>Klik Saya </button>
    </div>
  );
};

export default MyButton;
