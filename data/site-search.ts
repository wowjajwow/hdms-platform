export const searchPages = [
  { title: "MDC", href: "/product/mdc", description: "모듈러 데이터센터의 구성과 구축 역량을 소개합니다.", keywords: "데이터센터 데이터 센터 컨테이너 랙 냉각 전력" },
  { title: "GPU 인프라", href: "/product/gpu", description: "AI 학습과 추론을 위한 GPU 컴퓨팅 인프라를 확인하세요.", keywords: "지피유 서버 학습 추론 냉각" },
  { title: "NPU Solution", href: "/product/npu", description: "NPU 기반 AI 컴퓨팅과 기업형 인프라 서비스를 소개합니다.", keywords: "엔피유 반도체 추론" },
  { title: "공공 클라우드", href: "/ai-service/public-cloud", description: "공공 클라우드 서비스와 도입 방향을 확인하세요.", keywords: "cloud public" },
  { title: "AI 인프라", href: "/company/ai-infrastructure", description: "AI 데이터센터와 인프라 구축 역량을 살펴보세요.", keywords: "데이터 센터 인공지능 서버" },
  { title: "통합 인프라", href: "/infrastructure", description: "HDMS의 통합 인프라 솔루션을 소개합니다.", keywords: "네트워크 서버 스토리지 infrastructure" },
  { title: "AI Service", href: "/ai-service", description: "AI 데이터센터 운영과 클라우드 컨설팅을 만나보세요.", keywords: "인공지능 서비스 cloud" },
  { title: "회사 소개", href: "/company", description: "HDMS의 비전과 주요 사업을 소개합니다.", keywords: "에이치디엠에스 기업 회사" },
  { title: "환경 & 사회 & 지배구조", href: "/company/sustainability", description: "지속가능한 성장을 위한 HDMS의 ESG 경영 방향을 확인하세요.", keywords: "esg 지속가능 환경 사회 지배구조 environment social governance" },
  { title: "문의하기", href: "/contact", description: "솔루션 도입과 사업 협력을 상담하세요.", keywords: "연락 상담 도입 제휴 contact" },
] as const;

export const recommendedKeywords = ["MDC", "GPU", "NPU", "클라우드"] as const;

export function findSearchPages(query: string) {
  const normalize = (value: string) => value.toLowerCase().replace(/\s+/g, "");
  const terms = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
  return searchPages.filter((page) => {
    const text = normalize(`${page.title} ${page.description} ${page.keywords}`);
    return terms.every((term) => text.includes(normalize(term)));
  }).sort((a, b) => Number(normalize(b.title) === normalize(query)) - Number(normalize(a.title) === normalize(query)));
}
