package com.example.backend.Service;

import com.example.backend.Entity.User;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class UserServiceTest {

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
    }
}