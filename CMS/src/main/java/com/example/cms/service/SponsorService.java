package com.example.cms.service;

import com.example.cms.entity.Sponsor;
import com.example.cms.repository.SponsorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SponsorService {

    @Autowired
    SponsorRepository sponsorRepository;

    public Sponsor getSponsorById(int id) {
        return sponsorRepository.findById(id).get();
    }

    public List<Sponsor> getAllSponsors() {
        return sponsorRepository.findAll();
    }

    public Sponsor addNewSponsor(Sponsor sponsor) {
        return sponsorRepository.save(sponsor);
    }

    public Optional<Sponsor> findByisOpt(int id) {
        return sponsorRepository.findById(id);
    }

    public void deleteSponsor(int id) {
        sponsorRepository.deleteById(id);
    }
}
