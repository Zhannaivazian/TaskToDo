package org.redischool.sd2.todo.domain;

import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.Period;

@Service
final class ConcreteTodoListService implements TodoListService {
  @Override
  public void addTask(String label) {

  }

  @Override
  public void addTaskWithDeadline(String label, LocalDate deadline) {

  }

  @Override
  public void addRecurringTask(String label, Period recurrencePeriod) {

  }

  @Override
  public void addShoppingItem(String label, int amount) {

  }

  @Override
  public void markCompleted(String itemId) {

  }
}