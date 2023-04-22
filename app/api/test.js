export default (req, res)=>{
    if(req.method ==='POST'){
        console.log('post')
    }else{
        console.log('get')
    }
}