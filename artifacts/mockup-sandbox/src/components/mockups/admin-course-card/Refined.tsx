import { useState } from "react";
import {
  BookOpen,
  Check,
  ChevronLeft,
  FileText,
  GripVertical,
  Layers3,
  Pencil,
  Radio,
  Trash2,
} from "lucide-react";
import "./_group.css";
import "./Refined.css";

export function Refined() {
  const [published, setPublished] = useState(true);
  const [notice, setNotice] = useState("");

  const showNotice = (message: string) => {
    setNotice(message);
    window.setTimeout(() => setNotice(""), 1800);
  };

  return (
    <main className="course-pages refined-card-preview" dir="rtl">
      <article className="panel course-list-card course-list-card-refined">
        <div className="course-card-main">
          <div className="course-list-mark" aria-hidden="true">
            <BookOpen size={25} />
          </div>
          <div className="course-list-copy">
            <div className="course-card-title-row">
              <h2>الإنجليزية في الحياة اليومية</h2>
              <span className={`course-status${published ? "" : " draft"}`}>
                {published ? <Check size={14} aria-hidden="true" /> : <Radio size={14} aria-hidden="true" />}
                {published ? "منشورة" : "مسودة"}
              </span>
            </div>
            <div className="course-card-stats" aria-label="ملخص الدورة">
              <span><Layers3 size={15} aria-hidden="true" /> ٣ مستويات</span>
              <span><FileText size={15} aria-hidden="true" /> ١٢ مادة تعليمية</span>
            </div>
          </div>
        </div>

        <div className="course-card-footer">
          <button
            className="button-primary compact-action course-open-action"
            type="button"
            onClick={() => showNotice("فتح بناء الدورة")}
          >
            فتح البناء <ChevronLeft size={16} aria-hidden="true" />
          </button>
          <div className="course-list-tools course-card-actions" role="group" aria-label="إجراءات الدورة">
            <button
              className={`course-tool${published ? " publish-action" : ""}`}
              type="button"
              aria-label={published ? "إيقاف النشر" : "نشر الدورة"}
              title={published ? "إيقاف النشر" : "نشر الدورة"}
              onClick={() => setPublished((current) => !current)}
            >
              {published ? <Radio size={17} aria-hidden="true" /> : <Check size={17} aria-hidden="true" />}
            </button>
            <button className="course-tool" type="button" aria-label="تعديل اسم الدورة" title="تعديل اسم الدورة" onClick={() => showNotice("تعديل اسم الدورة")}>
              <Pencil size={16} aria-hidden="true" />
            </button>
            <button className="course-tool delete-action" type="button" aria-label="حذف الدورة" title="حذف الدورة" onClick={() => showNotice("حذف الدورة")}>
              <Trash2 size={16} aria-hidden="true" />
            </button>
            <button className="course-tool drag-handle" type="button" aria-label="اسحب لإعادة الترتيب" title="اسحب لإعادة الترتيب" onClick={() => showNotice("ترتيب الدورات")}>
              <GripVertical size={17} aria-hidden="true" />
            </button>
          </div>
        </div>
      </article>
      {notice && <div className="course-card-notice" role="status">{notice}</div>}
    </main>
  );
}
