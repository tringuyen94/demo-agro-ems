import { restConnector } from "./baseURL"

class User  {
   login(credential){
      return restConnector({
         url:`user/login`,
         method:"POST",
         data:credential
      })
   }
}
export default new User()