import homeController from "../controller/homeController.js";


function initroutes(router)
{
   router.get('/',homeController().default)
   router.get('/getuser/',homeController().getuser)
  
}

export default  initroutes;      