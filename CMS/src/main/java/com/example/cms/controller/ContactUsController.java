package com.example.cms.controller;

import com.example.cms.entity.ContactUsPage;
import com.example.cms.service.ContactUsService;
import com.example.cms.service.UserService;
import com.example.cms.wrapper.UserContactUsWrapper;
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
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("contact-us-page")
public class ContactUsController {

  @Autowired
  ContactUsService contactUsService;

  @Autowired
  UserService userService;

  @PostMapping("/new")
  public ResponseEntity<ContactUsPage> postContactUsPage(@RequestBody UserContactUsWrapper userContactUsWrapper) {
    if(userContactUsWrapper.getUser() != null){
      if(!userService.validateUser(userContactUsWrapper.getUser())){
        return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
      }
      ContactUsPage response = contactUsService.addNew(userContactUsWrapper.getContactUsPage());
      return new ResponseEntity<>(response, HttpStatus.CREATED);

    }return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
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
  public ResponseEntity<ContactUsPage> updateContactUsPage(@PathVariable int id, @RequestBody UserContactUsWrapper userContactUsWrapper) {
    if (userContactUsWrapper.getUser() != null) {
      if (!userService.validateAdmin(userContactUsWrapper.getUser())) {
        return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
      }
      Optional<ContactUsPage> optContactUs = contactUsService.findByisOpt(id);
      if (optContactUs.isPresent()) {
        contactUsService.addNew(userContactUsWrapper.getContactUsPage());
        return new ResponseEntity<>(userContactUsWrapper.getContactUsPage(), HttpStatus.OK);
      } else {
        ContactUsPage contactPageNotFound = new ContactUsPage();
        contactPageNotFound.setHeader("No page post with id: " + id);
        return new ResponseEntity<>(contactPageNotFound, HttpStatus.NOT_FOUND);
      }
    }
    return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<String> deleteContactUsPage(@PathVariable int id, @RequestBody UserContactUsWrapper userContactUsWrapper) {
    if (userContactUsWrapper.getUser() != null) {
      System.out.println(userContactUsWrapper.getUser().getUserEmail() + " : "+userContactUsWrapper.getUser().getId() + ": "+ userContactUsWrapper.getUser().isAdminStatus());
      boolean access = userService.validateAdmin(userContactUsWrapper.getUser());
      System.out.println(access);
      if (!access) {
        return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
      }
      try {
        contactUsService.deleteContactUsPage(id);
        return new ResponseEntity<>("Contactus post deleted with id: " + id, HttpStatus.OK);
      } catch (Exception e) {
        return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
      }
    }
    return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
  }

}
