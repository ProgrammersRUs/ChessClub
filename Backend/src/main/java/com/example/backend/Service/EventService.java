package com.example.backend.Service;

import com.example.backend.Entity.Event;
import com.example.backend.Repository.EventRepository;
import com.example.backend.Repository.RegistrationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EventService {

    @Autowired
    private EventRepository eventRepository;

    @Autowired
    private RegistrationRepository registrationRepository;

    public Event getEventById(int id) {
        return eventRepository.getById(id);
    }

    public Event saveEvent(Event event) {
        if (!event.getRegistrations().isEmpty()) {
            registrationRepository.saveAll(event.getRegistrations());
        }
        return eventRepository.save(event);
    }

    public List<Event> getAll(boolean allowed) {
        if (allowed) {
            return eventRepository.findAll();
        }
        return eventRepository.findByMemberOnlyFalse();
    }

}
