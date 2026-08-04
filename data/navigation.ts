export const navigation = [
  { label: "통합 인프라", href: "/infrastructure" },
  {
    label: "서비스 소개",
    href: "/product",
    children: [
      { label: "제품 소개", href: "/product" },
      { label: "ESG", href: "/product/esg" },
      { label: "NPU", href: "/product/npu" },
      { label: "엔비디아 공급", href: "/product/nvidia" },
    ],
  },
  {
    label: "AI Service",
    href: "/ai-service",
    children: [
      { label: "AI Service", href: "/ai-service" },
      { label: "공공 클라우드", href: "/ai-service/public-cloud" },
    ],
  },
] as const;
