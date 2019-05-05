const https = require('https')
const http = require('http')
const url = require('url')

const requestUrl = process.argv[2]

if (!requestUrl) {
  console.error('No request url given. Use: node test.js <url>')
  process.exit(0)
}

console.log('Requesting %s', url.format(requestUrl))

const u = url.parse(requestUrl)

const requestBody = Buffer.from('kransekake')

const request = (u.protocol === 'https:' ? https : http).request({
  ...u,
  method: 'POST',
  headers: {
    // 'content-length': requestBody.length, // remove comment here and it works
  },
})

request.write(requestBody)
request.on('response', res => res.pipe(process.stdout))
request.end()
