import React from 'react'
import './PayrollHome.css';
import logo from './logo1.png';
import icons1 from './add-24px.svg'
import { Link } from 'react-router-dom';

function PayrollHome() {
    return (
        <div>
            <header className="header-content header">
                <div className='logo-content'>
                    <img src={logo} alt="logo"/>
                    <div>
                        <span class="emp-text">EMPLOYEE</span><br/>
                        <span class="emp-text emp-payroll">PAYROLL</span>
                    </div>
                </div>
            </header>
            <div class="main-content">
		<div class="header-content">
			<div class="emp-detail-text">
				Employee Details<div className="emp-count">10</div>
			</div>
			<a><Link to="/add" className='add-button'>
			<img src={icons1} alt="Add User" />Add User</Link></a>
		</div>

		<div className="table-main">
			<table id="table-display" className="table">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Department</th>
                        <th>Salary</th>
                        <th>Start Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
				<tr>
                    <tbody>

                    </tbody>
				</tr>
			</table>
            <script defer src="../js/home.js"></script>
        <script defer src="../js/utility.js"></script>
		</div>
	</div>

        </div>
    )
}

export default PayrollHome;