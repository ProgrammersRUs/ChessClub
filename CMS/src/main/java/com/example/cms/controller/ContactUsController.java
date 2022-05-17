package com.example.cms.controller;

import com.example.cms.entity.ContactUsPage;
import com.example.cms.service.ContactUsService;
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
@RequestMapping("contact-us-page")
public class ContactUsController {

  @Autowired
  ContactUsService contactUsService;

  @PostMapping("/new")
  @ResponseStatus(HttpStatus.CREATED)
  public ContactUsPage postContactUsPage(@RequestBody ContactUsPage contactUsPage) {
    return contactUsService.addNew(contactUsPage);
  }

  @GetMapping("/{id}")
  public ContactUsPage findById(@PathVariable int id) {
    return contactUsService.getAboutPageById(id);
  }

  @GetMapping("/all-contactus-pages")
  public List<ContactUsPage> getAllContactUsPages() {
    return contactUsService.getAllContactUsPages();
  }

  @PutMapping("/{id}")
  public ResponseEntity<ContactUsPage> updateContactUs(@PathVariable int id, @RequestBody ContactUsPage contactUsPage){
    Optional<ContactUsPage> optContactUsPage = contactUsService.findByisOpt(id);
    if (optContactUsPage.isPresent()){
      contactUsService.addNew(contactUsPage);
      return  new ResponseEntity<>(contactUsPage, HttpStatus.OK);
    } else {
      ContactUsPage contactUsPageNotFound = new ContactUsPage();
      contactUsPageNotFound.setHeader("No contact-us with id: " + id);
      return  new ResponseEntity<>(contactUsPage, HttpStatus.NOT_FOUND);
    }
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<String> deleteContactUsPage(@PathVariable int id) {
    try {
      contactUsService.deleteContactUsPage(id);
      return new ResponseEntity<>("ContactUs Deleted with id: " + id, HttpStatus.OK);
    } catch (Exception e) {
      return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
    }

  }

}
