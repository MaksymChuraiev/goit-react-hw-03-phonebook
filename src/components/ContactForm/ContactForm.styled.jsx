import styled from '@emotion/styled';
import { Form, Field } from 'formik';

export const FormTitle = styled.h1`
  margin-bottom: 20px;
`;
export const FormThumb = styled(Form)`
  border: solid 1px #000;
  padding: 10px;
`;
export const FormLabel = styled.label`
  position: relative;
  font-size: 10px;
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;
export const FormInput = styled(Field)``;
export const FormErrorMessage = styled.p`
  position: absolute;
  bottom: -11px;
  left: 0;
  color: tomato;
`;
export const FormButton = styled.button`
  cursor: pointer;
  margin-top: 10px;
  padding: 3px;
`;
