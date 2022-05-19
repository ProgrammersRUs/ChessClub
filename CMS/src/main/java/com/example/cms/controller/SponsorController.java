package com.example.cms.controller;

import com.example.cms.entity.Sponsor;
import com.example.cms.service.SponsorService;
import com.example.cms.service.UserService;
import com.example.cms.wrapper.UserSponsorWrapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/sponsor")
public class SponsorController {

    @Autowired
    SponsorService sponsorService;

    @Autowired
    UserService userService;

    @RequestMapping("/{id}")
    public Sponsor getById(@PathVariable int id) {
        return sponsorService.getSponsorById(id);
    }

    @RequestMapping("/get-all")
    public List<Sponsor> getAll() {
        return sponsorService.getAllSponsors();
    }

    @PostMapping("/new")
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<Sponsor> createNew(@RequestBody UserSponsorWrapper userSponsorWrapper) {
        if (userSponsorWrapper.getUser() != null) {
            if (userService.validateAdmin(userSponsorWrapper.getUser())) {
                Sponsor sponsor = sponsorService.addNewSponsor(userSponsorWrapper.getSponsor());
                return new ResponseEntity<>(sponsor, HttpStatus.CREATED);
            }
        }
        return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
    }
}
