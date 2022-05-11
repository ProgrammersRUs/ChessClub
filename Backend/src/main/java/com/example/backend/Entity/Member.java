package com.example.backend.Entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.sun.istack.NotNull;

import javax.persistence.*;

@Entity
public class Member {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int memberId;

    @OneToOne
    @JoinColumn(name = "user_id")
    @JsonBackReference
    @NotNull
    private User user;

    private String memberFirstName;

    private String memberLastName;

    private String memberPhoneNr;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-dd-MM")
    private String memberAge;

    private String memberAddress;


    public int getMemberId() {
        return memberId;
    }

    public void setMemberId(int memberId) {
        this.memberId = memberId;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }


    public String getMemberFirstName() {
        return memberFirstName;
    }

    public void setMemberFirstName(String firstName) {
        this.memberFirstName = firstName;
    }

    public String getMemberLastName() {
        return memberLastName;
    }

    public void setMemberLastName(String lastName) {
        this.memberLastName = lastName;
    }

    public String getMemberPhoneNr() {
        return memberPhoneNr;
    }

    public void setMemberPhoneNr(String phoneNr) {
        this.memberPhoneNr = phoneNr;
    }

    public String getMemberAge() {
        return memberAge;
    }

    public void setMemberAge(String age) {
        this.memberAge = age;
    }

    public String getMemberAddress() {
        return memberAddress;
    }

    public void setMemberAddress(String address) {
        this.memberAddress = address;
    }
}
