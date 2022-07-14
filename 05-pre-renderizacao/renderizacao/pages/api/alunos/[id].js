export default function handler(req, res) {
  const id = +req.query.id
  res.status(200).json([
    {id, nome: `Jukinha ${id}`, email: '121231@gmail.com'},
  ])
}
