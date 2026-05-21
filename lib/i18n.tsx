"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

export type Lang = "en" | "vi";

export const translations = {
  en: {
    nav: {
      about: "About",
      process: "Process",
      experience: "Experience",
      bootcamp: "Bootcamp",
      skills: "Skills",
      voices: "Voices",
      contact: "Contact",
    },
    hero: {
      eyebrow: "Sales · Product · Leadership",
      title1: "Le Thi",
      title2: "Ngoc Ha",
      tagline:
        "Sales manager turned product analyst — a bridge between clients and engineering at one of Vietnam's largest software corporations.",
      education: {
        label: "Education",
        school: "University of Banking, Ho Chi Minh City",
        major: "Business Administration",
        grade: "GPA 4.5 / 5",
      },
      cta: "Read my story",
      meta: "Based in Ho Chi Minh City · Vietnam",
    },
    about: {
      kicker: "Hello",
      title: "Sharp commercial instinct,<br/>a quiet appetite for new craft.",
      body: "I started by selling — wedding rooms, then logistics, then enterprise SaaS. The pattern I kept noticing was that the best deals were almost always rescued by someone who understood the product as well as the customer. So in 2025 I stepped out of pure sales and into product analysis. Today I translate client conversations into specs, timelines and shipped releases.",
      stats: [
        { label: "Years in revenue", value: "7+" },
        { label: "Team led", value: "7" },
        { label: "Current role", value: "PA" },
      ],
    },
    experience: {
      kicker: "Experience",
      title: "A timeline of <em>hellos</em> and <em>shipping</em>.",
      ongoing: "Present",
      items: [
        {
          period: "Jun 2025 — Present",
          company: "Misa Corp",
          role: "Product Analyst — CRM Platform",
          location: "Hanoi / Ho Chi Minh City",
          summary:
            "Moved out of the comfortable sales lane to sit on the IT side. I scope features, draft timelines and shepherd releases until they land in client hands.",
          bullets: [
            "Bridge between sales conversations and the engineering backlog.",
            "Specs cover web application flows and API integration touchpoints.",
            "Own feature analysis, timeline planning and deployment readiness.",
          ],
          highlight: "First analyst on the CRM platform pod.",
        },
        {
          period: "Jun 2024 — Jun 2025",
          company: "Misa Corp · 10,000+ employees in Vietnam",
          role: "Team Lead · IT Senior Sales",
          location: "Ho Chi Minh City",
          summary:
            "Led a team of seven across the CRM, HRM and Accounting product lines, owning quota, coaching and key enterprise accounts.",
          bullets: [
            "Led a sales team of 7 across three SaaS product lines.",
            "Sold CRM, HRM and Accounting platforms into mid-market Vietnam.",
            "Awarded an internal leadership certification by Misa.",
          ],
          highlight: "Earned Misa's leadership certification.",
        },
        {
          period: "2021 — 2024",
          company: "SuperShip Vietnam JSC",
          role: "Business Development",
          location: "Ho Chi Minh City",
          summary:
            "Owned the full B2B funnel — from synthesising customer needs into marketing briefs to closing purchase contracts.",
          bullets: [
            "Synthesised customer needs into briefs for the marketing team.",
            "Ran multi-channel outbound and product-experience appointments.",
            "Closed contracts and onboarded new logistics accounts.",
          ],
          highlight: "Carried the playbook from leads to signed deals.",
        },
        {
          period: "2018 — 2021",
          company: "Dong Xanh Wedding Restaurant",
          role: "Consultant",
          location: "Ho Chi Minh City",
          summary:
            "First role out of the Banking University. Listened, designed and delivered the wedding experience — from first DM to deposit.",
          bullets: [
            "Replied across messengers and walk-in channels for the venue.",
            "Scheduled tastings and coordinated décor briefs with the styling team.",
            "Closed contracts and collected deposits.",
          ],
          highlight: "Where I learned to listen for what's unsaid.",
        },
      ],
    },
    bootcamp: {
      kicker: "Latest chapter",
      title: "Two days, one night.<br/><em>Leadership, packed light.</em>",
      body: "I just wrapped a 2-day-1-night leadership bootcamp — the kind where the schedule is intentionally too tight, the strangers become a team by sundown, and the only way through is to lead, follow or get out of the way. Photographs to come; the empty frames below are placeholders for the prints I'm still picking out.",
      tags: ["Leadership", "Team-building", "Field exercises", "Reflection"],
      caption: "Frames awaiting print",
      note: "Note · ",
      noteText:
        "These frames are intentionally blank. They will hold polaroids from the bootcamp once the prints arrive from the studio.",
    },
    skills: {
      kicker: "Skills",
      title: "What I bring to the table.",
      list: [
        { label: "Organised execution", level: 95 },
        { label: "Communication", level: 92 },
        { label: "Teamwork & leadership", level: 90 },
        { label: "Presentation", level: 88 },
        { label: "English (working)", level: 75 },
        { label: "Product analysis", level: 78 },
        { label: "API & web platforms", level: 70 },
      ],
    },
    contact: {
      kicker: "Get in touch",
      title: "Let's build something together.",
      body: "Open to product, partnerships and sales-leadership conversations. Coffee in District 12 also welcome.",
      emailLabel: "Email",
      phoneLabel: "Phone",
      locationLabel: "Location",
      referenceLabel: "Reference",
      cta: "Write to me",
    },
    process: {
      kicker: "How I work",
      title: "From conversation<br/><em>to shipped release.</em>",
      body: "Three habits I carry from sales into product analysis. They keep the loop short between what a customer says on a Tuesday and what engineering ships the next sprint.",
      steps: [
        {
          number: "01",
          title: "Listen",
          body: "Sit on every discovery and demo call I can. Capture pain in the customer's own words, not the framework's.",
        },
        {
          number: "02",
          title: "Translate",
          body: "Convert those notes into specs, flows and timelines engineering can act on without a second meeting.",
        },
        {
          number: "03",
          title: "Ship",
          body: "Stay on the release until it lands. Loop the client's reaction back into the next sprint within the week.",
        },
      ],
    },
    voices: {
      kicker: "Voices",
      title: "What clients<br/>and teammates say.",
      body: "Recommendation letters are en route from former Misa leads and Supership clients. Cards below are intentionally empty — they'll fill in as quotes come back signed.",
      placeholders: [
        { tag: "Misa · Sales Lead", note: "Quote pending — Q2 2026" },
        { tag: "Supership · Client", note: "Quote pending — Q2 2026" },
        { tag: "Misa · Engineering", note: "Quote pending — Q3 2026" },
      ],
    },
    utilities: {
      theme: "Theme",
      language: "Language",
      light: "Light",
      dark: "Dark",
      en: "EN",
      vi: "VI",
    },
    footer: "Designed and built in Ho Chi Minh City",
  },
  vi: {
    nav: {
      about: "Giới thiệu",
      process: "Quy trình",
      experience: "Kinh nghiệm",
      bootcamp: "Bootcamp",
      skills: "Kỹ năng",
      voices: "Tiếng nói",
      contact: "Liên hệ",
    },
    hero: {
      eyebrow: "Sales · Sản phẩm · Lãnh đạo",
      title1: "Lê Thị",
      title2: "Ngọc Hà",
      tagline:
        "Từ trưởng nhóm sales bước sang vai trò Product Analyst — cầu nối giữa khách hàng và đội kỹ thuật tại một trong những tập đoàn phần mềm lớn nhất Việt Nam.",
      education: {
        label: "Học vấn",
        school: "Đại học Ngân hàng TP. Hồ Chí Minh",
        major: "Quản trị Kinh doanh",
        grade: "GPA 4.5 / 5",
      },
      cta: "Đọc câu chuyện của tôi",
      meta: "Sống tại TP. Hồ Chí Minh · Việt Nam",
    },
    about: {
      kicker: "Xin chào",
      title: "Nhạy bén với kinh doanh,<br/>khát khao học nghề mới.",
      body: "Tôi bắt đầu từ bán hàng — tiệc cưới, rồi logistics, rồi SaaS doanh nghiệp. Càng làm tôi càng nhận ra: một deal đẹp luôn được cứu bởi người vừa hiểu sản phẩm vừa hiểu khách hàng. Vì vậy năm 2025 tôi rẽ khỏi sales thuần để bước vào phân tích sản phẩm. Hôm nay tôi dịch những cuộc nói chuyện với khách hàng và bộ phận IT, bàn luận về timeline và bản phát hành.",
      stats: [
        { label: "Năm làm doanh thu", value: "7+" },
        { label: "Quy mô đội dẫn dắt", value: "7" },
        { label: "Vai trò hiện tại", value: "PA" },
      ],
    },
    experience: {
      kicker: "Kinh nghiệm",
      title: "Dòng thời gian của những <em>cái bắt tay</em> và bản <em>release</em>.",
      ongoing: "Hiện tại",
      items: [
        {
          period: "06/2025 — Hiện tại",
          company: "Misa Corp",
          role: "Product Analyst — Nền tảng CRM",
          location: "Hà Nội / TP. Hồ Chí Minh",
          summary:
            "Bước khỏi vùng an toàn của sales để sang đội IT. Tôi phân tích tính năng, lập timeline và đồng hành đến khi sản phẩm đến tay khách hàng.",
          bullets: [
            "Cầu nối giữa các cuộc trao đổi sales và backlog kỹ thuật.",
            "Phân tích luồng web và các điểm tích hợp API.",
            "Chịu trách nhiệm phân tích tính năng, timeline và đảm bảo triển khai.",
          ],
          highlight: "Product Analyst đầu tiên của pod nền tảng CRM.",
        },
        {
          period: "06/2024 — 06/2025",
          company: "Misa Corp · hơn 10.000 nhân sự tại Việt Nam",
          role: "Team Lead · IT Senior Sales",
          location: "TP. Hồ Chí Minh",
          summary:
            "Dẫn dắt đội 7 thành viên trên ba dòng sản phẩm CRM, HRM, Kế toán — chịu trách nhiệm doanh số, coaching và các khách hàng trọng điểm.",
          bullets: [
            "Quản lý đội sales 7 người trên ba dòng SaaS.",
            "Triển khai CRM, HRM và phần mềm Kế toán cho khách hàng mid-market.",
            "Đạt chứng nhận lãnh đạo nội bộ của Misa.",
          ],
          highlight: "Đạt chứng nhận lãnh đạo nội bộ của Misa.",
        },
        {
          period: "2021 — 2024",
          company: "Công ty CP SuperShip Việt Nam",
          role: "Business Development",
          location: "TP. Hồ Chí Minh",
          summary:
            "Sở hữu toàn bộ phễu B2B — từ tổng hợp nhu cầu khách hàng thành brief marketing đến ký hợp đồng.",
          bullets: [
            "Phân tích nhu cầu khách hàng, viết brief cho đội Marketing.",
            "Triển khai outbound đa kênh và lịch trải nghiệm sản phẩm.",
            "Ký hợp đồng và onboarding các tài khoản logistics mới.",
          ],
          highlight: "Vận hành playbook từ lead đến hợp đồng.",
        },
        {
          period: "2018 — 2021",
          company: "Nhà hàng tiệc cưới Đồng Xanh",
          role: "Tư vấn viên",
          location: "TP. Hồ Chí Minh",
          summary:
            "Công việc đầu tiên sau Đại học Ngân hàng. Lắng nghe, thiết kế và bàn giao trải nghiệm tiệc cưới — từ inbox đầu đến đặt cọc.",
          bullets: [
            "Tư vấn khách qua đa kênh và tiếp khách tại nhà hàng.",
            "Đặt lịch thử món và phối hợp với đội trang trí.",
            "Ký hợp đồng và nhận đặt cọc.",
          ],
          highlight: "Nơi tôi học cách lắng nghe điều khách không nói.",
        },
      ],
    },
    bootcamp: {
      kicker: "Chương mới nhất",
      title: "Hai ngày, một đêm.<br/><em>Lãnh đạo, hành trang gọn nhẹ.</em>",
      body: "Tôi vừa hoàn thành khóa bootcamp lãnh đạo 2 ngày 1 đêm — loại lịch trình cố tình quá chật, người lạ thành đồng đội trước hoàng hôn, và chỉ có một cách đi tiếp: dẫn dắt, đi theo, hoặc nhường đường. Ảnh đang được rửa; các khung trống bên dưới đang chờ in.",
      tags: ["Lãnh đạo", "Team-building", "Bài tập thực địa", "Phản tỉnh"],
      caption: "Khung tranh đang chờ in",
      note: "Ghi chú · ",
      noteText:
        "Các khung này cố tình để trống. Chúng sẽ giữ ảnh polaroid từ bootcamp ngay khi bản in về tới studio.",
    },
    skills: {
      kicker: "Kỹ năng",
      title: "Tôi mang gì đến bàn họp.",
      list: [
        { label: "Tổ chức công việc", level: 95 },
        { label: "Giao tiếp", level: 92 },
        { label: "Làm việc nhóm & lãnh đạo", level: 90 },
        { label: "Thuyết trình", level: 88 },
        { label: "Tiếng Anh (giao tiếp)", level: 75 },
        { label: "Phân tích sản phẩm", level: 78 },
        { label: "API & nền tảng web", level: 70 },
      ],
    },
    contact: {
      kicker: "Liên hệ",
      title: "Cùng xây một thứ gì đó.",
      body: "Sẵn sàng trò chuyện về sản phẩm, hợp tác hoặc lãnh đạo sales. Một cốc cà phê ở Quận 12 cũng rất hoan nghênh.",
      emailLabel: "Email",
      phoneLabel: "Điện thoại",
      locationLabel: "Địa chỉ",
      referenceLabel: "Người tham chiếu",
      cta: "Gửi tin nhắn",
    },
    process: {
      kicker: "Cách tôi làm việc",
      title: "Từ cuộc trò chuyện<br/><em>đến bản phát hành.</em>",
      body: "Ba thói quen tôi mang từ sales sang phân tích sản phẩm. Chúng rút ngắn vòng lặp giữa điều khách nói hôm thứ Ba và bản release engineering bàn giao sprint kế.",
      steps: [
        {
          number: "01",
          title: "Lắng nghe",
          body: "Ngồi cùng mọi cuộc discovery và demo có thể. Ghi lại nỗi đau bằng đúng lời khách, không phải bằng khung sườn lý thuyết.",
        },
        {
          number: "02",
          title: "Phiên dịch",
          body: "Chuyển ghi chú thành spec, sơ đồ luồng và timeline để engineering có thể bắt tay làm mà không cần họp lại.",
        },
        {
          number: "03",
          title: "Bàn giao",
          body: "Đồng hành đến khi bản release đến tay khách hàng. Đưa phản hồi của khách vào sprint kế ngay trong tuần.",
        },
      ],
    },
    voices: {
      kicker: "Tiếng nói",
      title: "Khách hàng<br/>và đồng đội nói gì.",
      body: "Thư giới thiệu đang trên đường từ các lead cũ ở Misa và khách hàng Supership. Các thẻ bên dưới cố tình để trống — sẽ điền vào khi từng trích dẫn được gửi về có chữ ký.",
      placeholders: [
        { tag: "Misa · Sales Lead", note: "Trích dẫn — Q2/2026" },
        { tag: "Supership · Khách hàng", note: "Trích dẫn — Q2/2026" },
        { tag: "Misa · Kỹ thuật", note: "Trích dẫn — Q3/2026" },
      ],
    },
    utilities: {
      theme: "Giao diện",
      language: "Ngôn ngữ",
      light: "Sáng",
      dark: "Tối",
      en: "EN",
      vi: "VI",
    },
    footer: "Thiết kế và xây dựng tại TP. Hồ Chí Minh",
  },
} as const;

export type Dict = (typeof translations)["en"];

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Dict;
};

const I18nContext = createContext<Ctx | null>(null);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const stored = (typeof window !== "undefined" && window.localStorage.getItem("lang")) as Lang | null;
    if (stored === "en" || stored === "vi") {
      setLangState(stored);
      document.documentElement.setAttribute("lang", stored);
    }
  }, []);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try {
      window.localStorage.setItem("lang", l);
    } catch {}
    document.documentElement.setAttribute("lang", l);
  }, []);

  const value = useMemo<Ctx>(() => ({ lang, setLang, t: translations[lang] as Dict }), [lang, setLang]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
}
