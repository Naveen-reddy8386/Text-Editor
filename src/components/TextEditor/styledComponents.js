import styled from 'styled-components'

export const Maindiv = styled.div`
  background-color: #25262c;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
export const Container = styled.div`
  background-color: #1b1c22;
  padding: 15px;
  display: flex;
  background-size: cover;
`
export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 10px;
`
export const Head = styled.h1`
  color: white;
  text-align: center;
  font-size: 25px;
  padding-bottom: 100px;
`
export const Img = styled.img`
  height: 250px;
`
export const Textarea = styled.textarea`
  border: none;
  background-color: #25262c;
  border-top: 1px solid #334155;
  outline: none;
  padding: 10px;
  color: white;
  font-weight: ${props => (props.check ? 'bold' : 'normal')};
  font-style: ${props => (props.checkItalic ? 'italic' : 'normal')};
  text-decoration: ${props => (props.checkunder ? 'underline' : 'normal')};
  font-size: 16px;
`
export const Button = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  color: ${props => (props.check ? '#faff00' : '#f1f5f9')};
`
export const Button2 = styled.button`
  border: none;
  outline: none;
  background-color: transparent;

  color: ${props => (props.checkItalic ? '#faff00' : '#f1f5f9')};
`
export const Button3 = styled.button`
  border: none;
  outline: none;
  background-color: transparent;

  color: ${props => (props.checkunder ? '#faff00' : '#f1f5f9')};
`

export const ButtonContainer = styled.ul`
  background-color: #25262c;
  border-radius: 10px;
  padding: 10px;
`
export const SecondContainer = styled.div`
  background-color: #25262c;
  border: 1px solid #334155;
  border-radius: 10px;
`
