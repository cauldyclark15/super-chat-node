const path = require('path');
const express = require('express');

const publicPath = path.join(__dirname, '../public');
const app = express();
const port = process.env.PORT || 1515;

app.use(express.static(publicPath));
app.listen(port, () => {
  console.log(`server running at port: ${port}`);
})