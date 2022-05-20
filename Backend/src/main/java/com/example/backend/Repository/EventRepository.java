package com.example.backend.Repository;

import com.example.backend.Entity.Event;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

public interface EventRepository extends JpaRepository<Event, Integer> {

    List<Event> findByMemberOnlyTrue();

    List<Event> findByMemberOnlyFalse();

    List<Event> findByEventDayAfterOrderByEventDay(LocalDate date);
    List<Event> findByEventDayAfterAndMemberOnlyFalseOrderByEventDay(LocalDate date);

    Optional<Event> findByCmsId(int id);

}
