let begin = require('@architect/functions')

function route(req, res) {
  console.log(JSON.stringify(req, null, 2))
  res({
    html: `
<!doctype html>
<html lang=en>
  <head>
    <meta charset=utf-8>
    <title>Echo</title>
  </head>
  <body style="font-family: sans-serif;">
    <h1>Path: "${req.params['str'].replace(/[^\w\d]+/g, '-').trim()}"</h1>
  </body>
</html>
`
  })
}

exports.handler = begin.html.get(route)
