package com.example.backend.Service;

import com.example.backend.Entity.Member;
import com.example.backend.Repository.MemberRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.context.TestConfiguration;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.support.AnnotationConfigContextLoader;

import static org.junit.jupiter.api.Assertions.*;

@DataJpaTest
class MemberServiceTest {

    @Autowired
    MemberRepository memberRepository;

    @BeforeEach
    void beforeEach(){


    }

    @Test
    void saveMember() {

        Member member = new Member();

        memberRepository.save(member);

        Member savedMember = memberRepository.getById(1);

        System.out.println(savedMember + " " + member);

        assertEquals(savedMember,member);
    }

    @Test
    void getMemberById() {
        Member testUser = new Member();

        memberRepository.save(testUser);

        Member foundID = memberRepository.getById(testUser.getMemberId());

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