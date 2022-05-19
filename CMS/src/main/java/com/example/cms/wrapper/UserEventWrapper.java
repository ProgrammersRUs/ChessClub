package com.example.cms.wrapper;

import com.example.cms.entity.Event;
import com.example.cms.model.User;

public class UserEventWrapper {

    private User user;
    private Event event;

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Event getEvent() {
        return event;
    }

    public void setEvent(Event event) {
        this.event = event;
    }
}
