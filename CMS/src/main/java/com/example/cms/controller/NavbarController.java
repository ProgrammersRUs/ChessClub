package com.example.cms.controller;

import com.example.cms.entity.Navbar;
import com.example.cms.service.NavbarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("navbar")
public class NavbarController {

  @Autowired
  NavbarService navbarService;

  @PostMapping("/createnavbar")
  public ResponseEntity<Navbar> createNavbar(@RequestBody Navbar navbar) {
    return navbarService.create(navbar);
  }

}
