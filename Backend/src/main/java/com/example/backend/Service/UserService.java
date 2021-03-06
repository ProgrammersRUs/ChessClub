package com.example.backend.Service;

import com.example.backend.Entity.User;
import com.example.backend.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    public User saveUser(User user) {
        userRepository.save(user);
        return user;
    }

    public User findUser(int id) {
        return userRepository.findById(id).get();
    }

    public User saveUserStatus(User user, boolean status) {
        user.setAdminStatus(status);
        userRepository.save(user);
        return user;
    }

    public User validateLogin(String email, String password) {
        return userRepository.findByUserEmailAndUserPassword(email, password);
    }
}
