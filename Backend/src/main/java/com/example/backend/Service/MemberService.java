package com.example.backend.Service;

import com.example.backend.Entity.Member;
import com.example.backend.Exception.ResourceNotFoundException;
import com.example.backend.Repository.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class MemberService {

    @Autowired
    MemberRepository memberRepository;

    public Member saveMember(Member member) {
        memberRepository.save(member);
        return member;
    }

    public Member getSingleMember(int id) {
        return memberRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Member not found"));
    }

    public List<Member> getAllMembers(){
        return memberRepository.findAll();
    }

    public void deleteMember(Member member) {
        memberRepository.delete(member);
    }
}
