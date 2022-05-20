package com.example.backend.Service;

import com.example.backend.Entity.Member;
import com.example.backend.Entity.User;
import com.example.backend.Exception.ResourceNotFoundException;
import com.example.backend.Repository.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.stream.Stream;

@Service
public class MemberService {

    @Autowired
    MemberRepository memberRepository;

    public Member saveMember(Member member) {
        memberRepository.save(member);
        return member;
    }

    public Member validateMemberInfo(Member member) {
        try {
            if (member.getMemberFirstName() == "" || member.getMemberLastName() == "" || member.getMemberAddress() == "" || member.getMemberPhoneNr() == "" || member.getMemberAge() == "") {
                memberRepository.deleteById(member.getMemberId());
            }
        } catch (Exception e) {
            System.out.println(e + "Medlem blev ikke oprettet");
        }
        return member;

    }

    public Optional<Member> getMemberByUser(User user){
        return memberRepository.findByUser(user);
    }

    public Member getMemberById(int id) {
        return memberRepository.findById(id).get();
    }

    public Optional<Member> findById(int id) {
        return memberRepository.findById(id);
    }

    public List<Member> getAllMembers() {
        return memberRepository.findAll();
    }

    public void deleteMember(int id) {
        memberRepository.deleteById(id);
    }
}
