"use client";
import { useDispatch, useSelector } from "react-redux";
import { popupClosed } from "../Popup/popupSlice";
import S from "./Popup.module.css";

export const Popup = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useDispatch();
  const isOpened = useSelector((state) => state.popup.isOpened);

  if (!isOpened) return null;
  return (
    <div className={S.Popup}>
      <div className={S.Shadow} onClick={() => dispatch(popupClosed())}></div>
      <div className={S.Window}>
        <div className={S.Close} onClick={() => dispatch(popupClosed())}></div>
        {children}
      </div>
    </div>
  );
};
