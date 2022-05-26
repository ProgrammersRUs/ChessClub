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
import java.util.Optional;

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

    @PutMapping("/{id}")
    public ResponseEntity<Sponsor> updateSponsor(@PathVariable int id, @RequestBody UserSponsorWrapper userSponsorWrapper) {
        if (userSponsorWrapper.getUser() != null) {
            if (!userService.validateAdmin(userSponsorWrapper.getUser())) {
                return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
            }
            Optional<Sponsor> optSponsor = sponsorService.findByisOpt(id);
            if (optSponsor.isPresent()) {
                sponsorService.addNewSponsor(userSponsorWrapper.getSponsor());
                return new ResponseEntity<>(userSponsorWrapper.getSponsor(), HttpStatus.OK);
            } else {
                Sponsor sponsorNotFound = new Sponsor();
                sponsorNotFound.setName("No sponsor with id: " + id);
                return new ResponseEntity<>(sponsorNotFound, HttpStatus.NOT_FOUND);
            }
        }
        return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteSponsor(@PathVariable int id, @RequestBody UserSponsorWrapper userSponsorWrapper) {
        if (userSponsorWrapper.getUser() != null) {
            System.out.println(userSponsorWrapper.getUser().getUserEmail() + " : "+userSponsorWrapper.getUser().getId() + ": "+ userSponsorWrapper.getUser().isAdminStatus());
            boolean access = userService.validateAdmin(userSponsorWrapper.getUser());
            System.out.println(access);
            if (!access) {
                return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
            }
            try {
                sponsorService.deleteSponsor(id);
                return new ResponseEntity<>("sponsor Deleted with id: " + id, HttpStatus.OK);
            } catch (Exception e) {
                return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
            }
        }
        return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
    }
}
