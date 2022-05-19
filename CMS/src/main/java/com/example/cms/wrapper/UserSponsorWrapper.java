package com.example.cms.wrapper;

import com.example.cms.entity.Sponsor;
import com.example.cms.model.User;

public class UserSponsorWrapper {

    private User user;
    private Sponsor sponsor;

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Sponsor getSponsor() {
        return sponsor;
    }

    public void setSponsor(Sponsor sponsor) {
        this.sponsor = sponsor;
    }
}
