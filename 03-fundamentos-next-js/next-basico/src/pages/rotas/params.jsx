import Link from "next/link"
import { useRouter } from "next/router"

export default function Rota() {
  const router = useRouter()

  return (
    <div>
      <h2>Rotas params: {router.query.id} - {router.query.nome}</h2>
      <Link href="/rotas">
        <button>Voltar</button>
      </Link>
    </div>
  )
}