const express = require('express')
const app =express()
 
app.get('/hello',(req,res)=>{ //URL 응답 테스트
    res.send('hello world !')
})

app.get('/error',(req,res)=>{
    throw new Error('서버에 치명적인 에러가 발생했습니다')
})




//폴백핸들러(fallback handler)
app.use((req,res,next)=>{
    res.status(404).send('페이지를 찾을수 없습니다')
})
app.use((err,req,res,next)=>{
    console.log(err.stack)
    res.status(500).send('서버에러 발생!')
})

app.listen(5000,()=>{
    console.log('server is running on port 5000....')
})