import styled from "styled-components";

const FileInput = styled.input`
  font-size: 1.2rem;
  border-radius: var(--border-radius-sm);

  &::file-selector-button {
    font: inherit;
    font-weight: 500;
    padding: 0.5rem 0.8rem;
    margin-right: 1.2rem;
    border: 1px solid #007946;
    border-radius: 100px;
    color: #007946;
    background-color: transparent;
    cursor: pointer;
    transition: color 0.2s, background-color 0.2s;

    &:hover {
      color: #fff;
      background-color: #007946;
    }
  }
`;

export default FileInput;
