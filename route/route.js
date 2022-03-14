import homeController from "../controller/homeController.js";


function initroutes(router)
{
   router.get('/',homeController().default)
   router.get('/getuser',homeController().getuser)
   router.get('/getuser/:page',homeController().getuser)
  
}

export default  initroutes;      