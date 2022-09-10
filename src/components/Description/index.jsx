import { DescriptionStyle } from "./style";

export function Description() {
  return (
    <DescriptionStyle>
    <section className="description-container">
      <div className="description-text">
        <h2>Ajude o algoritmo a ser mais certeiro</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          ultricies tellus nec mi porta convallis sollicitudin eu urna. Mauris
          rhoncus erat sed interdum dignissim. Suspendisse semper pretium
          consectetur. Praesent bibendum arcu risus, sit amet iaculis ex tempus
          quis. Cras et erat ut tellus vulputate tincidunt. Aenean lacinia
          euismod augue vel egestas. Class aptent taciti sociosqu ad litora
          torquent per conubia nostra, per inceptos himenaeos. Vestibulum vel
          urna tortor. Vivamus et arcu non felis tristique eleifend. 
          </p>
          <p>Morbi eu
          condimentum urna. Curabitur eu magna eget turpis condimentum ultrices.
          Suspendisse quis lorem ultricies, pulvinar purus sed, egestas erat.
          Etiam ultricies a ante vehicula pharetra. Quisque ut neque mattis,
          consequat velit ut, ultrices orci. Nulla varius elementum erat vel
          pharetra. Aenean sit amet nisi diam. Morbi viverra, magna ac luctus
          commodo, odio ante suscipit libero, at mattis augue est vel metus.
        </p>
      </div>
      <div className="description-form">
        <form>
          <div className="input-container">
            <div className="input-name">
              <label htmlFor="name">Seu nome:</label>
              <input type="text" name="name" required />
            </div>
            <div className="input-email">
              <label htmlFor="email">E-mail:</label>
              <input type="email" name="CPF" required />
            </div>
            <div className="input-cpf">
              <label htmlFor="CPF">CPF:</label>
              <input type="text" name="CPF" required />
            </div>
          </div>
          <div className="radio-btn">
            <div className="radio-btn-m">
              <input type="radio" value="Masculino" name="gender" /> Masculino
            </div>
            <div className="radio-btn-f">
              <input type="radio" value="Feminino" name="gender" /> Feminino
            </div>
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </section>
    </DescriptionStyle>
  );
}
