import { NextResponse } from "next/server";

export const runtime = "nodejs";

type ContactPayload = Record<string, unknown>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function value(payload: ContactPayload, key: string, maxLength: number) {
  return typeof payload[key] === "string" ? payload[key].trim().slice(0, maxLength) : "";
}

function escapeHtml(input: string) {
  return input.replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" })[character] || character);
}

export async function POST(request: Request) {
  let payload: ContactPayload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ message: "올바르지 않은 요청입니다." }, { status: 400 });
  }

  if (value(payload, "website", 200)) return NextResponse.json({ message: "문의가 접수되었습니다." });

  const company = value(payload, "company", 100);
  const name = value(payload, "name", 50);
  const email = value(payload, "email", 200);
  const phone = value(payload, "phone", 30);
  const category = value(payload, "category", 100);
  const subject = value(payload, "subject", 150);
  const inquiry = value(payload, "inquiry", 5000);
  const privacy = value(payload, "privacy", 20);

  if (!company || !name || !emailPattern.test(email) || !phone || !category || !subject || inquiry.length < 10 || privacy !== "agreed") {
    return NextResponse.json({ message: "필수 입력 항목을 다시 확인해 주세요." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !to || !from) {
    console.error("Contact email environment variables are not configured.");
    return NextResponse.json({ message: "문의 시스템을 준비 중입니다. 잠시 후 다시 시도해 주세요." }, { status: 503 });
  }

  const safe = { company: escapeHtml(company), name: escapeHtml(name), email: escapeHtml(email), phone: escapeHtml(phone), category: escapeHtml(category), subject: escapeHtml(subject), inquiry: escapeHtml(inquiry).replace(/\n/g, "<br />") };
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject: `[HDMS 홈페이지 문의] ${category} | ${subject}`,
      html: `<div style="font-family:Arial,sans-serif;max-width:680px;color:#172033"><h1 style="font-size:22px;color:#0d52ce">HDMS 홈페이지 신규 문의</h1><table style="width:100%;border-collapse:collapse"><tbody><tr><th style="padding:12px;text-align:left;background:#f1f5f9;border:1px solid #dbe2ea">문의 분야</th><td style="padding:12px;border:1px solid #dbe2ea">${safe.category}</td></tr><tr><th style="padding:12px;text-align:left;background:#f1f5f9;border:1px solid #dbe2ea">회사 / 담당자</th><td style="padding:12px;border:1px solid #dbe2ea">${safe.company} / ${safe.name}</td></tr><tr><th style="padding:12px;text-align:left;background:#f1f5f9;border:1px solid #dbe2ea">이메일</th><td style="padding:12px;border:1px solid #dbe2ea">${safe.email}</td></tr><tr><th style="padding:12px;text-align:left;background:#f1f5f9;border:1px solid #dbe2ea">연락처</th><td style="padding:12px;border:1px solid #dbe2ea">${safe.phone}</td></tr><tr><th style="padding:12px;text-align:left;background:#f1f5f9;border:1px solid #dbe2ea">제목</th><td style="padding:12px;border:1px solid #dbe2ea">${safe.subject}</td></tr></tbody></table><div style="margin-top:24px;padding:20px;background:#f8fafc;border-left:4px solid #0d52ce;line-height:1.7">${safe.inquiry}</div><p style="margin-top:24px;color:#64748b;font-size:13px">이 메일에 답장하면 문의자가 입력한 이메일(${safe.email})로 회신됩니다.</p></div>`,
      text: `HDMS 홈페이지 신규 문의\n\n문의 분야: ${category}\n회사명: ${company}\n담당자: ${name}\n이메일: ${email}\n연락처: ${phone}\n제목: ${subject}\n\n${inquiry}`,
    }),
  });

  if (!response.ok) {
    console.error("Resend contact email failed:", response.status, await response.text());
    return NextResponse.json({ message: "메일 전송에 실패했습니다. 잠시 후 다시 시도해 주세요." }, { status: 502 });
  }

  return NextResponse.json({ message: "문의가 접수되었습니다." });
}
