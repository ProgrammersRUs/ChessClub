package com.example.backend.Service;

import com.example.backend.Entity.User;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.context.annotation.Import;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.jupiter.api.Assertions.*;
@RunWith(SpringRunner.class)
@DataJpaTest
@Import(UserService.class)
class UserServiceTest {


    @Autowired
    UserService userService;

    @Test
    void saveUser() {
    }

    @Test
    void findUser() {
    }

    @Test
    void saveUserStatus() {
        User user = new User("TestMail","Password");

        assertFalse(user.isAdminStatus());
    }

    @Test
    void validateLogin() {
        //Arrange
        User user = new User("TestMail","Password");
        user.setId(1);
        userService.saveUser(user);
        //Act

        User user2 = userService.validateLogin(user.getUserEmail(), user.getUserPassword());
        //assert
        assertNotNull(user);
        assertEquals(user.getUserEmail(),user2.getUserEmail());
        assertEquals(user.getUserPassword(),user2.getUserPassword());

    }
}