import HTTP  from "../utils/http";
import API from "../utils/config";

export default class ListModel extends HTTP {

    getCourseFields() {
        return new Promise((resolve,reject) => {
            this.fetchGet({
                url:API.getCourseFields,
                success(data) {
                    resolve(data)
                },
                error(e){
                    reject(e)
                }
            });
        });
    }

    getCourses(field) {
        return new Promise((resolve,reject) => {
            this.fetchGet({
                url:API.getCourses + field,
                success(data) {
                    resolve(data);
                },
                error(e) {
                    reject(e);
                }
            });
        });
    }
}
