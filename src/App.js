import React from 'react'
import Input from './Form/Input'
import Select from './Form/Select';
import Radio from './Form/Radio';


const App = () => {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [produto, setProduto] = React.useState('')
  const [cor, setCor] = React.useState('')
  const [capinha, setCapinha] = React.useState('')
  const [pelicula, setPelicula] = React.useState('')

 return (
  <form>
    <h2>Cores</h2>
    <Radio options={['Azul', 'Vermelho']} value={cor} setValue={setCor} />
    <h2>Capinhas</h2>
    <Radio options={['Couro', 'Verde', 'Vermelha', 'Preta', 'Silicone']} value={capinha} setValue={setCapinha} />
    <h2>Pelicula</h2>
    <Radio options={['Gel', 'Vidro', '3D', 'Proteção Ante Risco', 'Privacidade']} value={pelicula} setValue={setPelicula} />
    <Select 
    options={['Smartphone', 'Tablet']} 
    value={produto} 
    setValue={setProduto} />
    <Input id="nome" label='Nome' value={nome} setValue={setNome} required />
    <Input id="email" label='Email' value={email} setValue={setEmail} />
<button>Enviar</button>
  </form>
 )
}


export default App
