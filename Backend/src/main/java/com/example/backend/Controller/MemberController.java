package com.example.backend.Controller;

import com.example.backend.Entity.Member;
import com.example.backend.Exception.ResourceNotFoundException;
import com.example.backend.Service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("member")
public class MemberController {

    @Autowired
    MemberService memberService;

    //CREATE
    @GetMapping("/createMember")
    @ResponseStatus(HttpStatus.CREATED)
    public Member postMember(@RequestBody Member member) {
        return memberService.saveMember(member);
    }

    //READ
    @GetMapping("/{id}")
    public Member findById(@PathVariable int id) {
        return memberService.getMemberById(id);
    }

    //READ ALL MEMBERS
    @GetMapping("/all-members")
    public List<Member> getAllMembers() {
        return memberService.getAllMembers();
    }

    //UPDATE
    @PutMapping("/update/{id}")
    public ResponseEntity<Member> updateMember(@PathVariable int id, @RequestBody Member member) {
        Optional<Member> optionalMember = memberService.findById(id);
        if (optionalMember.isPresent()) {
            memberService.saveMember(member);
            return new ResponseEntity<>(member, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(member, HttpStatus.OK);
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteMember(@RequestBody Member member) {
        try {
            memberService.deleteMember(member);
            return new ResponseEntity<>("Member Deleted with id: " + member.getMemberId(), HttpStatus.OK);
        } catch (ResourceNotFoundException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
        }

    }


}
