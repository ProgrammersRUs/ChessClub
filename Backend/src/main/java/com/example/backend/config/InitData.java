package com.example.backend.config;

import com.example.backend.Entity.Member;
import com.example.backend.Service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.sql.Date;
import java.time.LocalDate;

@Component
public class InitData implements CommandLineRunner {

    @Autowired
    MemberService memberService;

    @Override
    public void run(String... args) throws Exception {

        Member member = new Member();

        member.setFirstName("Johnny");
        member.setLastName("Depp");
        member.setPhoneNr("42042069");
        member.setAge(LocalDate.of(1998,5,18));
        member.setAddress("This adress is lit 54");
        member.setEmail("This@Mail.com");
        memberService.saveMember(member);


    }


}
