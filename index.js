const routes = require("./bin/routes");
const { app } = require("./bin/routes");

app.listen(3000, () => {
  console.log("Server on port http://localhost:3000");
});


app.get("/users", (req, res) => {
  let users = [
    { name: "Jhon", lastName: "Doe", age: 30 },
    { name: "María", lastName: "Sharápova", age: 32 }
  ];
  res.send(users);
});


exports.app = app;