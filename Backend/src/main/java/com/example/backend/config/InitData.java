package com.example.backend.config;

import com.example.backend.Entity.Event;
import com.example.backend.Entity.Member;
import com.example.backend.Entity.User;
import com.example.backend.Service.EventService;
import com.example.backend.Service.MemberService;
import com.example.backend.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.time.LocalDate;

@Component
public class InitData implements CommandLineRunner {

    @Autowired
    MemberService memberService;

    @Autowired
    UserService userService;

    @Autowired
    EventService eventService;

    @Override
    public void run(String... args) throws Exception {

        User user = new User();
        user.setUserEmail("This@Mail.com");
        user.setUserPassword("123");
        userService.saveUser(user);

        Member member = new Member();
        member.setUser(user);
        member.setMemberFirstName("Johnny");
        member.setMemberLastName("Depp");
        member.setMemberPhoneNr("42042069");
        member.setMemberAge("18/05/1998");
        member.setMemberAddress("This adress is lit 54");
        memberService.saveMember(member);

        Event event = new Event();
        event.setTitle("Hygge skak");
        event.setDescription("Det er her det sker, skak taget til et helt nyt level");
        event.setLocation("Haslev");
        //event.setLocalDate(LocalDate.now());
        eventService.saveEvent(event);


    }


}
