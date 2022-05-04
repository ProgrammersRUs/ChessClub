package com.example.backend.Service;

import com.example.backend.Entity.Member;
import com.example.backend.Repository.MemberRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import static org.junit.jupiter.api.Assertions.*;

@DataJpaTest
class MemberServiceTest {

    @Autowired
    private MemberRepository memberRepository;

    @Test
    void saveMember() {

        Member member = new Member();

        memberRepository.save(member);

        Member savedMember = memberRepository.getById(1);

        assertEquals(savedMember.getMemberId(), member.getMemberId());



    }

    @Test
    void getMemberById() {
        Member testUser = new Member();

        memberRepository.save(testUser);

        Member foundID = memberRepository.getById(testUser.getMemberId());

        System.out.println(foundID.getMemberId());

        assertEquals(foundID.getMemberId(),testUser.getMemberId());
    }

    @Test
    void findById() {
    }

    @Test
    void getAllMembers() {
    }

    @Test
    void deleteMember() {
    }
}