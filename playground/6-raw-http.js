const http = require("http")
const url = "http://api.weatherstack.com/current?access_key=d34cdfa26acff26df282cacf321ddd1d&query=ry&units=m"

const request = http.request(url,(response)=>{
    let data = ""
    response.on("data", (chunk)=>{
        data = data + chunk.toString()
        console.log(chunk)
    })
    response.on("end",()=>{
        const body = JSON.parse(data)
        console.log(body)

    })
    request.on("error", (error)=>{
 console.log("and error occured. ", error)
    })
})

request.end()