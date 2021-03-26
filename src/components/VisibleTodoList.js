import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTodo } from "../actions";
import TodoList from "./TodoList";
import { VisibilityFilters } from "../actions";

function getFilteredTodos(todos, filter) {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed);
    default:
      throw new Error("Unknown filter: " + filter);
  }
}

export default function GetVisibleTodo() {
  const dispatch = useDispatch();
  const { todos, filter } = useSelector(state => {
    return {
      todos: state.todos,
      filter: state.visibilityFilter
    };
  });
  const onToggle = useCallback(id => dispatch(toggleTodo(id)), [dispatch]);

  const visibleTodos = getFilteredTodos(todos, filter);

  return <TodoList todos={visibleTodos} toggleTodo={onToggle} />;
}
