var db=require('mongoose');

//console.log(mongourl.mongourl)
// var connection=db.connect(process.env.MONGODB_URI || "mongodb://root:sSavLpyc2O79@52.66.221.240:27017",{

//     useNewUrlParser:true,
//     useUnifiedTopology:true
// },(err=>{
//     if(!err){
//         console.log('database successfuly connected')
//     }else{
//         console.log(err)
//     }
// }))
var connection=db.connect(process.env.MONGODB_URI || "mongodb+srv://Dhruv:ashudon@90@cluster0.gu1vt.mongodb.net/WOBB?retryWrites=true&w=majority",{

    useNewUrlParser:true,
    useUnifiedTopology:true
},(err=>{
    if(!err){
        console.log('database successfuly connected')
    }else{
        console.log(err)
    }
}))


require('./model')
