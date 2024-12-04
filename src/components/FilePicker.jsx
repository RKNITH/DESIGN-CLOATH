import React from "react";
import styled from "styled-components";

const FilePickerContainer = styled.div`
  position: absolute;
  min-width: 180px;
  top: 80px;
  display: flex;
  flex-direction: column;
  padding: 12px;
  gap: 10px;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 2px 30px 0 rgba(31, 38, 135, 0.07);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

const InputWrapper = styled.div`
  padding: 16px;
  border: 1px dashed #000000;
  border-radius: 4px;
  gap: 12px;
`;
const CustomButton = styled.div`
  background: green;
  border-radius: 10px;
  color: white;
  text-align: center;
  font-weight: 500;
  padding: 10px 36px;
  @media (max-width: 800px) {
    font-size: 12px;
    padding: 10px 18px;
  }
`;

const FileInput = styled.input`
  display: none;
`;
const FileLabel = styled.label`
  font-size: 18px;
  cursor: pointer;
  margin-top: 2px;
  color: #3182ce;
`;

const FileInfo = styled.div`
  margin-top: 2px;
  color: #718096;
  font-size: 0.75rem;
`;

const FilePicker = ({ file, setFile, readFile }) => {
  return (
    <FilePickerContainer>
      <InputWrapper>
        <FileInput
          id="file-upload"
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <FileLabel htmlFor="file-upload">Upload File</FileLabel>
        <FileInfo>{file === "" ? "No File Selected" : file.name}</FileInfo>
      </InputWrapper>
      <CustomButton onClick={() => readFile("logo")}>Set Logo</CustomButton>
    </FilePickerContainer>
  );
};

export default FilePicker;
