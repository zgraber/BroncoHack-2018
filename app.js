const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
app.use(express.static('public'));

const PORT = process.env.PORT || 4001;

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
