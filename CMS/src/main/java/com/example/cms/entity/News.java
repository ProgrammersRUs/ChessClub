package com.example.cms.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Optional;

@Entity
public class News {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int newsId;
    private LocalDate creationDate;
    private String newsHeader;
    private String newsBody;
    private String imageUrl;
    private String href;

    @Column(columnDefinition="tinyint(1)")
    private String isActive;



    public int getNewsId() {
        return newsId;
    }

    public LocalDate getCreationDate() {
        return creationDate;
    }

    public void setLocalDate(LocalDate localDate) {
        this.creationDate = localDate;
    }

    public String getNewsHeader() {
        return newsHeader;
    }

    public void setNewsHeader(String newsHeader) {
        this.newsHeader = newsHeader;
    }

    public String getNewsBody() {
        return newsBody;
    }

    public void setNewsBody(String newsBody) {
        this.newsBody = newsBody;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public void setNewsId(int newsId) {
        this.newsId = newsId;
    }

    public String getHref() {
        return href;
    }

    public void setHref(String href) {
        this.href = href;
    }

    public void setCreationDate(LocalDate creationDate) {
        this.creationDate = creationDate;
    }

    public String getIsActive() {
        return isActive;
    }

    public void setIsActive(String isActive) {
        this.isActive = isActive;
    }
}
