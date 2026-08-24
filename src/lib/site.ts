export const SITE_NAME = "Void to Nova";
export const SITE_URL = "https://voidtonova.com";
export const SITE_DESCRIPTION =
  "집중하는 시간과 움직이는 시간을 조금 더 편하게 만드는 일상의 도구를 소개합니다.";
export const SITE_EMAIL = "kimjh022300@gmail.com";
export const NAVER_SMART_STORE_URL = "https://smartstore.naver.com/voidtonova";

export const PUBLIC_ROUTES = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/products", changeFrequency: "weekly", priority: 0.9 },
  { path: "/about", changeFrequency: "monthly", priority: 0.7 },
  { path: "/contact", changeFrequency: "yearly", priority: 0.5 },
] as const;

export function absoluteUrl(path = "/") {
  return new URL(path, SITE_URL).toString();
}
