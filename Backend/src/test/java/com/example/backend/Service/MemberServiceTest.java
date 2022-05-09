package com.example.backend.Service;

import com.example.backend.Entity.Member;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.context.annotation.Import;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.jupiter.api.Assertions.*;

@RunWith(SpringRunner.class)
@DataJpaTest
@Import(MemberService.class)
class MemberServiceTest {

    @Autowired
    MemberService memberService;

    @BeforeEach
    void beforeEach(){


    }

    @Test
    void saveMember() {

        Member member = new Member();

        memberService.saveMember(member);

        Member savedMember = memberService.findById(2).get();

        System.out.println(savedMember + " " + member);

        assertEquals(savedMember,member);
    }

    @Test
    void getMemberById() {
        Member testUser = new Member();

        memberService.saveMember(testUser);

        Member foundID = memberService.getMemberById(testUser.getMemberId());

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