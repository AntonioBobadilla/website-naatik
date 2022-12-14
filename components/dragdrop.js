import React from 'react';
import { FileUploader } from 'react-drag-drop-files';
import styles from '../styles/components/dragdrop.module.css';

const DragAndDrop = ({ file, setFile , setFileName_size}) => {
const fileTypes = ["CSV", "csv"]

    const handleChange = (newFile) => {
    const text = document.querySelector('#text');
    const wrapper = document.querySelector('#wrapper');
    text.innerHTML = `<b>Archivo cargado: </b>${newFile.name}`;
    wrapper.style.outlineColor = '#00AEEF';
    setFile(newFile);
    setFileName_size({"name":newFile.name, "size": newFile.size})
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.innerWrapper} id="wrapper">
        <FileUploader
          className={styles.input}
          handleChange={handleChange}
          name="file"
          accept={fileTypes}
          maxSize={100000}
          value={file}
          types={fileTypes}
        >
          <p id="text" className={styles.text}>
            <b>Drag</b> a file here or <b>click</b> to select from your computer
          </p>
        </FileUploader>
      </div>
    </div>
  );
};

export default DragAndDrop;
