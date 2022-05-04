package com.example.backend.config;

import com.example.backend.Entity.Member;
import com.example.backend.Service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class InitData implements CommandLineRunner {

    @Autowired
    MemberService memberService;

    @Override
    public void run(String... args) throws Exception {

        Member member = new Member();

        member.setMemberFirstName("Johnny");
        member.setMemberLastName("Depp");
        member.setMemberPhoneNr("42042069");
        member.setMemberAge("18/05/1998");
        member.setMemberAddress("This adress is lit 54");
        member.setMemberEmail("This@Mail.com");
        memberService.saveMember(member);


    }


}
