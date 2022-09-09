import { Button } from "../Button/style";
import { ShareStyle } from "./style";

export function Share() {
  return (
    <ShareStyle>
      <div className="share-box">
        <p>
          Quer que seus amigos também ganhem a lista personalizada deles?
          Preencha agora!
        </p>
        <form>
          <div className="f-name">
            <label htmlFor="name">Nome do seu amigo:</label>
            <input type="name" name="name" />
          </div>
          <div className="f-email">
            <label htmlFor="email">E-mail:</label>
            <input type="email" name="email" />
          </div>
        </form>
        <Button width={260} height={30}>Enviar agora</Button>
      </div>
    </ShareStyle>
  );
}
