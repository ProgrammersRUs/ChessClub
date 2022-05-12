package com.example.cms.controller;

import com.example.cms.entity.Sponsor;
import com.example.cms.service.SponsorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/sponsor")
public class SponsorController {

    @Autowired
    SponsorService sponsorService;

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
    public Sponsor createNew(@RequestBody Sponsor sponsor) {
        return sponsorService.addNewSponsor(sponsor);
    }

    ;
}
