package com.example.cms.service;

import com.example.cms.entity.FrontPage;
import com.example.cms.repository.FrontPageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FrontPageService {

  @Autowired
  FrontPageRepository frontPageRepository;

  public FrontPage addNew(FrontPage frontPage) {
    return frontPageRepository.save(frontPage);
  }

  public FrontPage getFrontPageById(int id) {
    return frontPageRepository.findById(id).get();
  }

  public List<FrontPage> getAllFrontPages() {
    return frontPageRepository.findAll();
  }

  public Optional<FrontPage> findByisOpt(int id) {
    return frontPageRepository.findById(id);
  }

  public void deleteFrontPage(int id) {
    frontPageRepository.deleteById(id);
  }
}
