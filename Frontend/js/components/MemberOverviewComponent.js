import Component from '../lib/Component.js'

class MemberOverviewComponent extends Component {
    member = 'http://localhost:8080/member/all-members';
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
                                <select class="form-control category-select" id="${member.memberId}">
                                    <option>User</option>
                                    <option>Admin</option>
                                </select>
                            </td>
                            <td>
                                <button type="button" class="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"><i class="fa fa-trash"></i> </button>
                                <button type="button" class="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"><i class="fa fa-edit"></i> </button>
                            </td>
                        </tr>`).join('');
    }

}

export default MemberOverviewComponent;
