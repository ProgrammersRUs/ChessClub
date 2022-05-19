package com.example.cms.wrapper;

import com.example.cms.entity.News;
import com.example.cms.model.User;

public class UserNewsWrapper {

    private User user;
    private News news;

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public News getNews() {
        return news;
    }

    public void setNews(News news) {
        this.news = news;
    }
}
