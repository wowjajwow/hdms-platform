export const navigation = [
  {
    label: "소개",
    href: "/company",
    children: [
      { label: "회사 소개", href: "/company" },
      { label: "환경 & 사회 & 체계", href: "/company/sustainability" },
      { label: "AI 인프라", href: "/company/ai-infrastructure" },
    ],
  },
  { label: "통합 인프라", href: "/infrastructure" },
  {
    label: "서비스 소개",
    href: "/product/mdc",
    children: [
      { label: "MDC", href: "/product/mdc" },
      { label: "GPU", href: "/product/gpu" },
      { label: "NPU", href: "/product/npu" },
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
