const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/admin", adminRouter)
app.use("/user", userRouter)

app.use('/', express.static('client'))
// Connect to MongoDB
// DONT MISUSE THIS THANKYOU!!
mongoose.connect('mongodb://ajeet:<Password_here>@course100xweek7.c5masnrowikj.us-east-1.docdb.amazonaws.com:27017/courses?tls=true&&retryWrites=false',
 { useNewUrlParser: true, useUnifiedTopology: true, dbName: "courses", tlsCAFile: `rds-combined-ca-bundle.pem`});

app.listen(8080, () => console.log('Server running on port 8080'));
