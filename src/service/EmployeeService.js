import axios from "axios";

class EmployeeService {
    baseUrl = "http://localhost:8095/employee";
    addEmployee(data){
        return axios.post(`${this.baseUrl}/add`,data)
    }
    getAllEmployee(){
        return axios.get(`${this.baseUrl}/get`)
    }
}
export default new EmployeeService();