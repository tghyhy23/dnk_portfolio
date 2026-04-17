// src/components/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Mỗi khi pathname thay đổi, cuộn mượt mà lên tọa độ (0, 0)
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Dùng "instant" để lên ngay lập tức, không bị lộ hiệu ứng trượt
    });
  }, [pathname]);

  return null; // Component này không hiển thị giao diện gì cả
}