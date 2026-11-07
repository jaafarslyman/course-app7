import './_group.css';
import {
  BookOpen,
  Check,
  ChevronLeft,
  FileAudio2,
  FileText,
  GripVertical,
  Layers3,
  Pencil,
  Plus,
  Radio,
  Trash2,
  Video,
} from 'lucide-react';

const levels = [
  {
    number: '٠١',
    title: 'الأساسيات والتعارف',
    summary: '٣ مواد تعليمية · قسمان',
    sections: [
      {
        title: 'التحية والتعارف',
        count: 'مادتان',
        items: [
          { kind: 'video', title: 'كيف تعرّف عن نفسك باللغة الإنجليزية؟' },
          { kind: 'audio', title: 'تدريب النطق: التحيات اليومية' },
        ],
      },
      {
        title: 'مفردات أساسية',
        count: 'مادة واحدة',
        items: [{ kind: 'text', title: 'عبارات مهمة لبداية المحادثة' }],
      },
    ],
  },
  {
    number: '٠٢',
    title: 'المحادثات في الحياة اليومية',
    summary: 'مادة واحدة · قسم واحد',
    sections: [
      {
        title: 'في المقهى',
        count: 'مادة واحدة',
        items: [{ kind: 'video', title: 'طلب مشروبك والتحدث مع الموظف' }],
      },
    ],
  },
];

function ContentRow({
  kind,
  title,
}: {
  kind: string;
  title: string;
}) {
  const Icon = kind === 'video' ? Video : kind === 'audio' ? FileAudio2 : FileText;
  const kindLabel = kind === 'video' ? 'فيديو' : kind === 'audio' ? 'ملف صوتي' : 'نص تعليمي';
  return (
    <div className="course-content-row">
      <span className={`content-kind-icon ${kind}`}><Icon size={18} /></span>
      <div className="course-content-copy">
        <div className="course-content-title">{title}</div>
        <div className="course-content-subtitle">{kindLabel}</div>
      </div>
      <div className="course-content-actions">
        <button className="course-tool" type="button" aria-label={`تعديل ${title}`}><Pencil size={14} /></button>
        <button className="course-tool" type="button" aria-label={`حذف ${title}`}><Trash2 size={14} /></button>
        <button className="course-tool drag-handle" type="button" aria-label={`ترتيب ${title}`}><GripVertical size={15} /></button>
      </div>
    </div>
  );
}

