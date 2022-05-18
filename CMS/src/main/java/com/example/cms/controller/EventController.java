package com.example.cms.controller;


import com.example.cms.entity.Event;
import com.example.cms.service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("event")
public class EventController {

    @Autowired
    EventService eventService;

    @PostMapping("/createEvent")
    @ResponseStatus(HttpStatus.CREATED)
    public Event postEvent(@RequestBody Event event) {
        return eventService.saveEvent(event);
    }

    @GetMapping("/{id}")
    public Event findEventById(@PathVariable int id) {
        return eventService.findEvent(id);
    }

    @GetMapping("/all-events")
    public List<Event> getAllEvents() {
        return eventService.getAllEvents();
    }

    @GetMapping("/next-event")
    public List<Event> getNextEvent(){
        return eventService.getNextEvent();
    }
}
