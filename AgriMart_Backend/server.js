
const dotenv=require('dotenv')

const { initializeApp } =require('firebase/app')
const admin =require ('firebase-admin')

dotenv.config({path:'./conf.env'})

admin.initializeApp({
    credential: admin.credential.cert({
      type: process.env.TYPE,
      project_id: process.env.PROJECT_ID,
      private_key_id: process.env.PRIVATE_KEY_ID,
      private_key:process.env.PRIVATE_KEY.replace(/\\\\n/g, '\n')
       ,
      client_email: process.env.CLIENT_EMAIL,
      client_id:  process.env.CLIENT_ID,
      auth_uri: process.env.AUTH_URI,
      token_uri: process.env.TOKEN_URI,
      auth_provider_x509_cert_url:  process.env.AUTH_PROVIDER_X509_CERT_URL,
      client_x509_cert_url: process.env.CLIENT_X509_CERT_URL,
      universe_domain: "googleapis.com"
    })
  })



  const app=require('./app')
// process.on('uncaughtException',(err)=>{
//     console.log(err.name,err.message)               //handling uncaughtException
//     console.log("exiting the application...(uncaughtException)")
//     process.exit(1)
// })

const server=app.listen(process.env.PORT,()=>{
    console.log("listning...")
})

// process.on('unhandledRejection',(err)=>{
//     console.log(err.name,err.message)               //handling unhandledRejection
//     console.log("exiting the application...(unhandledRejection)")
//     server.close(()=>{
//         process.exit(1)
//     })
// })

