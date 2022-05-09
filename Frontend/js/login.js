const user = 'http://localhost:8080/login';

function fetchUser() {
    return fetch(user).then(response => response.json());
}

