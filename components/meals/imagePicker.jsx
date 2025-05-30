"use client";

import { useRef, useState } from "react";
import classes from "./imagePicker.module.scss";
import Image from "next/image";

const ImagePicker = ({ label, name }) => {
  const [fileChange, setFileChange] = useState();
  const imagePicker = useRef();

  const handlerPicker = () => {
    imagePicker.current.click();
  };

  const handlerChange = (e) => {
    const file = e.target.files[0];
    if (!file) {
      setFileChange(null);
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setFileChange(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  };
  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!fileChange && <p>No image picked yet</p>}
          {fileChange && (
            <Image src={fileChange} alt="Image selected by user." fill />
          )}
        </div>
        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imagePicker}
          onChange={handlerChange}
        />
        <button
          type="button"
          className={classes.button}
          onClick={handlerPicker}
        >
          Pick an image
        </button>
      </div>
    </div>
  );
};

export default ImagePicker;
