const Courses=require('./models/courses');

class NewControllers{
    index(req,res)
    {
        Courses.find({}, function (err, courses) {
            if(!err)
            {
                res.json(courses);
            }
            else
            {
                res.status(400).json({error:'Errooorrr!!!'});
            }
          });
        // res.json(
        //     {
        //         name:'test'
        //     }
        // )
        //res.render('news');
    }

    show(res,req)
    {
        res.send('NEWS DETAILS');
    }

}
   
module.exports= new NewControllers;