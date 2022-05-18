package com.example.backend.Entity;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;

@Entity
public class Event {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String name;

    @Column(columnDefinition = "BOOLEAN")
    private boolean memberOnly;

    private LocalDate eventDay;

    @OneToMany
    @JoinColumn(name = "event_id")
    private List<Registration> registrations;


    public int getId() {
        return id;
    }

    private int cmsId;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public boolean isMemberOnly() {
        return memberOnly;
    }

    public void setMemberOnly(boolean memberOnly) {
        this.memberOnly = memberOnly;
    }

    public LocalDate getEventDay() {
        return eventDay;
    }

    public void setEventDay(LocalDate eventDay) {
        this.eventDay = eventDay;
    }

    public List<Registration> getRegistrations() {
        return registrations;
    }

    public void setRegistrations(List<Registration> registrations) {
        this.registrations = registrations;
    }

    public int getCmsId() {
        return cmsId;
    }

    public void setCmsId(int cmsId) {
        this.cmsId = cmsId;
    }
}
