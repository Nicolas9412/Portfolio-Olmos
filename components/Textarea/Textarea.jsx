import React from "react";
import styles from "./Textarea.module.css";
import Label from "../Label/Label";

const Textarea = ({
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
        <textarea
          {...props}
          className={`${styles.textarea} ${style}`}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          maxLength={maxLength}
          placehoder={placehoder}
          rows={4}
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

export default Textarea;
