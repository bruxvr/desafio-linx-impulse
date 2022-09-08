import { ButtonStyle } from "../Button/style";
import { HeaderStyle } from "./style";

export function Header() {
  return (
    <HeaderStyle>
      <section className="header-desc">
        <h2>uma seleção de produtos</h2>
        <h1>especial para você</h1>
        <h3>
          Todos os produtos desta lista foram selecionados a partir da sua
          navegação. Aproveite!
        </h3>
      </section>
      <section className="btn-header">
        <ButtonStyle>Conheça a Linx</ButtonStyle>
        <ButtonStyle>Ajude o algoritmo</ButtonStyle>
        <ButtonStyle>Seus produtos</ButtonStyle>
        <ButtonStyle>Compartilhe</ButtonStyle>
      </section>
    </HeaderStyle>
  );
}
