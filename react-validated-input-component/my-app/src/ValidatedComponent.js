import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX, faCheck } from "@fortawesome/free-solid-svg-icons";
import "./ValidatedComponent.css";

export default function ValidatedComponent() {
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(false);

  const message = password === ""
    ? "A password is required."
    : password.length < 8
      ? "Your password is too short."
      : "Your password is valid.";

  const icon = password === "" || password.length < 8
    ? <FontAwesomeIcon className="red" icon={faX} />
    : <FontAwesomeIcon className="green" icon={faCheck} />;

  return (
    <div>
      <label>
        Password:{" "}
        <input
          value={password}
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
            setIsValid(e.target.value.length >= 8);
          }}
        />
      </label>
      <span>{icon}</span>
      <div>
        <span className={isValid ? "green" : "red"}>{message}</span>
      </div>
    </div>
  );
}
