import { DropboxLogo } from "../Section/styles";
import { Container, Form, Navigation } from "./styles";

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
      
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Surname" />
        <input type="email" placeholder="E-mail" />
        <input type="password" placeholder="Password" />

        <span className="terms">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque.
        </span>

      </Form>
    </Container>
  )
}