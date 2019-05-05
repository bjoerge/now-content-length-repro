const {text} = require('micro')

module.exports = async (req, res) => {
  const body = await text(req)
  console.log('request body: ', body)
  res.writeHead(200)
  res.end(`request body: ${body}`)
}
