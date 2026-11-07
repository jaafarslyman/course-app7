import { useState, type ReactNode } from 'react';
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
import './_group.css';
import './MobileClean.css';

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

type IconActionProps = {
  label: string;
  onClick: (label: string) => void;
  children: ReactNode;
  className?: string;
};

function IconAction({ label, onClick, children, className = '' }: IconActionProps) {
  return (
    <button
      className={`course-tool ${className}`}
      type="button"
      aria-label={label}
      title={label}
      onClick={() => onClick(label)}
    >
      {children}
    </button>
  );
}

function ContentRow({
  kind,
  title,
  onAction,
}: {
  kind: string;
  title: string;
  onAction: (label: string) => void;
}) {
  const Icon = kind === 'video' ? Video : kind === 'audio' ? FileAudio2 : FileText;
  const kindLabel = kind === 'video' ? 'فيديو' : kind === 'audio' ? 'ملف صوتي' : 'نص تعليمي';
  return (
    <div className="course-content-row">
      <span className={`content-kind-icon ${kind}`} aria-hidden="true"><Icon size={18} /></span>
      <div className="course-content-copy">
        <div className="course-content-title">{title}</div>
        <div className="course-content-subtitle">{kindLabel}</div>
      </div>
      <div className="course-content-actions icon-action-group" role="group" aria-label={`إجراءات ${title}`}>
        <IconAction label={`تعديل ${title}`} onClick={onAction}><Pencil size={17} /></IconAction>
        <IconAction label={`حذف ${title}`} onClick={onAction}><Trash2 size={17} /></IconAction>
        <IconAction label={`ترتيب ${title}`} onClick={onAction} className="drag-handle"><GripVertical size={18} /></IconAction>
      </div>
    </div>
  );
}

export function MobileClean() {
  const [published, setPublished] = useState(true);
  const [notice, setNotice] = useState('');

  function showAction(label: string) {
    setNotice(`تم اختيار: ${label}`);
  }

  function togglePublish() {
    const nextPublished = !published;
    setPublished(nextPublished);
    setNotice(nextPublished ? 'تم اختيار نشر الدورة' : 'تم اختيار إيقاف النشر');
  }

  return (
    <div className="course-editor-mobile-clean" dir="rtl">
      <header className="mobile-topbar">
        <div className="mobile-brand"><span className="mobile-brand-mark">L.</span> لُغتي بثقة</div>
        <div className="mobile-topbar-title">بناء الدورة</div>
        <IconAction label="خيارات الإدارة" onClick={showAction}><BookOpen size={18} /></IconAction>
      </header>

      <main className="mobile-main">
        <div className="course-pages">
          <div className="course-tree-toolbar">
            <div className="course-breadcrumbs">
              <button type="button" className="breadcrumb-back" onClick={() => showAction('الدورات')}>الدورات</button>
              <ChevronLeft size={14} aria-hidden="true" />
              <span>الإنجليزية في الحياة اليومية</span>
            </div>
            <div className="course-heading-tools">
              <span className={`course-status ${published ? '' : 'draft'}`}>
                {published ? <><Check size={13} aria-hidden="true" /> منشورة</> : <><Radio size={13} aria-hidden="true" /> مسودة</>}
              </span>
              <IconAction
                label={published ? 'إيقاف النشر' : 'نشر الدورة'}
                onClick={togglePublish}
                className="publish-tool"
              >
                {published ? <Radio size={18} /> : <Check size={18} />}
              </IconAction>
            </div>
          </div>

          <section className="course-builder-hero">
            <div>
              <div className="eyebrow">مخطط المحتوى</div>
              <h2>الإنجليزية في الحياة اليومية</h2>
              <p>رتّب المواد في المستوى أو القسم المناسب. سيظهر هذا الترتيب نفسه للمتعلّم.</p>
            </div>
            <div className="course-builder-hero-tools icon-action-group" role="group" aria-label="إجراءات الدورة">
              <IconAction label="تعديل اسم الدورة" onClick={showAction}><Pencil size={18} /></IconAction>
              <IconAction label="إضافة مستوى" onClick={showAction}><Plus size={19} /></IconAction>
            </div>
          </section>

          {levels.map((level) => (
            <section className="panel course-scope" key={level.number}>
              <div className="course-scope-head">
                <div className="course-scope-heading">
                  <IconAction label={`ترتيب المستوى ${level.title}`} onClick={showAction} className="drag-handle">
                    <GripVertical size={18} />
                  </IconAction>
                  <span className="course-scope-number">{level.number}</span>
                  <div>
                    <h3>{level.title}</h3>
                    <p>{level.summary}</p>
                  </div>
                </div>
                <div className="course-scope-tools icon-action-group" role="group" aria-label={`إجراءات المستوى ${level.title}`}>
                  <IconAction label={`إضافة قسم إلى ${level.title}`} onClick={showAction}><Plus size={18} /></IconAction>
                  <IconAction label={`تعديل المستوى ${level.title}`} onClick={showAction}><Pencil size={17} /></IconAction>
                  <IconAction label={`حذف المستوى ${level.title}`} onClick={showAction}><Trash2 size={17} /></IconAction>
                </div>
              </div>
              {level.sections.map((section) => (
                <div className="course-section" key={section.title}>
                  <div className="course-scope-head">
                    <div className="course-scope-heading">
                      <IconAction label={`ترتيب القسم ${section.title}`} onClick={showAction} className="drag-handle">
                        <GripVertical size={18} />
                      </IconAction>
                      <span className="course-scope-number"><Layers3 size={17} aria-hidden="true" /></span>
                      <div>
                        <h3>{section.title}</h3>
                        <p>{section.count}</p>
                      </div>
                    </div>
                    <div className="course-scope-tools icon-action-group" role="group" aria-label={`إجراءات القسم ${section.title}`}>
                      <IconAction label={`إضافة مادة إلى ${section.title}`} onClick={showAction}><Plus size={18} /></IconAction>
                      <IconAction label={`تعديل القسم ${section.title}`} onClick={showAction}><Pencil size={17} /></IconAction>
                      <IconAction label={`حذف القسم ${section.title}`} onClick={showAction}><Trash2 size={17} /></IconAction>
                    </div>
                  </div>
                  <div className="course-content-list">
                    {section.items.map((item) => (
                      <ContentRow key={item.title} {...item} onAction={showAction} />
                    ))}
                  </div>
                </div>
              ))}
            </section>
          ))}
        </div>
      </main>

      {notice && <div className="mobile-feedback" role="status" aria-live="polite">{notice}</div>}

      <nav className="mock-mobile-nav" aria-label="التنقل">
        <button type="button" aria-current="page" onClick={() => showAction('الدورات')}><BookOpen size={17} />الدورات</button>
        <button type="button" onClick={() => showAction('الطلاب')}><Layers3 size={17} />الطلاب</button>
        <button type="button" onClick={() => showAction('المجموعة')}><Radio size={17} />المجموعة</button>
      </nav>
    </div>
  );
}
