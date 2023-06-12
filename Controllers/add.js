import con from "../connection.js";

export default function add (req,res) {
    console.log(req.body);
    var name = req.body.name;
    var jobtile = req.body.jobtile;
    var number = req.body.number;
    var email = req.body.email;
    var address = req.body.address;
    var city = req.body.city;
    var state = req.body.state;

    var sql = `insert into employee(Name,JobTitle,PhoneNumber,Email,Address,City,State)
                values('${name}', '${jobtile}','${number}','${email}','${address}','${city}','${state}')`;
    con.query(sql,function(err,results){
        if(err)
        console.log("error in add.js , ",err)
        
        res.send("<h1>Data added ... </h1>")
    });

}