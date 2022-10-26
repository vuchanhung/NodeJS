const newsRouter=require('./home')

function route(app){
    app.use('/home',newsRouter);
    
    app.get('/', (req, res) => {
        res.render('home');
      });
        
}

module.exports=route;