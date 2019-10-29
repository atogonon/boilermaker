const db = require('./server/db/database.js');
const app = require('./server');
const port = process.env.PORT || 3000;

db.sync()
  .then(function(){
    app.listen(port, function () {
      console.log(`Listening on port ${port}`)
    })
  })
