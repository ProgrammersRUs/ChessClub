package com.example.backend.Controller;

import com.example.backend.Entity.Member;
import com.example.backend.Entity.User;
import com.example.backend.JSonWrapper.MemberUserWrapper;
import com.example.backend.JSonWrapper.UserAdminWrapper;
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
    public User findUserById(@PathVariable int id) {
        return userService.findUser(id);
    }

    @PutMapping("/update-status")
    public ResponseEntity<User> updateStatus(@RequestBody UserAdminWrapper userAdminWrapperser) {
        if(userAdminWrapperser.getAdmin() == null){
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }
        User admin = userService.findUser(userAdminWrapperser.getAdmin().getId());
        if (admin.isAdminStatus() && userAdminWrapperser.getAdmin().isAdminStatus()) {
            User updateUser = userService.findUser(userAdminWrapperser.getUser().getId());
            if (updateUser != null) {
                updateUser = userService.saveUserStatus(updateUser, userAdminWrapperser.getUser().isAdminStatus());
                return new ResponseEntity<>(updateUser, HttpStatus.OK);
            }
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
    }
}
