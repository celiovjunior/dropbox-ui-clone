import { Container, DropboxLogo, Form, Navigation } from "./styles";

export default function MenuForm() {
  function handleToggle() {
    if (window.toggleActiveMenu) window.toggleActiveMenu();
  }

  return (
    <Container>
      <Navigation>
        <h1>
          <DropboxLogo />
          <span>Dropbox</span>
        </h1>

        <button className="action--close" onClick={handleToggle}>✕</button>
      </Navigation>

      <Form>
        <span className="title">Registre-se</span>
        <span className="subtitle">Preencha o formulário abaixo</span>
      
        <input type="text" placeholder="Nome" />
        <input type="text" placeholder="Sobrenome" />
        <input type="email" placeholder="E-mail" />
        <input type="password" placeholder="Senha" />

        <button>Proceed</button>

        <span className="terms">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque.
        </span>

      </Form>
    </Container>
  )
}