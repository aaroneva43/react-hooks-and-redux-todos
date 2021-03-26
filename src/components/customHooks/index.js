import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

export function useRedux(stateMappToProps) {
  const dispatch = useDispatch();

  return {
    ...useSelector(stateMappToProps, [dispatch]),
    dispatch
  };
}
