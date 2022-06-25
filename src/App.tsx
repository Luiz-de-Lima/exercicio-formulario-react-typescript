import { useState } from "react";

type InputChangeElement = React.ChangeEvent<HTMLInputElement>;
const App = () => {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [idade, setIdade] = useState(0);

  const getNome = (event: InputChangeElement) => {
    setNome(event.target.value);
  };
  const getSobreNome = (event: InputChangeElement) => {
    setSobrenome(event.target.value);
  };
  const getIdade = (event: InputChangeElement) => {
    setIdade(parseInt(event.target.value));
  };

  return (
    <div>
      <div>
        Nome:
        <input type="text" value={nome} onChange={getNome} />
      </div>
      <div>
        Sobrenome:
        <input type="text" value={sobrenome} onChange={getSobreNome} />
      </div>
      <div>
        Idade:
        <input type="text" value={idade} onChange={getIdade} />
      </div>
      <hr />
      Olá {nome} {sobrenome}, tudo bem?
      <br />
      Você tem {idade} anos.
    </div>
  );
};

export default App;
