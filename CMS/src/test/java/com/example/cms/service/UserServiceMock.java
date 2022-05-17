package com.example.cms.service;

import com.example.cms.model.User;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.ArgumentCaptor;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;


import static org.mockito.Mockito.*;

@RunWith(MockitoJUnitRunner.class)
@DataJpaTest
public class UserServiceMock {

    @Mock
    private IUserService userService;

    @Test
    public void validateUserTest() {
        User user = new User();

        userService.validateUser(user);

        ArgumentCaptor<User> argumentCaptor = ArgumentCaptor.forClass(User.class);

        verify(userService).validateUser(argumentCaptor.capture());

    }

    @Test
    public void validateAdmin() {
        User user = new User();
        user.setAdminStatus(true);

        userService.validateAdmin(user);

        ArgumentCaptor<User> argumentCaptor = ArgumentCaptor.forClass(User.class);

        verify(userService, times(1)).validateAdmin(user);

    }

    @Test
    public void validUser() {
        User user = new User();

        when(userService.validateUser(user)).thenReturn(true);

        Assert.assertEquals(true, userService.validateUser(user));

        verify(userService).validateUser(user);

    }

    @Test
    public void invalidUser(){
        User user = new User();

        when(userService.validateUser(user)).thenReturn(false);

        Assert.assertFalse(userService.validateUser(user));

        verify(userService).validateUser(user);

    }

    @Test
    public void isAdmin(){
        User user = new User();
        user.setAdminStatus(true);

        when(userService.validateAdmin(user)).thenReturn(true);

        Assert.assertTrue(userService.validateAdmin(user));

        verify(userService).validateAdmin(user);
    }

    @Test
    public void isntAdmin(){
        User user = new User();
        user.setAdminStatus(false);

        when(userService.validateAdmin(user)).thenReturn(false);

        Assert.assertFalse(userService.validateAdmin(user));

        verify(userService).validateAdmin(user);
    }
}
