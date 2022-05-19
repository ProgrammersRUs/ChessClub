package com.example.cms.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.time.LocalDate;

@Entity
public class FrontPage {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int id;
  private LocalDate creationDate;
  private String header;
  private String body;
  private String imageUrl;
  @Column(columnDefinition="tinyint(1) default 1")
  private String isActive;

  public int getId() {
    return id;
  }

  public LocalDate getCreationDate() {
    return creationDate;
  }

  public void setCreationDate(LocalDate creationDate) {
    this.creationDate = creationDate;
  }

  public String getHeader() {
    return header;
  }

  public void setHeader(String header) {
    this.header = header;
  }

  public String getBody() {
    return body;
  }

  public void setBody(String body) {
    this.body = body;
  }

  public String getImageUrl() {
    return imageUrl;
  }

  public void setImageUrl(String imageUrl) {
    this.imageUrl = imageUrl;
  }

  public String getIsActive() {
    return isActive;
  }

  public void setIsActive(String isActive) {
    this.isActive = isActive;
  }
}
