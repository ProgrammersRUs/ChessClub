package com.example.cms.service;

import com.example.cms.repository.FrontPageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FrontPageService {

  @Autowired
  FrontPageRepository frontPageRepository;

}
