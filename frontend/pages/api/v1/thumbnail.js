// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
    
    const {url} = req.query

    let parts = url.split("/")
    const response = await fetch(url)
    const buffer = Buffer.from(await response.arrayBuffer(),"utf-8")
    res.setHeader('Content-Type', 'image/jpg')
    res.setHeader('Content-Disposition', `attachment; filename="${parts[parts.length -1]}.jpg"`)

    res.send(buffer)

  }
  