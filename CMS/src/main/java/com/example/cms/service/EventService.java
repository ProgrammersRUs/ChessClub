package com.example.cms.service;

import com.example.cms.entity.Event;
import com.example.cms.repository.EventRepository;
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

    public List<Event> getNextEvent(){
        return eventRepository.findAllByEventIdOrderByLocalDateAsc();
    }
}