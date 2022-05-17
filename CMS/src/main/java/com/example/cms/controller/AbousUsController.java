package com.example.cms.controller;

import com.example.cms.entity.AboutPage;
import com.example.cms.service.AboutPageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("about-page")
public class AbousUsController {

  @Autowired
  AboutPageService aboutPageService;

  @PostMapping("/new")
  @ResponseStatus(HttpStatus.CREATED)
  public AboutPage postAboutPage(@RequestBody AboutPage aboutPage) {
    return aboutPageService.addNew(aboutPage);
  }

  @GetMapping("/{id}")
  public AboutPage findById(@PathVariable int id) {
    return aboutPageService.getAboutPageById(id);
  }

  @GetMapping("/all-about-pages")
  public List<AboutPage> getAllAboutPage() {
    return aboutPageService.fetAllAboutPages();
  }

  @PutMapping("/{id}")
  public ResponseEntity<AboutPage> updateAboutPage(@PathVariable int id, @RequestBody AboutPage aboutPage){
    Optional<AboutPage> optAboutPage = aboutPageService.findByisOpt(id);
    if (optAboutPage.isPresent()){
      aboutPageService.addNew(aboutPage);
      return  new ResponseEntity<>(aboutPage, HttpStatus.OK);
    } else {
      AboutPage aboutPageNotFound = new AboutPage();
      aboutPageNotFound.setHeader("No about with id: " + id);
      return  new ResponseEntity<>(aboutPage, HttpStatus.NOT_FOUND);
    }
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<String> deleteAboutPage(@PathVariable int id) {
    try {
      aboutPageService.deleteAboutPage(id);
      return new ResponseEntity<>("AboutPage Deleted with id: " + id, HttpStatus.OK);
    } catch (Exception e) {
      return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
    }
  }
}
