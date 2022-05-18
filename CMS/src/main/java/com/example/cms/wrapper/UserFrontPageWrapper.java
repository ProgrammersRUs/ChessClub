package com.example.cms.wrapper;

import com.example.cms.entity.FrontPage;
import com.example.cms.model.User;

public class UserFrontPageWrapper {
  private User user;
  private FrontPage frontPage;

  public User getUser() {
    return user;
  }

  public void setUser(User user) {
    this.user = user;
  }

  public FrontPage getFrontPage() {
    return frontPage;
  }

  public void setFrontPage(FrontPage frontPage) {
    this.frontPage = frontPage;
  }
}
