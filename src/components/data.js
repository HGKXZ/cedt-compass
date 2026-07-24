import { GraduationCap, Briefcase, PartyPopper } from "lucide-react";

export const categoryStyle = {
  Academic: { icon: GraduationCap, ramp: "#2E5C4E", rampBg: "#DCE8E1", label: { en: "Academic", th: "วิชาการ" } },
  Career: { icon: Briefcase, ramp: "#8A4B24", rampBg: "#EFE0CF", label: { en: "Career", th: "ฝึกงาน" } },
  StudentLife: { icon: PartyPopper, ramp: "#5A4A7A", rampBg: "#E4DEEC", label: { en: "Student life", th: "กิจกรรม" } },
};

export const links = [
  {
    category: "Academic",
    url: "https://elective.cedt.community/",
    name: { en: "CEDT Elective", th: "CEDT Elective" },
    desc: { en: "Register for department elective courses.", th: "ลงทะเบียนวิชาเลือกของสาขา" },
  },
  {
    category: "Academic",
    url: "https://capstone.cedt.community/",
    name: { en: "CEDT Capstone", th: "CEDT Capstone" },
    desc: { en: "Track and submit your Capstone project.", th: "ติดตามและส่งงาน Capstone Project ของสาขา" },
  },
  {
    category: "Career",
    url: "https://cedtintern.cp.eng.chula.ac.th/",
    name: { en: "CEDT Intern Portal", th: "CEDT Intern Portal" },
    desc: { en: "Apply for internships.", th: "สมัครฝึกงานของสาขา" },
  },
  {
    category: "Career",
    url: "https://cedt-ices.com/",
    name: { en: "CEDT ICES", th: "CEDT ICES" },
    desc: { en: "Submit internship evaluations.", th: "ประเมินผลการฝึกงานของสาขา" },
  },
  {
    category: "StudentLife",
    url: "https://talent.cedt.community/",
    name: { en: "CEDT Talent Journey", th: "CEDT Talent Journey" },
    desc: { en: "Earn activity points and register for Friday Activity.", th: "แลกแต้มกิจกรรมและลงทะเบียน Friday Activity ของสาขา" },
  },
];

export const copy = {
  en: { title: "CEDT Compass", subtitle: "Find your way to every CEDT portal." },
  th: { title: "CEDT Compass", subtitle: "เข็มทิศผู้ชี้ทางไปยังทุกเว็บไซต์ของสาขา CEDT" },
};
