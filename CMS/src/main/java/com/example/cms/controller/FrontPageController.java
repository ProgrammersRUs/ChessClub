package com.example.cms.controller;

import com.example.cms.entity.FrontPage;
import com.example.cms.service.FrontPageService;
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
@RequestMapping("front-page")
public class FrontPageController {

  @Autowired
  FrontPageService frontPageService;

  @PostMapping("/new")
  @ResponseStatus(HttpStatus.CREATED)
  public FrontPage postFrontPage(@RequestBody FrontPage frontPage) {
    return frontPageService.addNew(frontPage);
  }

  @GetMapping("/{id}")
  public FrontPage findById(@PathVariable int id) {
    return frontPageService.getFrontPageById(id);
  }

  @GetMapping("/all-fronpages")
  public List<FrontPage> getAllFrontPages() {
    return frontPageService.getAllFrontPages();
  }

  @PutMapping("/{id}")
  public ResponseEntity<FrontPage> FrontPage(@PathVariable int id, @RequestBody FrontPage frontPage){
    Optional<FrontPage> optFrontPage = frontPageService.findByisOpt(id);
    if (optFrontPage.isPresent()){
      frontPageService.addNew(frontPage);
      return  new ResponseEntity<>(frontPage, HttpStatus.OK);
    } else {
      FrontPage frontPageNotFound = new FrontPage();
      frontPageNotFound.setHeader("No frontPage with id: " + id);
      return  new ResponseEntity<>(frontPage, HttpStatus.NOT_FOUND);
    }
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<String> deleteFrontPage(@PathVariable int id) {
    try {
      frontPageService.deleteFrontPage(id);
      return new ResponseEntity<>("FrontPage Deleted with id: " + id, HttpStatus.OK);
    } catch (Exception e) {
      return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
    }

  }

}
