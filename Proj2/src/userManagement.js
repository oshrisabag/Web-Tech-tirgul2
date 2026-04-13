const welcomeText = document.getElementById('welcomeText');
const usersTable = document.getElementById('usersTable');

let users = JSON.parse(localStorage.getItem('users')) || [];

let loggedIn = JSON.parse(localStorage.getItem('Logged')) || [];

let currentUser = loggedIn[loggedIn.length - 1];

let user = users.find(u => 
    u.username === currentUser.usernameOrEmail || 
    u.email === currentUser.usernameOrEmail
);

if (user) {
    welcomeText.textContent = `Welcome ${user.username}`;
} else {
    welcomeText.textContent = "Welcome";
}

users.forEach(u => {
    let row = document.createElement('tr');

    row.innerHTML = `
        <td class="p-2 border">${u.username}</td>
        <td class="p-2 border">${u.email}</td>
        <td class="p-2 border">${u.dob}</td>
        <td class="p-2 border">${u.isAdmin ? 'Yes' : 'No'}</td>
    `;

    usersTable.appendChild(row);
});