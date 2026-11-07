import { useMemo } from 'react';
import {
  BookOpen,
  ChevronLeft,
  LibraryBig,
  MessagesSquare,
} from 'lucide-react';
import { Link } from 'wouter';
import { AppShell, EmptyState, LoadingState, PageHeading } from '@/components/app-shell';
import { LearnerCourseCard } from '@/components/learner-course-card';
import { useLearnerSession } from '@/lib/learner-session-context';
import { useLearnerCourses } from '@/lib/course-api';
import { GroupChatPage } from '@/pages/group-chat';
import { LearnerContentViewerPage } from '@/pages/course-player';

export function LearnerHomePage() {
  const { learner } = useLearnerSession();
  const coursesQuery = useLearnerCourses();
  const courses = useMemo(
    () => [...(coursesQuery.data ?? [])].sort((a, b) => a.sortOrder - b.sortOrder),
    [coursesQuery.data],
  );

  return (
    <AppShell title="رحلتي التعليمية" audience="learner">
      <PageHeading
        eyebrow="أهلًا بعودتك"
        title={learner ? `مرحبًا، ${learner.name}` : 'مساحة المتعلّم'}
        subtitle="اختر دورة لعرض مستوياتها وأقسامها ومحتواها."
      />
      <section className="panel learner-welcome">
        <div className="dialog-icon">
          <BookOpen size={22} aria-hidden="true" />
        </div>
        <div>
          <div className="eyebrow">الحساب المرتبط</div>
          <div className="learner-account-name" data-testid="text-learner-name">
            {learner?.name}
          </div>
          <div className="person-email ltr" data-testid="text-learner-email">
            {learner?.email}
          </div>
        </div>
      </section>
      {coursesQuery.isLoading ? (
        <section className="panel learner-home-status"><LoadingState label="جارٍ تجهيز مسارك التعليمي…" /></section>
      ) : coursesQuery.isError ? (
        <section className="panel learner-empty-panel">
          <EmptyState title="تعذّر تحميل دورتك" description="تحقق من اتصالك ثم حاول فتح المسار مرة أخرى." icon={LibraryBig} />
          <div className="empty-state-action"><button type="button" className="button-soft" onClick={() => void coursesQuery.refetch()}>إعادة المحاولة</button></div>
        </section>
      ) : courses.length ? (
        <section className="learner-home-courses">
          <h2>دوراتك</h2>
          <div className="learner-hierarchy-grid learner-course-grid">
            {courses.map((course) => (
              <LearnerCourseCard key={course.id} course={course} />
            ))}
          </div>
        </section>
      ) : (
        <section className="panel learner-empty-panel">
          <EmptyState title="لا توجد دروس متاحة بعد" description="تم تجهيز دخولك. ستظهر الدورة ومحتواها هنا عند إضافتهما." icon={LibraryBig} />
        </section>
      )}
      <Link className="learner-home-community" href="/learn/community" data-testid="link-learner-community">
        <span className="learner-home-community-icon"><MessagesSquare size={20} /></span>
        <span><strong>مساحة المجموعة</strong><small>تابع المحادثة مع المتعلمين</small></span>
        <ChevronLeft size={17} />
      </Link>
    </AppShell>
  );
}

export function LearnerCommunityPage() {
  return <GroupChatPage audience="learner" />;
}

export function LearnerContentPage() {
  return <LearnerContentViewerPage />;
}
