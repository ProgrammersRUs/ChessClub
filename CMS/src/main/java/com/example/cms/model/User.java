package com.example.cms.model;

public class User implements Comparable<User>{

    private int id;
    private String userEmail;
    private boolean adminStatus;

    public User() {
    }

    public int getId() {
        return id;
    }

    public String getUserEmail() {
        return userEmail;
    }

    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
    }
    public boolean isAdminStatus() {
        return adminStatus;
    }

    public void setAdminStatus(boolean adminStatus) {
        this.adminStatus = adminStatus;
    }

    @Override
    public int compareTo(User o) {
        if(this.id == o.getId()){
            if(this.userEmail.equals(o.getUserEmail())){
                if(adminStatus == o.isAdminStatus()){
                return 0;
                }
            }
        }
        return -1;
    }
}
