const member = 'http://localhost:8080/member/all-members';
const memberOverview = document.getElementById('overview')

function fetchMember() {
    return fetch(member).then(response => response.json());
}

addTableOverview(member)
    .catch(err => console.error(err));

async function addTableOverview() {
    const members = await fetchMember();
    console.log(members)

    const divContainer = document.createElement('div')
    divContainer.classList.add('container', 'col-md-7')


    const tbody = document.createElement('tbody')
    tbody.setAttribute('id', 'tbodyadmin')

    const tableParent = document.createElement('table')
    tableParent.classList.add('table')

    const headerRow = tableParent.insertRow(-1)


    for (let k in members[0]) {
        let cell = headerRow.insertCell(0)
        let text = k
        cell.append(text)
        headerRow.append(cell)
    }
    tableParent.append(headerRow)


    for (let member of members) {
        const tableRow = document.createElement('tr');
        const td1 = document.createElement('td');
        td1.classList.add('pl-4')
        td1.textContent = member.memberId;
        const td2 = document.createElement('td');
        td2.classList.add('text-muted')
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


        tableRow.append(td1);
        tableRow.append(td2);
        tableRow.append(td3);
        tableRow.append(td4);
        tableRow.append(td5);
        tableRow.append(td6);
        tableRow.append(td7);
        tbody.append(tableRow);
        tableParent.append(tbody);
    }
    divContainer.append(tableParent)
    memberOverview.append(divContainer)
}