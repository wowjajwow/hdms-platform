export const navigation = [
  { label: "통합 인프라", href: "/#infrastructure" },
  { label: "제품 소개", href: "/#product" },
  {
    label: "AI Service",
    href: "/ai-service",
    children: [
      { label: "AI Service", href: "/ai-service" },
      { label: "공공 클라우드", href: "/ai-service/public-cloud" },
    ],
  },
  { label: "사업 영역", href: "/#business" },
  { label: "문의", href: "/#contact" },
] as const;
