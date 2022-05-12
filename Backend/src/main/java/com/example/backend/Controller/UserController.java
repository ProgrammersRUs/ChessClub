package com.example.backend.Controller;

import com.example.backend.Entity.Member;
import com.example.backend.Entity.User;
import com.example.backend.JSonWrapper.MemberUserWrapper;
import com.example.backend.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("user")
public class UserController {

    @Autowired
    UserService userService;

    @PostMapping("/createuser")
    @ResponseStatus(HttpStatus.CREATED)
    public User postMember(@RequestBody User user) {
        return userService.saveUser(user);
    }

    @GetMapping("/{id}")
    public User findUserById(int id){
        return userService.findUser(id);
    }

    @PutMapping("/update/{id}")
    public User updateStatus(@PathVariable int id) {
       User user = userService.findUser(id);
       if (user != null) {
           user = userService.saveUserStatus(user);
           return user;
       } return null;
    }
}
