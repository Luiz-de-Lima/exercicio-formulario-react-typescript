import { useState } from "react";

const App = () => {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [idade, setIdade] = useState(0);

  const getNome = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNome(event.target.value);
  };
  const getSobreNome = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSobrenome(event.target.value);
  };
  const getIdade = (event: React.ChangeEvent<HTMLInputElement>) => {
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
