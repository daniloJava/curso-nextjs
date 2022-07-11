const usuarios = []


export default function handler(req, res) {
  if(req.method === 'POST') {
    const id = req.query.id
    console.log(req.body)
    usuarios.push(req.body)
    res.status(200).send()
  }

  res.status(200).json({
    data: usuarios
  })
}
