import React from 'react'
import './PayrollHome.css';
import logo from './logo.png';
import icons1 from './Add.jpg'
import icons2 from './download.png'
import icons3 from './download edit.png'
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <header class="header-content header">
                <div class="logo-content">
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
				Employee Details<div class="emp-count">10</div>
			</div>
			<a><Link to="/add" class="add-button">
			<img src={icons1} alt="" /> Add User</Link></a>
		</div>

		<div class="table-main">
			<table id="table-display" class="table">
				<tr>
					<th></th>
					<th>Name</th>
					<th>Gender</th>
					<th>Department</th>
					<th>Salary</th>
					<th>Start Date</th>
					<th>Actions</th>
				</tr>
				<tr>
					<td><img class="profile" alt="" src="../assests/profile-images/Ellipse -9.png"/></td>
					<td>Adesh</td>
					<td>Male</td>
					<td><div class='Dept-label'>Engineer</div></td>
					<td>40000</td>
					<td>15 Oct 2021</td>
					<td>
						<img id="1" onclick="remove(this)"
                        src={icons2}
                        alt="delete"/>
                    <img id="1" onclick="update(this)"
                        src={icons3} alt="edit"/>
					</td> 
				</tr>
			</table>
            <script defer src="../js/home.js"></script>
        <script defer src="../js/utility.js"></script>
		</div>
	</div>

        </div>
    )
}

export default Home;