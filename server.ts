import app from './app'; //seperate the app and server files so that the tests do not start listening to our port
const port = process.env.PORT || 3000;

//START SERVER
app.listen(port, () => {
   console.log(`App listening on port ${port}`);
});
