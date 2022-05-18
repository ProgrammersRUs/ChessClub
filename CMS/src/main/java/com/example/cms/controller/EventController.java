package com.example.cms.controller;


import com.example.cms.entity.Event;
import com.example.cms.service.EventService;
import com.example.cms.service.UserService;
import com.example.cms.wrapper.UserEventWrapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("event")
public class EventController {

    @Autowired
    EventService eventService;

    @Autowired
    UserService userService;

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

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteEvent(@PathVariable int id, @RequestBody UserEventWrapper userEventWrapper) {
        if (userEventWrapper.getUser() != null) {
            System.out.println(userEventWrapper.getUser().getUserEmail() + " : " + userEventWrapper.getUser().getId() + ": " + userEventWrapper.getUser().isAdminStatus());
            boolean access = userService.validateAdmin(userEventWrapper.getUser());
            System.out.println(access);
            if (!access) {
                return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
            }
            try {
                eventService.deleteEvent(id);
                return new ResponseEntity<>("Event deleted with id: " + id, HttpStatus.OK);
            } catch (Exception e) {
                return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
            }
        }
        return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
    }
}
