package com.example.backend.Service;

import com.example.backend.Entity.Event;
import com.example.backend.Repository.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EventService {

    @Autowired
    EventRepository eventRepository;

    public Event saveEvent(Event event) {
        eventRepository.save(event);
        return event;
    }

    public Event findEvent(int id) {
        return eventRepository.findById(id).get();
    }

    public List<Event> getAllEvents() {
        return eventRepository.findAll();
    }
}