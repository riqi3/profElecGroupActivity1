import { useState, useEffect } from "react";
import './App.css';
import './Login.css';
import './UserTable.css';
import './UserCard.css';

const Project = () => {

	const [result, setResult] = useState('');
	const [detail, setDetail] = useState([]);
	const [screen, setScreen] = useState(!true);
	const [accDet, setaccDet] = useState(0);
	const [viewDetail, setViewDetail] = useState(!true);
	const [totalUsers, setTotalUsers] = useState(0);

	const [user, setUser] = useState({
		email: '',
		password: ''
	});

	const onChange = (evt) => {
		const value = evt.target.value;
		const name = evt.target.name;
		setUser({
			...user,
			[name]: value
		});
	};

	const fetchData = async () => {
		const response = await fetch(
			"https://jsonplaceholder.typicode.com/users"
		).then((response) => response.json());
		setDetail(response);
		setTotalUsers(response.length);
	};
	useEffect(() => {
		fetchData();
	}, []);

	const sendLogin = async (user) => {
		console.log(user);
		//"email": "eve.holt@reqres.in",
		//"password": "cityslicka"
		const url = 'https://reqres.in/api/login';
		const params = {
			"email": user.email,
			"password": user.password
		}

		fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(params),
		})
			.then((response) => response.json())
			.then((data) => {
				if (data && data.token) {
					setResult(data.token);
					setScreen(true);
				} else {
					setResult('Error login. Please verify.')
				}
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	};

	const handleUserLogin = () => {
		sendLogin(user);
	};

	const handleLogOut = () => {
		setScreen(false);
		setResult('');
	}

	const menu =
		['Id', 'Name', 'Username', 'Email', 'Phone', 'Action'];

	const Dashboard = menu.map
		(
			menu =>
				<th> {menu} </th>
		);

	const userInfo = detail.map
		(
			det =>
				<tr>
					<td>{det.id}</td>
					<td>{det.name}</td>
					<td>{det.username}</td>
					<td>{det.email}</td>
					<td>{det.phone}</td>
					<td>
						<button onClick={() => {
							setaccDet(det.id - 1);
							setViewDetail(true);
						}
						}> View Details </button>
					</td>
				</tr>
		);

	function ViewDetail() {
		if (!viewDetail) {
			return (
				<>

					<div className="table-container">
						<h1 id="user-title">Users Table</h1>
						<table>
							<tr>
								{Dashboard}
							</tr>
							{userInfo}
						</table>
					</div>
				</>
			);
		}
		else {
			return (
				<>
					<br />


					<table>
						<tr>
							<td>Id:</td>
							<td><b>{detail[accDet].id}</b></td>
						</tr>
						<tr>
							<td>Name:</td>
							<td><b>{detail[accDet].name}</b></td>
						</tr>
						<tr>
							<td>Address:</td>
							<td><b>
								{`${detail[accDet].address.street} 
                ${detail[accDet].address.suite}
							  ${detail[accDet].address.city} 
                ${detail[accDet].address.zipcode}`}</b></td>
						</tr>
						<tr>
							<td>Company:</td>
							<td><b>{detail[accDet].company.name}</b></td>
						</tr>
					</table>


					<br />
					<button onClick={() =>
						setViewDetail(!true)}>
						Back to table</button>
				</>
			);
		}
	}

	if (!screen) {
		return (
			<>
				<div className="container">
					<div className="login-form">
						<div className="login">
							<div className="login-label">
								<label htmlFor="income">Enter Email<label className="asterisk"> *</label></label>
							</div>
							<input
								placeholder="eve.holt@regres.in"
								type="text"
								onChange={onChange}
								data-testid="email"
								name="email"
								className="login-input"
							/>
						</div>
						<div className="login">
							<div className="login-label">
								<label htmlFor="income">Enter Password (cityslicka)<label className="asterisk"> *</label></label>
							</div>
							<input
								placeholder="**********"
								type="password"
								onChange={onChange}
								data-testid="password"
								name="password"
								className="login-input"
							/>
						</div>

						<div className="container-login-btn">
							<button
								onClick={handleUserLogin}
								data-testid="user-login"
							>
								Login
							</button>
						</div>
					</div>
				</div>

				<div className="container-server">
					<h3 data-testid="login-verify"><b>Server Reply:</b> <i>{result}</i></h3>
				</div>

			</>
		)
	} else {
		return (
			detail ? (
				<><br />

					<div className="header-menu">
						Token: {result}
						<button id="logout" onClick={handleLogOut}>
							Logout
						</button>

					</div>

					<div className="user-detail">
						<ViewDetail />
					</div>
					<h2 data-testid="total-users">Total Users: {totalUsers}</h2>
				</>
			) :
				(
					<p>Fetching...</p>
				)
		);
	}
};

export default Project;