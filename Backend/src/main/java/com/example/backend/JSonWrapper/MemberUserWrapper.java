package com.example.backend.JSonWrapper;

import com.example.backend.Entity.Member;
import com.example.backend.Entity.User;

public class MemberUserWrapper {
    private Member member;
    private User user;

    public Member getMember() {
        return member;
    }

    public void setMember(Member member) {
        this.member = member;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }


}
