import HTTP  from "../utils/http";
import API from "../utils/config";

export default class IndexModel extends HTTP {
    getCourseData() {
     return new Promise((resolve,reject) => {
         this.fetchGet({
             url:API.getCourseDatas,
             success(data) {
                 resolve(data)
             },
             error(err) {
                 reject(err);
             }
         })
     })
    }
}
