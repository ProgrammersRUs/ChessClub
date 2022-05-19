package com.example.cms.entity;

import javax.persistence.*;

@Entity
public class Navbar {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int navbarId;
    private String navbarTitle;
    private String subTitle;
    private String logoUrl;
    private String navbarLinks;

    //hvad gør den her??
    @Column(columnDefinition="tinyint(1)")
    private String isActive;


  public int getNavbarId() {
    return navbarId;
  }

  public void setNavbarId(int navbarId) {
    this.navbarId = navbarId;
  }

  public String getNavbarTitle() {
    return navbarTitle;
  }

  public void setNavbarTitle(String navbarTitle) {
    this.navbarTitle = navbarTitle;
  }

  public String getSubTitle() {
    return subTitle;
  }

  public void setSubTitle(String subTitle) {
    this.subTitle = subTitle;
  }

  public String getLogoUrl() {
    return logoUrl;
  }

  public void setLogoUrl(String logoUrl) {
    this.logoUrl = logoUrl;
  }

  public String getNavbarLinks() {
    return navbarLinks;
  }

  public void setNavbarLinks(String navbarLinks) {
    this.navbarLinks = navbarLinks;
  }

  public String getIsActive() {
    return isActive;
  }

  public void setIsActive(String isActive) {
    this.isActive = isActive;
  }
}
