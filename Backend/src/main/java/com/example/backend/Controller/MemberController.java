package com.example.backend.Controller;

import com.example.backend.Entity.Member;
import com.example.backend.Service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("member")
public class MemberController {

    @Autowired
    MemberService memberService;

    //CREATE
    @GetMapping("/createMember")
    @ResponseStatus(HttpStatus.CREATED)
    public Member postMember(@RequestBody Member member){
        return memberService.saveMember(member);
    }

}
