package com.example.backend.Service;

import com.example.backend.Entity.Event;
import com.example.backend.Entity.Member;
import com.example.backend.Entity.Registration;
import com.example.backend.Repository.EventRepository;
import com.example.backend.Repository.RegistrationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class EventService {

    @Autowired
    private EventRepository eventRepository;

    @Autowired
    private RegistrationRepository registrationRepository;

    public Optional<Event> getEventById(int id) {
        return eventRepository.findById(id);
    }

    public Event saveEvent(Event event) {
        if(event.getEventDay() == null){
            event.setEventDay(LocalDate.now());
        }
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

    public List<Event> getAllUpcoming(boolean allowed){
        if (allowed) {
            return eventRepository.findByEventDayAfterOrderByEventDay(LocalDate.now().minusDays(1));
        }
        return eventRepository.findByEventDayAfterAndMemberOnlyFalseOrderByEventDay(LocalDate.now().minusDays(1));
    }


    public Registration joinEvent(Event event, Member member){
        Registration registration = new Registration();
        registration.setName(member.getMemberFirstName() + " " +member.getMemberLastName());
        registration.setEmail(member.getUser().getUserEmail());
        registration.setMember(member);
        registration.setRegistrationDate(LocalDate.now());
        event.getRegistrations().add(registration);

        registrationRepository.save(registration);
        eventRepository.save(event);

        return registration;
    }

    public Registration joinEvent(Event event, String email, String name){
        Registration registration = new Registration();
        registration.setName(name);
        registration.setEmail(email);
        registration.setExternalRegistation(true);
        registration.setRegistrationDate(LocalDate.now());
        event.getRegistrations().add(registration);

        registrationRepository.save(registration);
        eventRepository.save(event);

        return registration;
    }
}
