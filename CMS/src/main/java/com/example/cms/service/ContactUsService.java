package com.example.cms.service;

import com.example.cms.entity.ContactUsPage;
import com.example.cms.repository.ContactUsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ContactUsService {

  @Autowired
  ContactUsRepository contactUsRepository;

  public ContactUsPage addNew(ContactUsPage contactUsPage) {
    return contactUsRepository.save(contactUsPage);
  }

  public ContactUsPage getAboutPageById(int id) {
    return  contactUsRepository.findById(id).get();
  }

  public List<ContactUsPage> getAllContactUsPages() {
    return contactUsRepository.findAll();
  }

  public Optional<ContactUsPage> findByisOpt(int id) {
    return contactUsRepository.findById(id);
  }

  public void deleteContactUsPage(int id) {
    contactUsRepository.deleteById(id);
  }
}
