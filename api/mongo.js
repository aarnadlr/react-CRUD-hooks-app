module.exports = (req, res) => {
	console.log('LOGGED REQ!', req.headers)
	res.setHeader('CUSTOM', "HEADER!");
  res.json({
		success: true,
		success2: "true2",
		// theHeader: res.headers
    // body: req.body,
    // cookies: req.cookies,
    // query: req.query,
		// theName:'Asher!',
  })
}

// ***  req.body
// ***  req.cookies
// ***  req.query (Only if User VISITS that route!
// ///----
//      res.status(201)
//      res.send(body)
//      res.json(obj)
//      res.end("value")
//      res.setHeader('Accept-Ranges', 'items')
//      res.setHeader('Content-Range', 'items 0-10/100')
