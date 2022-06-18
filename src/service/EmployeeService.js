import axios from "axios";

class EmployeeService {
    baseUrl = "http://localhost:8095/employee";
    addEmployee(data){
        return axios.post(`${this.baseUrl}/add`,data)
    }

    getAllEmployee(){
        return axios.get(`${this.baseUrl}/showall`)
    }

    getEmployee(employeeId){
        return axios.get(`${this.baseUrl}/show/${employeeId}`);
    }
    
    editEmployee(employeeId,data) {
        return axios.put(`${this.baseUrl}/edit/${employeeId}`, data);
      }

    deleteEmployee(employeeId) {
        return axios.delete(`${this.baseUrl}/delete/${employeeId}`);
      }
}
export default new EmployeeService();