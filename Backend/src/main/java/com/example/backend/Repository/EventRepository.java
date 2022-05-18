package com.example.backend.Repository;

import com.example.backend.Entity.Event;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface EventRepository extends JpaRepository<Event, Integer> {

    List<Event> findByMemberOnlyTrue();

    List<Event> findByMemberOnlyFalse();

}
