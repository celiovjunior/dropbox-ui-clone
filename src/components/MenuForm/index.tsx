import { DropboxLogo } from "../Section/styles";
import { Container } from "./styles";

export default function MenuForm() {
  return (
    <Container>
      <Navigation>
        <h1>
          <DropboxLogo />
          <span>Dropbox</span>
        </h1>

        <button className="action--close">✕</button>
      </Navigation>

      <Form>
        <span className="title">Registre-se</span>
        <span className="subtitle">Preencha o formulário abaixo</span>
      </Form>
    </Container>
  )
}