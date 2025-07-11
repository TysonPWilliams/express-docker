const request = require("supertest")
const { app } = require("../src/server.js")



/*
app.get("/", (req, res) => {
    console.log("Homepage of API requested!");
    // res.send("Hello, world!")
    res.json({
        message:"Hello, world!"
    });
});
*/

test('should get a hello world message from the homepage', async () => {

    let response = await request(app).get("/")
    // test would happen here
    
    // check that response body contains "Hello, world!"
    // check that response.body.message equals "Hello, world!"

    expect(response.body.message).toBe("Hello, world!");
    expect(response.text).toBe("{\"message\":\"Hello, world!\"}")

});

// describe('API homepage route tests', () => {


//  })