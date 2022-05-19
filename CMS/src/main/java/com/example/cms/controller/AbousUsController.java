package com.example.cms.controller;

import com.example.cms.entity.AboutPage;
import com.example.cms.service.AboutPageService;
import com.example.cms.service.UserService;
import com.example.cms.wrapper.UserAboutPageWrapper;
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

  @Autowired
  UserService userService;

  @PostMapping("/new")
  @ResponseStatus(HttpStatus.CREATED)
  public ResponseEntity<AboutPage> postAboutPage(@RequestBody UserAboutPageWrapper userAboutPageWrapper) {
    if(userAboutPageWrapper.getUser() != null){
      if(!userService.validateUser(userAboutPageWrapper.getUser())){
        return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
      }
      AboutPage response = aboutPageService.addNew(userAboutPageWrapper.getAboutPage());
      return new ResponseEntity<>(response, HttpStatus.CREATED);

    }return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
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
  public ResponseEntity<AboutPage> updateAboutPage(@PathVariable int id, @RequestBody UserAboutPageWrapper userAboutPageWrapper) {
    if (userAboutPageWrapper.getUser() != null) {
      if (!userService.validateAdmin(userAboutPageWrapper.getUser())) {
        return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
      }
      Optional<AboutPage> optAboutPage = aboutPageService.findByisOpt(id);
      if (optAboutPage.isPresent()) {
        aboutPageService.addNew(userAboutPageWrapper.getAboutPage());
        return new ResponseEntity<>(userAboutPageWrapper.getAboutPage(), HttpStatus.OK);
      } else {
        AboutPage aboutPageNotFound = new AboutPage();
        aboutPageNotFound.setHeader("No post with id: " + id);
        return new ResponseEntity<>(aboutPageNotFound, HttpStatus.NOT_FOUND);
      }
    }
    return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<String> deleteAboutPage(@PathVariable int id, @RequestBody UserAboutPageWrapper userAboutPageWrapper) {
    if (userAboutPageWrapper.getUser() != null) {
      System.out.println(userAboutPageWrapper.getUser().getUserEmail() + " : "+userAboutPageWrapper.getUser().getId() + ": "+ userAboutPageWrapper.getUser().isAdminStatus());
      boolean access = userService.validateAdmin(userAboutPageWrapper.getUser());
      System.out.println(access);
      if (!access) {
        return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
      }
      try {
        aboutPageService.deleteAboutPage(id);
        return new ResponseEntity<>("Post Deleted with id: " + id, HttpStatus.OK);
      } catch (Exception e) {
        return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
      }
    }
    return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
  }
}
