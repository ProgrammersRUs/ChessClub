package com.example.cms.service;

import com.example.cms.entity.AboutPage;
import com.example.cms.repository.AboutPageRespository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AboutPageService {

  @Autowired
  AboutPageRespository aboutPageRespository;

  public AboutPage addNew(AboutPage aboutPage) {
    return aboutPageRespository.save(aboutPage);
  }

  public AboutPage getAboutPageById(int id) {
    return aboutPageRespository.findById(id).get();
  }

  public List<AboutPage> fetAllAboutPages() {
    return aboutPageRespository.findAll();
  }

  public Optional<AboutPage> findByisOpt(int id) {
    return aboutPageRespository.findById(id);
  }

  public void deleteAboutPage(int id) {
    aboutPageRespository.deleteById(id);
  }
}
