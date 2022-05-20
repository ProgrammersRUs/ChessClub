package com.example.backend.Controller;

import com.example.backend.Entity.Event;
import com.example.backend.Entity.Member;
import com.example.backend.Entity.Registration;
import com.example.backend.Entity.User;
import com.example.backend.JSonWrapper.EventUserWrapper;
import com.example.backend.JSonWrapper.UserJoinDataWrapper;
import com.example.backend.Service.EventService;
import com.example.backend.Service.MemberService;
import com.example.backend.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/event")
public class EventController {

    @Autowired
    private EventService eventService;

    @Autowired
    private UserService userService;

    @Autowired
    private MemberService memberService;

    @PostMapping("/get-all")
    public List<Event> getAll(@RequestBody User user) {
        if (user.getId() == 0 || user == null) {
            return eventService.getAll(false);
        }
        Optional<Member> member = memberService.getMemberByUser(user);
        return eventService.getAll(member.isPresent());
    }


    @PostMapping("/all-upcoming")
    public List<Event> getAllUpcoming(@RequestBody User user) {
        if (user.getId() == 0 || user == null) {
            return eventService.getAllUpcoming(false);
        }
        Optional<Member> member = memberService.getMemberByUser(user);
        return eventService.getAllUpcoming(member.isPresent());
    }

    @PostMapping("/new")
    public ResponseEntity<Event> createNewEvent(@RequestBody EventUserWrapper eventUserWrapper) {
        if (!eventUserWrapper.getUser().isAdminStatus()) {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }
        User admin = userService.findUser(eventUserWrapper.getUser().getId());
        if (admin.isAdminStatus()) {
            Event response = eventService.saveEvent(eventUserWrapper.getEvent());
            return new ResponseEntity<>(response, HttpStatus.CREATED);
        }
        return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
    }

    @PostMapping("/join/{eventId}")
    public ResponseEntity<Registration> joinEvent(@PathVariable int eventId, @RequestBody UserJoinDataWrapper userJoinDateWrapper) {
        Optional<Event> optionalEvent = eventService.getEventByCmsId(eventId);
        System.out.println(optionalEvent.isPresent());
        if (optionalEvent.isPresent()) {
            Event event = optionalEvent.get();
            if (userJoinDateWrapper.getUser() == null || userJoinDateWrapper.getUser().getId() == 0) {
                if (event.isMemberOnly()) {
                    return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
                }
                Registration response = eventService.joinEvent(event, userJoinDateWrapper.getEmail(), userJoinDateWrapper.getName());
                return new ResponseEntity<>(response, HttpStatus.CREATED);

            }
            Optional<Member> member = memberService.getMemberByUser(userJoinDateWrapper.getUser());
            if (member.isPresent()) {
                Registration response = eventService.joinEvent(event, member.get());
                return new ResponseEntity<>(response, HttpStatus.CREATED);
            }
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PostMapping("/getRegistrations/{eventId}")
    public ResponseEntity<List<Registration>> getRegistrationByEvent(@PathVariable int eventId, @RequestBody User user) {
        Optional<Event> optionalEvent = eventService.getEventById(eventId);
        if (optionalEvent.isPresent()) {
            Event event = optionalEvent.get();
            if (user == null || user.getId() == 0) {
                return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
            }
            if (userService.findUser(user.getId()).isAdminStatus() && user.isAdminStatus()) {
                return new ResponseEntity<>(event.getRegistrations(), HttpStatus.OK);
            }
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}
