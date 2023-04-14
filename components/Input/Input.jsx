import React from "react";
import styles from "./Input.module.css";
import Label from "../Label/Label";

const Input = ({
  children,
  style,
  type,
  name,
  value,
  onChange,
  onFocus,
  onBlur,
  maxLength,
  placehoder,
  hasError,
  error,
  touched,
  ...props
}) => {
  return (
    <div className={styles.container}>
      <Label {...props}>
        <input
          {...props}
          className={`${styles.input} ${style}`}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          maxLength={maxLength}
          placehoder={placehoder}
        />
      </Label>
      {hasError && touched ? (
        <div className={styles.message}>
          <p className={styles.helperText}>{error}</p>
        </div>
      ) : null}
    </div>
  );
};

export default Input;
