import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setVisibilityFilter } from "../actions";
import Link from "./Link";

export default function FilterLink(props) {
  const active = useSelector(
    state => {
      console.log("state", state.visibilityFilter);
      console.log("props", props.filter);
      return props.filter === state.visibilityFilter;
    },
    [props.filter]
  );
  const dispatch = useDispatch();

  const onClick = useCallback(() => {
    console.log("change filter", props.filter);
    return dispatch(setVisibilityFilter(props.filter));
  }, [props.filter, dispatch]);

  console.log("render filter", active);
  return (
    <Link active={active} onLinkClick={onClick}>
      {props.children}
    </Link>
  );
}
