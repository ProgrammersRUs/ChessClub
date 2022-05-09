package com.example.backend.Service;

import com.example.backend.Entity.Member;
import com.example.backend.Repository.MemberRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.context.TestConfiguration;
import org.springframework.context.annotation.Import;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.context.support.AnnotationConfigContextLoader;

import static org.junit.jupiter.api.Assertions.*;

@RunWith(SpringRunner.class)
@DataJpaTest
@Import(MemberService.class)
class MemberServiceTest {

    @Autowired
    MemberService memberRepository;

    @BeforeEach
    void beforeEach(){


    }

    @Test
    void saveMember() {

        Member member = new Member();

        memberRepository.saveMember(member);

        Member savedMember = memberRepository.findById(2).get();

        System.out.println(savedMember + " " + member);

        assertEquals(savedMember,member);
    }

    @Test
    void getMemberById() {
        Member testUser = new Member();

        memberRepository.saveMember(testUser);

        Member foundID = memberRepository.getMemberById(testUser.getMemberId());

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