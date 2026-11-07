import {
  BookOpen,
  Check,
  ChevronLeft,
  GripVertical,
  Pencil,
  Radio,
  Trash2,
} from "lucide-react";
import "./_group.css";

export function Current() {
  return (
    <main className="course-pages" dir="rtl">
      <article className="panel course-list-card">
        <div className="course-list-mark" aria-hidden="true">
          <BookOpen size={23} />
        </div>
        <div className="course-list-copy">
          <h2>الإنجليزية في الحياة اليومية</h2>
          <p>٣ مستويات · ١٢ مادة تعليمية</p>
        </div>
        <div className="course-list-tools">
          <span className="course-status">
            <Check size={14} aria-hidden="true" />
            منشورة
          </span>
          <button className="button-primary compact-action" type="button">
            فتح البناء <ChevronLeft size={15} aria-hidden="true" />
          </button>
          <button className="course-tool" type="button" aria-label="إيقاف النشر" title="إيقاف النشر">
            <Radio size={16} aria-hidden="true" />
          </button>
          <button className="course-tool" type="button" aria-label="تعديل اسم الدورة" title="تعديل اسم الدورة">
            <Pencil size={15} aria-hidden="true" />
          </button>
          <button className="course-tool" type="button" aria-label="حذف الدورة" title="حذف الدورة">
            <Trash2 size={15} aria-hidden="true" />
          </button>
          <button className="course-tool drag-handle" type="button" aria-label="اسحب لإعادة الترتيب" title="اسحب لإعادة الترتيب">
            <GripVertical size={16} aria-hidden="true" />
          </button>
        </div>
      </article>
    </main>
  );
}
