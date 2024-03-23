import React from "react";

export const LoginForm = (props) => {
  const {
    handleSubmit,
    handleInputChange,
    email,
    setPassword,
    setEmail,
  } = props;

  return (
    <div className="login-form-container">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="form-item">
          <input
            type="input"
            name="email"
            className="form-control"
            placeholder="Correo"
            /* value={email} */
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-item">
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Contraseña"
            /* value={password} */
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-item">
          <button type="submit" className="btn btn-block btn-primary">
            Ingreso
          </button>
        </div>
      </form>
    </div>
  );
};
