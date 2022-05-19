package com.example.cms.controller;

import com.example.cms.entity.FrontPage;
import com.example.cms.service.FrontPageService;
import com.example.cms.service.UserService;
import com.example.cms.wrapper.UserFrontPageWrapper;
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

  @Autowired
  UserService userService;

  @PostMapping("/new")
  public ResponseEntity<FrontPage> postFrontPage(@RequestBody UserFrontPageWrapper userFrontPageWrapper) {
    if(userFrontPageWrapper.getUser() != null){
      if(!userService.validateUser(userFrontPageWrapper.getUser())){
        return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
      }
      FrontPage response = frontPageService.addNew(userFrontPageWrapper.getFrontPage());
      return new ResponseEntity<>(response, HttpStatus.CREATED);

    }return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
  }

  @GetMapping("/{id}")
  public FrontPage findById(@PathVariable int id) {
    return frontPageService.getFrontPageById(id);
  }

  @GetMapping("/all-frontpages")
  public List<FrontPage> getAllFrontPages() {
    return frontPageService.getAllFrontPages();
  }

  @PutMapping("/{id}")
  public ResponseEntity<FrontPage> updateFrontPage(@PathVariable int id, @RequestBody UserFrontPageWrapper userFrontPageWrapper) {
    if (userFrontPageWrapper.getUser() != null) {
      if (!userService.validateAdmin(userFrontPageWrapper.getUser())) {
        return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
      }
      Optional<FrontPage> optfrontPage = frontPageService.findByisOpt(id);
      if (optfrontPage.isPresent()) {
        frontPageService.addNew(userFrontPageWrapper.getFrontPage());
        return new ResponseEntity<>(userFrontPageWrapper.getFrontPage(), HttpStatus.OK);
      } else {
        FrontPage frontPage = new FrontPage();
        frontPage.setHeader("No frontPage with id: " + id);
        return new ResponseEntity<>(frontPage, HttpStatus.NOT_FOUND);
      }
    }
    return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<String> deleteFrontPage(@PathVariable int id, @RequestBody UserFrontPageWrapper userFrontPageWrapper) {
    if (userFrontPageWrapper.getUser() != null) {
      System.out.println(userFrontPageWrapper.getUser().getUserEmail() + " : "+userFrontPageWrapper.getUser().getId() + ": "+ userFrontPageWrapper.getUser().isAdminStatus());
      boolean access = userService.validateAdmin(userFrontPageWrapper.getUser());
      System.out.println(access);
      if (!access) {
        return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
      }
      try {
        frontPageService.deleteFrontPage(id);
        return new ResponseEntity<>("Frontpage deleted with id: " + id, HttpStatus.OK);
      } catch (Exception e) {
        return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
      }
    }
    return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
  }

}
