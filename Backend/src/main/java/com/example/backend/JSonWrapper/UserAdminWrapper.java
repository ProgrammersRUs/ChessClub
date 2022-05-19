package com.example.backend.JSonWrapper;

import com.example.backend.Entity.User;

public class UserAdminWrapper {

    private User admin;
    private User user;

    public User getAdmin() {
        return admin;
    }

    public void setAdmin(User admin) {
        this.admin = admin;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
