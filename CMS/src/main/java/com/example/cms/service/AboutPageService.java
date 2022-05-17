package com.example.cms.service;

import com.example.cms.entity.AboutPage;
import com.example.cms.repository.AboutPageRespository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AboutPageService {

  @Autowired
  AboutPageRespository aboutPageRespository;

}
