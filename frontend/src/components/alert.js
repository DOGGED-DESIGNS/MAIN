const Alert = ({ status, message, color }) => {
  return (
    <div className={`alert alert-${color} show fade alert-dismissible`}>
      <strong>{message}</strong>
    </div>
  );
};

export default Alert;
