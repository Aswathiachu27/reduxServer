//importing json-server library

const jsonServer=require('json-server')

//creating server instance
const mpServer=jsonServer.create()

//setting default middwere
const middleware=jsonServer.defaults()

//setting routes for resources
const routes=jsonServer.router('db.json')





//configuaring server

mpServer.use(middleware)
mpServer.use(routes)


const PORT=3000 || process.env.PORT

mpServer.listen(PORT,()=>{
    console.log('server running at:'+PORT)
})