export function Current() {
  return (
    <div className="course-editor-current" dir="rtl">
      <style>{`
        .course-editor-current {
          min-height: 100vh;
          background: #f4f7ed;
          color: #253b42;
          font-family: "IBM Plex Sans Arabic", "Noto Sans Arabic", sans-serif;
        }
        .mock-topbar {
          position: sticky; top: 0; z-index: 5; display: flex; align-items: center;
          justify-content: space-between; gap: 12px; padding: 13px 16px;
          border-bottom: 1px solid #e4e9df; background: #fffefa;
        }
        .mock-brand { display: flex; align-items: center; gap: 8px; color: #207d68; font-weight: 800; }
        .mock-brand-mark { display: grid; width: 31px; height: 31px; place-items: center; border-radius: 11px; background: #207d68; color: white; font: 700 12px "DM Sans", sans-serif; }
        .mock-topbar-title { color: #253b42; font-size: 13px; font-weight: 700; }
        .mock-content { max-width: 960px; margin: auto; padding: 12px 12px 90px; }
        .mock-mobile-nav { position: fixed; z-index: 6; inset: auto 0 0; display: flex; justify-content: space-around; padding: 9px 5px max(9px, env(safe-area-inset-bottom)); border-top: 1px solid #e4e9df; background: #fffefa; }
        .mock-mobile-nav span { display: grid; justify-items: center; gap: 3px; color: #718184; font-size: 9px; }
        .mock-mobile-nav span:first-child { color: #207d68; font-weight: 700; }
        .course-editor-current .course-pages { padding: 0; }
        .course-editor-current .course-builder-hero { margin-bottom: 16px; }
        .course-editor-current .course-scope-heading { max-width: 100%; }
        .course-editor-current .course-scope-tools { max-width: 100%; }
        .course-editor-current .course-section { margin-inline: 0; }
        .course-editor-current .course-content-actions .course-tool { width: 31px; height: 31px; }
        @media (max-width: 430px) {
          .mock-content { padding-inline: 10px; }
          .course-editor-current .course-scope { padding: 12px; }
          .course-editor-current .course-content-row { grid-template-columns: 34px minmax(0,1fr) auto; gap: 6px; padding-inline: 7px; }
          .course-editor-current .course-content-actions { gap: 3px; }
          .course-editor-current .course-content-actions .course-tool { width: 29px; height: 29px; }
        }
      `}</style>
      <header className="mock-topbar">
        <div className="mock-brand"><span className="mock-brand-mark">L.</span> لُغتي بثقة</div>
        <div className="mock-topbar-title">بناء الدورة</div>
        <button type="button" className="course-tool" aria-label="خيارات الإدارة"><BookOpen size={17} /></button>
      </header>
      <main className="mock-content">
        <div className="course-pages">
          <div className="course-tree-toolbar">
            <div className="course-breadcrumbs"><a>الدورات</a><ChevronLeft size={14} /><span>الإنجليزية في الحياة اليومية</span></div>
            <div className="course-heading-tools">
              <span className="course-status"><Check size={13} /> منشورة للمتعلمين</span>
              <button className="button-soft" type="button"><Radio size={15} /> إيقاف النشر</button>
            </div>
          </div>
          <section className="course-builder-hero">
            <div>
              <div className="eyebrow">مخطط المحتوى</div>
              <h2>الإنجليزية في الحياة اليومية</h2>
              <p>رتّب المواد في المستوى أو القسم المناسب. سيظهر هذا الترتيب نفسه للمتعلّم.</p>
            </div>
            <div className="course-builder-hero-tools">
              <button className="button-soft" type="button"><Pencil size={15} /> تعديل الاسم</button>
              <button className="button-primary" type="button"><Plus size={16} /> إضافة مستوى</button>
            </div>
          </section>
          {levels.map((level) => (
            <section className="panel course-scope" key={level.number}>
              <div className="course-scope-head">
                <div className="course-scope-heading">
                  <button className="course-tool drag-handle" type="button" aria-label="ترتيب المستوى"><GripVertical size={15} /></button>
                  <span className="course-scope-number">{level.number}</span>
                  <div><h3>{level.title}</h3><p>{level.summary}</p></div>
                </div>
                <div className="course-scope-tools">
                  <button className="button-soft" type="button"><Plus size={14} /> قسم</button>
                  <button className="course-tool" type="button" aria-label="تعديل المستوى"><Pencil size={14} /></button>
                  <button className="course-tool" type="button" aria-label="حذف المستوى"><Trash2 size={14} /></button>
                </div>
              </div>
              {level.sections.map((section) => (
                <div className="course-section" key={section.title}>
                  <div className="course-scope-head">
                    <div className="course-scope-heading">
                      <button className="course-tool drag-handle" type="button" aria-label="ترتيب القسم"><GripVertical size={15} /></button>
                      <span className="course-scope-number"><Layers3 size={16} /></span>
                      <div><h3>{section.title}</h3><p>{section.count}</p></div>
                    </div>
                    <div className="course-scope-tools">
                      <button className="button-soft" type="button"><Plus size={13} /> مادة</button>
                      <button className="course-tool" type="button" aria-label="تعديل القسم"><Pencil size={14} /></button>
                      <button className="course-tool" type="button" aria-label="حذف القسم"><Trash2 size={14} /></button>
                    </div>
                  </div>
                  <div className="course-content-list">
                    {section.items.map((item) => <ContentRow key={item.title} {...item} />)}
                  </div>
                </div>
              ))}
            </section>
          ))}
        </div>
      </main>
      <nav className="mock-mobile-nav" aria-label="التنقل">
        <span><BookOpen size={16} />الدورات</span>
        <span><Layers3 size={16} />الطلاب</span>
        <span><Radio size={16} />المجموعة</span>
      </nav>
    </div>
  );
}
