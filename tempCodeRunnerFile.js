app.get("/demouser", async(req, res)=>{
    let fakeUser = new User({
        email:"student@gmail.com",
        username:"delta-student"
    });

    let registeredUser = await User.register(fakeUser, "helloworld");
    res.send(registeredUser);
});