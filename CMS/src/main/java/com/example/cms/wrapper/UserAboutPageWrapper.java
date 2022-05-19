package com.example.cms.wrapper;

import com.example.cms.entity.AboutPage;
import com.example.cms.model.User;

public class UserAboutPageWrapper {

  private User user;
  private AboutPage aboutPage;

  public User getUser() {
    return user;
  }

  public void setUser(User user) {
    this.user = user;
  }

  public AboutPage getAboutPage() {
    return aboutPage;
  }

  public void setAboutPage(AboutPage aboutPage) {
    this.aboutPage = aboutPage;
  }
}
