import '../server.js'
import customermodel from '../model/customermodel.js'

function homeController() {
    return {
        default(req, res) {
            console.log("hiiii")
        },
        async getuser(req, res) {
            
            var perPage 
            var page 

  
             customermodel.find().sort({ "createdAt": 1 }).skip((perPage * page) - perPage).limit(perPage)
            .exec(function(err, user) {
                customermodel.countDocuments().exec(function(err, count) {
                    if (!err){
                        res.status(200).send({ 
                        data:user,
                        current: page,
                        pages: Math.ceil(count / perPage),
                        
                    })
         
                    }
                    
                })
            })



        }
    }
}

export default homeController 