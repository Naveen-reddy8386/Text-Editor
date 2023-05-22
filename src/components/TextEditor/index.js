import {useState} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'
import {
  Maindiv,
  Container,
  LogoContainer,
  Head,
  Img,
  Textarea,
  Button,
  Button2,
  Button3,
  ButtonContainer,
  SecondContainer,
} from './styledComponents'

const TextEditor = () => {
  const [Value, setValue] = useState(false)
  const [Italic, setItalic] = useState(false)
  const [under, setUnder] = useState(false)
  const changeWeight = () => {
    setValue(prev => !prev)
  }
  const changeItalic = () => {
    setItalic(prev => !prev)
  }
  const changeUnderline = () => {
    setUnder(prev => !prev)
  }
  return (
    <Maindiv>
      <Container>
        <LogoContainer>
          <Head>Text Editor</Head>
          <Img
            src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png "
            alt="text editor"
          />
        </LogoContainer>
        <SecondContainer>
          <ButtonContainer>
            <li>
              <Button data-testid="bold" check={Value} onClick={changeWeight}>
                <VscBold size={23} />
              </Button>
            </li>

            <li>
              {' '}
              <Button2
                data-testid="italic"
                checkItalic={Italic}
                onClick={changeItalic}
              >
                <GoItalic size={23} />
              </Button2>
            </li>
            <li>
              <Button3
                data-testid="underline"
                checkunder={under}
                onClick={changeUnderline}
              >
                <AiOutlineUnderline size={23} />
              </Button3>
            </li>
          </ButtonContainer>
          <Textarea
            cols="35"
            rows="30"
            check={Value}
            checkItalic={Italic}
            checkunder={under}
          />
        </SecondContainer>
      </Container>
    </Maindiv>
  )
}
export default TextEditor
