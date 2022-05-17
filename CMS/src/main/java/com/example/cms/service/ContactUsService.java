package com.example.cms.service;

import com.example.cms.repository.ContactUsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ContactUsService {

  @Autowired
  ContactUsRepository contactUsRepository;
}
