package com.example.backend.config;

import com.example.backend.Entity.Member;
import com.example.backend.Entity.User;
import com.example.backend.Service.MemberService;
import com.example.backend.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class InitData implements CommandLineRunner {

    @Autowired
    MemberService memberService;

    @Autowired
    UserService userService;

    @Override
    public void run(String... args) throws Exception {

        User user = new User();
        user.setAdminStatus(true);
        user.setUserEmail("mail@mail.dk");
        user.setUserPassword("123");

        userService.saveUser(user);

    }




}
