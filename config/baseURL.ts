export const baseURL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5328/api"
    : `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api`;
