// lib/auth.js

let users = [
	{
		email: 'alice@example.com',
		password: 'password123'
	},
	{
		email: 'bob@example.com',
		password: 'securepass'
	},
	{
		email: 'charlie@example.com',
		password: 'qwerty'
	}
];


export function signupUser({ email, password }) {
    const exists = users.find((u) => u.email === email);
    if (exists) throw new Error("User already exists");

    const newUser = { id: Date.now(), email, password };
    users.push(newUser);
    return newUser;
}

export function loginUser({ email, password }) {
    const user = users.find((u) => u.email === email && u.password === password);
    if (!user) throw new Error("Invalid email or password");

    // fake login - set something in localStorage
    localStorage.setItem("login_authorized", "true");
    localStorage.setItem("user_email", email);
    return user;
}

export function getUsers() {
    return users;
}
export function isLoggedIn() {
	return localStorage.getItem("login_authorized") === "true";
}

