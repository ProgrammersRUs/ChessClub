const member = 'http://localhost:8080/member/all-members';
const memberOverview = document.getElementById('bview-table')

function fetchMember() {
    return fetch(member).then(response => response.json());
}

async function postUserStatus(user, userStatus) {
    console.log(user, userStatus.value)
    const url = 'http://localhost:8080/user/update-status'

    let status = userStatus.value == 'Admin' ? true : false;

    let body = {
        admin: JSON.parse(sessionStorage.getItem('user')),
        user: {id: user, adminStatus: status},
    }

    const options = {
        method: 'PUT',
        body: JSON.stringify(body),
        headers: {
            'Content-type': 'application/json'
        }
    }

    const response = await fetch(url, options);
    if (!response) {
        const errorMessage = await response.text();
        console.log(errorMessage)
        throw new Error(errorMessage);
    }
    console.log(response)
    return response;
}

//addTableOverview(member)
// .catch(err => console.error(err));

async function addTableOverview() {
    const members = await fetchMember();
    console.log(members)
    const tbody = document.createElement('tbody')
    tbody.setAttribute('id', 'tbodyadmin')

    for (let member of members) {
        for (let i = 0; i < members.length; i++) {
            const tableParent = document.getElementById('parent')
            const tableRow = document.createElement('tr');
            const td1 = document.createElement('td');
            td1.classList.add('pl-4')

            td1.textContent = member.memberId;
            const td2 = document.createElement('td');
            td2.classList.add('')
            td2.textContent = member.memberFirstName;
            const td3 = document.createElement('td');
            td3.classList.add('text-muted')
            td3.textContent = member.memberLastName;
            const td4 = document.createElement('td');
            td4.classList.add('text-muted')
            td4.textContent = member.memberEmail;
            const td5 = document.createElement('td');
            td5.classList.add('text-muted')
            td5.textContent = member.memberPhoneNr;
            const td6 = document.createElement('td');
            td6.classList.add('text-muted')
            td6.textContent = member.memberAge;
            const td7 = document.createElement('td');
            td7.classList.add('text-muted')
            td7.textContent = member.memberAddress;

            console.log("hej")
            tableParent.append(tableRow);
            tableRow.append(td1);
            tableRow.append(td2);
            tableRow.append(td3);
            tableRow.append(td4);
            tableRow.append(td5);
            tableRow.append(td6);
            tableRow.append(td7);
            tbody.append(tableRow);
        }
    }
}