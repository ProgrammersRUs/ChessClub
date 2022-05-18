package com.example.backend.Entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jdk.jfr.BooleanFlag;

import javax.persistence.*;

@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String userEmail;
    @JsonBackReference
    private String userPassword;

    public boolean isAdminStatus() {
        return adminStatus;
    }

    public void setAdminStatus(boolean adminStatus) {
        this.adminStatus = adminStatus;
    }
    @Column(columnDefinition = "BOOLEAN")
    private boolean adminStatus;

    User(String userEmail, String userPassword){
        this.userEmail = userEmail;
        this.userPassword = userPassword;
        adminStatus = false;
    }

    public User() {

    }

    public int getId() {
        return id;
    }

    public void setId(int userId) {
        this.id = userId;
    }

    public String getUserEmail() {
        return userEmail;
    }

    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
    }

    public String getUserPassword() {
        return userPassword;
    }

    public void setUserPassword(String userPassword) {
        this.userPassword = userPassword;
    }

}
