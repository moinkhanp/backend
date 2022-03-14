import '../server.js'
import customermodel from '../model/customermodel.js'

function homeController() {
    return {
        default(req, res) {
            console.log("hiiii")
        },
        async getuser(req, res) {
            console.log(req.query.page)  

            const PAGE_SIZE = 2;
            const page = parseInt(req.query.page || "1");
            const total = await customermodel.countDocuments({});
            const data = await customermodel.find({})
              .limit(PAGE_SIZE)
              .skip((PAGE_SIZE * page) - PAGE_SIZE);
              console.log(data)
            res.json({
              totalPages: Math.ceil(total / PAGE_SIZE),
              total,
              data, 
          
            });
          
        }
    }
}

export default homeController 