import Link from "next/link"
import { useRouter } from "next/router"


export default function Buscar() {
  const router = useRouter()

  return (
    <div>
      <h2>Rota dinamica {router.query.id} outra path {router.query.nome}</h2>
      <Link href="/rotas">
        <button>Voltar</button>
      </Link>
    </div>
  )
}