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
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("event")
public class EventController {

    @Autowired
    EventService eventService;

    @Autowired
    UserService userService;

    @PostMapping("/createEvent")
    public ResponseEntity<Event> postEvent(@RequestBody UserEventWrapper userEventWrapper) {
        if(userEventWrapper.getUser() != null){
            if(!userService.validateUser(userEventWrapper.getUser())){
                return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
            }
            Event response = eventService.saveEvent(userEventWrapper.getEvent());
            return new ResponseEntity<>(response, HttpStatus.CREATED);

        }return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
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

    @PostMapping("/get-all")
    public ResponseEntity<List<Event>> getEvents(@RequestBody List<Integer> eventIds) {
        return new ResponseEntity<>(eventService.getAllEventsById(eventIds), HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Event> updateEvent(@PathVariable int id, @RequestBody UserEventWrapper userEventWrapper) {
        if (userEventWrapper.getUser() != null) {
            if (!userService.validateAdmin(userEventWrapper.getUser())) {
                return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
            }
            Optional<Event> optEvent = eventService.findByIdOpt(id);
            if (optEvent.isPresent()) {
                eventService.saveEvent(userEventWrapper.getEvent());
                return new ResponseEntity<>(userEventWrapper.getEvent(), HttpStatus.OK);
            } else {
                Event eventNotFound = new Event();
                eventNotFound.setTitle("No event with id: " + id);
                return new ResponseEntity<>(eventNotFound, HttpStatus.NOT_FOUND);
            }
        }
        return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
    }
}
