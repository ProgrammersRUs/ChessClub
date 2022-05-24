import Component from '../lib/Component.js'
import ElementObject from "../lib/ElementObject.js";

class MemberOverviewComponent extends Component {
    constructor(members) {
        let state = {
            members: members
        }
        super("memberOverview", state, (state) => `
<div class="container" style="min-height: 100vh">
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title text-uppercase mb-0">Manage Users</h5>
                </div>
                <div class="table-responsive">
                    <table class="table no-wrap user-table mb-0" id="parent">
                        <thead>
                        <tr>
                            <th scope="col" class="border-0 text-uppercase font-medium pl-4">Medlems Id</th>
                            <th scope="col" class="border-0 text-uppercase font-medium">Navn</th>
                            <th scope="col" class="border-0 text-uppercase font-medium">Email</th>
                            <th scope="col" class="border-0 text-uppercase font-medium">Tlf.</th>
                            <th scope="col" class="border-0 text-uppercase font-medium">Fødselsdato</th>
                            <th scope="col" class="border-0 text-uppercase font-medium">Adresse</th>
                        </thead>
                        <tbody>
                            ${this.renderMember(state.members)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
`);

    }

    renderMember(members) {
        return members.map(member => `<tr>
                            <td class="pl-4">${member.memberId}</td>
                            <td>
                                <h5 class="">${member.memberFirstName} ${member.memberLastName}</h5>
                            </td>
                            <td>
                                <span class="text-muted">${member.memberEmail}</span><br>
                            </td>
                            <td>
                                <span class="text-muted">${member.memberPhoneNr}</span><br>
                            </td>
                            <td>
                                <span class="text-muted">${member.memberAge}</span><br>
                            </td>
                            <td>
                                <span class="text-muted">${member.memberAddress}</span><br>
                            </td>
                            <td>
                                <select id="updateMemberStatus${member.memberId}" class="form-control category-select">
                                    <option>User</option>
                                    <option>Admin</option>
                                </select>
                            </td>
                            <td>
                                <button id="deleteMember${member.memberId}" type="button" class="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"><i class="fa fa-trash"></i> </button>
                                <button id="updateMember${member.memberId}" type="button" class="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"><i class="fa fa-save"></i> </button>
                            </td>
                        </tr>`).join('');
    }

    addEventListenersMemberTable() {

        const urlDelete = config.endpoints.member.root + config.endpoints.member.subPoint.deleteMember;
        const urlUpdate = config.endpoints.member.root + config.endpoints.member.subPoint.updateMember;
        this.state.members.forEach(member => {

            const buttonDelete = document.getElementById('deleteMember' + member.memberId)
            const buttonUpdateStatus = document.getElementById('updateMemberStatus' + member.memberId)
            const buttonUpdateMember = document.getElementById('updateMember' + member.memberId)


            buttonDelete.addEventListener("click", async () => {
                await deleteMember(member)
                //await new this.refreshPage()
            })

            buttonUpdateStatus.addEventListener('onchange', async () => {
                await updateMemberStatus(member)
                //await new this.refreshPage()
            })

            buttonUpdateMember.addEventListener("click", async () => {
                await updateMemberInformation(member)
                //await new this.refreshPage()
            })
        })


        async function deleteMember(member) {

            let body = {
                user: JSON.parse(sessionStorage.getItem('user')),
                member: {
                    memberId: member.memberId
                }
            }

            const fetchOptions = {
                    method: "DELETE",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(body)
                }
            ;

            const response = await fetch(urlDelete + member.memberId, fetchOptions);

            if (!response) {
                const errorMessage = await response.text();
                console.log(errorMessage)
                throw new Error(errorMessage);

            }
        }

        async function updateMemberStatus(member) {

            if (member.isActive == 1) {
                member.isActive = 0
            } else if (member.isActive == 0) {
                member.isActive = 1
            }

            console.log(member.isActive)

            let body = {
                user: JSON.parse(sessionStorage.getItem('user')),
                member: {
                    memberId: member.memberId,
                    memberAddress: member.memberAddress,
                    memberAge: member.memberAge,
                    memberFirstName: member.memberFirstName,
                    memberLastName: member.memberLastName,
                    memberPhoneNr: member.memberPhoneNr,
                    userId: member.userId
                }
            }


            const fetchOptions = {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            };
            const response = await fetch(urlUpdate + member.memberId, fetchOptions);

            if (!response) {
                const errorMessage = await response.text();
                console.log(errorMessage)
                throw new Error(errorMessage);

            }
        }

        async function updateMemberInformation(member) {

            const memberHeader = document.getElementById('memberHeader' + member.memberId).innerText
            const memberBody = document.getElementById('memberBody' + member.memberId).innerText

            let body = {
                user: JSON.parse(sessionStorage.getItem('user')),
                member: {
                    memberId: member.memberId,
                    memberAddress: member.memberAddress,
                    memberAge: member.memberAge,
                    memberFirstName: member.memberFirstName,
                    memberLastName: member.memberLastName,
                    memberPhoneNr: member.memberPhoneNr,
                    userId: member.userId
                }
            }

            const fetchOptions = {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            };
            const response = await fetch(urlUpdate + member.memberId, fetchOptions);

            if (!response) {
                const errorMessage = await response.text();
                console.log(errorMessage)
                throw new Error(errorMessage);
            }
        }
    }

    async refreshPage() {
        const memberForm = new ElementObject('cms-content');

        const memberOverview = new ElementObject('overview');
        memberOverview.addComponent(new MemberOverviewComponent(await
            fetch(config.endpoints.member.root+config.endpoints.member.subPoint.getAll).then(response => response.json())));

        memberForm.addComponent(memberOverview)
        memberForm.updateDOM();
        this.addEventListenersMemberTable()
    }
}

export default MemberOverviewComponent;
