package com.example.backend.Controller;

import com.example.backend.Entity.Event;
import com.example.backend.Entity.Member;
import com.example.backend.Entity.User;
import com.example.backend.JSonWrapper.EventUserWrapper;
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
        if(user.getId() == 0 || user == null){
            return eventService.getAll(false);
        }
        Optional<Member> member = memberService.getMemberByUser(user);
        return eventService.getAll(member.isPresent());
    }

    @PostMapping("/new")
    public ResponseEntity<Event> createNewEvent(@RequestBody EventUserWrapper eventUserWrapper){
        if(!eventUserWrapper.getUser().isAdminStatus()){
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }
        User admin = userService.findUser(eventUserWrapper.getUser().getId());
        if(admin.isAdminStatus()){
            Event response = eventService.saveEvent(eventUserWrapper.getEvent());
            return new ResponseEntity<>(response, HttpStatus.CREATED);
        }
        return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
    }
}
