import Link from "next/link";
import router, { useRouter } from "next/router";

export default function Rota() {
  function navegacaoSimples(url) {
    router.push(url)
  }

  function navegacaoComParams(url) {
    router.push({
      pathname: url,
      query: {
        id: 123,
        nome: 'juka'
      }
    })
  }

  return (
    <div>
      <h2>ROTA</h2>
      <ul>
        <Link href="/rotas/params?id=121313&name=Juka">
          <li>Params</li>
        </Link>
        <Link href="/rotas/1232/buscar">
          <li>Buscar</li>
        </Link>
        <Link href="/rotas/1232/Jukinha">
          <li>Buscar Path Params</li>
        </Link>
      </ul>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
      }}>
          <button onClick={() => navegacaoComParams('/rotas/params')}>Params</button>
          <button onClick={() => router.push('/rotas/1232/buscar')}>Buscar</button>
          <button onClick={() => navegacaoSimples('/rotas/1232/Jukinha')}>Buscar Path Params</button>
      </div>
    </div>
  )
}