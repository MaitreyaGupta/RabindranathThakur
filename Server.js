var app1=require("express")
app=app1() 
var bodyParser=require("body-parser")
var mongoose=require("mongoose")
async function ConnectDB(){
try{
mongoose.connect("localhost:27017//Starter.db",{useNewUrlParser:true},{useUnifiedTopology:true})
}
catch(err){
 console.log(err)
}
}
 
app.set("view engine","ejs")
app.use(app1.static("public"))
app.use(bodyParser.urlencoded({extended:false}))
const PORT=process.env.PORT||3030
app.listen(3000,function(req,res){
    console.log("here now")
})
app.get("/",function(req,res){
    res.render("Home")
})
app.post("/Poems",function(req,res){
    res.redirect("Poems")
})

app.get("/Poems",function(req,res){
    res.render("Poems")
})
app.get("Stories",function(req,res){
    res.render("Stories")
})
app.post("/Poem1",function(req,res){
     res.redirect("Poem1")
})
app.get("/Poem1",function(req,res){
    res.render("Poem1")
})
app.post("/Poem2",function(req,res){
    res.redirect("Poem2")
})
app.get("/Poem2",function(req,res){
   res.render("Poem2")
})
app.post("/Poem3",function(req,res){
    res.redirect("Poem3")
})
app.get("/Poem3",function(req,res){
   res.render("Poem3")
})
app.post("/Poem4",function(req,res){
    res.redirect("Poem4")
})
app.get("/Poem4",function(req,res){
   res.render("Poem4")
})
app.post("/Stories",function(req,res){
    res.redirect("Stories")
})
app.get("/Stories",function(req,res){
    res.render("Stories")
})
app.post("/Story1",function(req,res){
    res.redirect("Story1")
})
app.get("/Story1",function(req,res){
    res.render("Story1")
})
app.post("/Story2",function(req,res){
    res.redirect("Story2")
})
app.get("/Story2",function(req,res){
    res.render("Story2")
})
app.post("/Story3",function(req,res){
    res.redirect("Story3")
})
app.get("/Story3",function(req,res){
    res.render("Story3")
})
app.post("/Story4",function(req,res){
    res.redirect("Story4")
})
app.get("/Story4",function(req,res){
    res.render("Story4")
})
 app.post("/Feedback",function(req,res){
    res.redirect("Feedback")
 })
 app.get("/Feedback",function(req,res){
    res.render("Feedback")
 });
 