package com.example.cms.wrapper;

import com.example.cms.entity.ContactUsPage;
import com.example.cms.model.User;

public class UserContactUsWrapper {

  private User user;
  private ContactUsPage contactUsPage;

  public User getUser() {
    return user;
  }

  public void setUser(User user) {
    this.user = user;
  }

  public ContactUsPage getContactUsPage() {
    return contactUsPage;
  }

  public void setContactUsPage(ContactUsPage contactUsPage) {
    this.contactUsPage = contactUsPage;
  }
}
