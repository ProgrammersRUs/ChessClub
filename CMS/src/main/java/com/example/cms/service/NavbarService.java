package com.example.cms.service;

import com.example.cms.entity.Navbar;
import com.example.cms.repository.NavbarRepository;
import org.springframework.beans.factory.annotation.Autowired;

public class NavbarService {

  @Autowired
  NavbarRepository navbarRepository;

  public Navbar create(Navbar navbar) {
    return navbarRepository.save(navbar);
  }




}
