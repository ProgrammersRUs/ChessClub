package com.example.backend.JSonWrapper;

import com.example.backend.Entity.Event;
import com.example.backend.Entity.User;

public class EventUserWrapper {

    private User user;
    private Event event;


    public Event getEvent() {
        return event;
    }

    public void setEvent(Event event) {
        this.event = event;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
