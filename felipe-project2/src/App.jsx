import './App.css'

function App() {
  return (
    <>
    <h2 className='h2'>Kenzie Hub</h2>
    <form>
      <label>Email
      <input className='email1' type='email' required placeholder='Digite o so seu e-mail'></input>
      </label>
      <label> Senha
      <input className='password' type='password' required placeholder='Digite a senha'></input>
      </label>
      <button>Entrar</button>
      <span>Ainda não possui uma conta</span>
      <button>Cadastre-se</button>
    </form>
    </>
  )
}

export default App
