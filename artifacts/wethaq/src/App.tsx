import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ArrowDownLeft, ArrowLeft, ArrowUpLeft, Check, ChevronDown, CircleCheck, FileCheck2, FileText, Handshake, Layers3, Menu, ShieldCheck, Sparkles, X } from 'lucide-react';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { Route, Switch, Router as WouterRouter } from 'wouter';
import { SupabaseSampleTest } from '@/components/supabase-sample-test';

const queryClient = new QueryClient();

const faqItems = [
  {
    question: 'هل أمان جهة قانونية أو وسيط بين الطرفين؟',
    answer: 'أمان أداة تساعد الطرفين على توثيق ما اتفقا عليه بوضوح قبل بدء العمل. لا نحل محل الاستشارة القانونية، ولا نتدخل في تنفيذ المشروع أو تحويل المبالغ.',
  },
  {
    question: 'هل يجب أن يكون المشروع كبيراً؟',
    answer: 'أبداً. وضوح البداية مهم في المشاريع الصغيرة والكبيرة. يمكن أن يكون الاتفاق على تصميم هوية، كتابة محتوى، تطوير موقع، أو أي خدمة مستقلة.',
  },
  {
    question: 'كيف تساعدني المراحل على تجنب سوء الفهم؟',
    answer: 'حين تُقسّم قيمة المشروع إلى مراحل مرتبطة بتسليمات واضحة، يعرف كل طرف ما الذي سيقدمه وما الذي ينتظره قبل الانتقال للخطوة التالية.',
  },
];

function BrandMark({ light = false }: { light?: boolean }) {
  return (
    <a href="#top" className={`brand-lockup ${light ? 'brand-light' : ''}`} aria-label="أمان، الصفحة الرئيسية" data-testid="link-home">
      <span className="brand-emblem" aria-hidden="true"><span>أ</span></span>
      <span className="brand-word">أمان</span>
    </a>
  );
}

function HeroDocument() {
  return (
    <div className="hero-art" aria-label="معاينة اتفاق مشروع ومراحله" data-testid="visual-agreement">
      <div className="art-halo" />
      <div className="art-orbit seal-orbit"><span /><span /><span /><span /></div>
      <div className="document-shadow" />
      <div className="agreement-card drift">
        <div className="doc-topline">
          <span className="doc-mark"><FileText size={15} strokeWidth={1.7} /> اتفاق مشروع</span>
          <span className="doc-id">أ م / ٠٢٤</span>
        </div>
        <div className="doc-rule" />
        <p className="doc-caption">اتفاق تقديم خدمات</p>
        <h3>تصميم هوية<br />متجر سِدرة</h3>
        <div className="doc-parties">
          <div><small>مقدم الخدمة</small><b>نورة العتيبي</b></div>
          <div className="party-divider"><Handshake size={17} /></div>
          <div><small>العميل</small><b>متجر سِدرة</b></div>
        </div>
        <div className="doc-rule" />
        <div className="milestone-title"><span>المراحل المتفق عليها</span><span className="milestone-count">٣ مراحل</span></div>
        <div className="milestone-row">
          <span className="milestone-number">١</span>
          <span className="milestone-name">اتجاهات الهوية</span>
          <span className="milestone-price">١٬٢٠٠ <small>ر.س</small></span>
        </div>
        <div className="milestone-row active-milestone">
          <span className="milestone-number">٢</span>
          <span className="milestone-name">تطوير الهوية</span>
          <span className="milestone-price">٢٬٤٠٠ <small>ر.س</small></span>
        </div>
        <div className="milestone-row">
          <span className="milestone-number">٣</span>
          <span className="milestone-name">التسليم النهائي</span>
          <span className="milestone-price">١٬٢٠٠ <small>ر.س</small></span>
        </div>
        <div className="doc-footer">
          <span><ShieldCheck size={14} /> كل شيء واضح للطرفين</span>
          <span className="doc-signature">نورة × سِدرة</span>
        </div>
      </div>
      <div className="floating-note note-one"><span className="note-check"><Check size={12} /></span><span><b>مراحل واضحة</b><small>قبل أن يبدأ العمل</small></span></div>
      <div className="floating-note note-two"><span className="note-icon"><FileCheck2 size={16} /></span><span><b>اتفاق موثّق</b><small>بين الطرفين</small></span></div>
      <div className="round-seal" aria-hidden="true"><span className="seal-orbit"><i>أ</i></span><small>وضوح<br />من البداية</small></div>
    </div>
  );
}

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const closeMenu = () => setMenuOpen(false);

  return (
    <main dir="rtl" className="wethaq-page" id="top">
      <header className="site-header">
        <div className="header-inner section-shell">
          <BrandMark />
          <nav className={`main-nav ${menuOpen ? 'nav-open' : ''}`} aria-label="التنقل الرئيسي">
            <a href="#why" onClick={closeMenu}>لماذا أمان؟</a>
            <a href="#how" onClick={closeMenu}>كيف يعمل</a>
            <a href="#faq" onClick={closeMenu}>أسئلة شائعة</a>
            <a href="#about" onClick={closeMenu}>عن أمان</a>
          </nav>
          <a className="header-cta" href="#how" data-testid="link-get-started">ابدأ بوضوح <ArrowLeft size={16} /></a>
          <button className="mobile-menu-button" aria-label={menuOpen ? 'إغلاق القائمة' : 'فتح القائمة'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)} data-testid="button-mobile-menu">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <section className="hero-section grain">
        <div className="hero-grid section-shell">
          <div className="hero-copy">
            <div className="hero-kicker reveal"><span className="kicker-line" /> اتفاق أوضح. بداية أهدأ.</div>
            <h1 className="hero-title reveal reveal-delay-1">الشغل الحلو<br />يبدأ <em>باتفاق واضح.</em></h1>
            <p className="hero-description reveal reveal-delay-2">أمان يساعدك أنت والطرف الآخر على ترتيب تفاصيل المشروع ومراحله، من البداية — عشان كل واحد يعرف حقه، وخطوته الجاية.</p>
            <div className="hero-actions reveal reveal-delay-3">
              <a className="button-primary" href="#how" data-testid="button-hero-start">خلّ اتفاقك أوضح <ArrowLeft size={17} /></a>
              <a className="text-link" href="#why" data-testid="link-explore">تعرّف على أمان <ArrowDownLeft size={16} /></a>
            </div>
            <div className="hero-note reveal reveal-delay-3"><span className="note-dots"><i /><i /><i /></span><span>للمستقلين وأصحاب المشاريع في كل بداية جديدة</span></div>
          </div>
          <HeroDocument />
        </div>
        <div className="hero-bottomline section-shell">
          <span>وضوح يحفظ الودّ</span>
          <span className="bottomline-mark" />
          <span>من أول كلمة إلى آخر تسليم</span>
        </div>
      </section>

      <section className="trust-strip" aria-label="مبادئ أمان">
        <div className="trust-inner section-shell">
          <p>لأن الشراكة الطيبة تبدأ من تفاهم</p>
          <div className="trust-items">
            <span><ShieldCheck size={17} /> حقوق أوضح للطرفين</span>
            <span><Layers3 size={17} /> مراحل متفق عليها</span>
            <span><Handshake size={17} /> علاقة عمل أطيب</span>
          </div>
        </div>
      </section>

      <section className="why-section section-shell" id="why">
        <div className="why-intro">
          <span className="eyebrow">قبل أول تسليم</span>
          <h2 className="section-heading">لا تترك التفاصيل<br /><em>للتخمين.</em></h2>
          <p>كثير من الخلافات ما تبدأ بخلاف؛ تبدأ بتفصيل صغير ما اتفقنا عليه. أمان يحوّل الكلام المتفرق إلى صورة واحدة يفهمها الجميع.</p>
          <a className="underlined-link" href="#how">خلّ البداية على بيّنة <ArrowLeft size={15} /></a>
        </div>
        <div className="clarity-list">
          <article className="clarity-item">
            <span className="clarity-index">٠١</span>
            <div><h3>وش المطلوب بالضبط؟</h3><p>نطاق العمل والتسليمات مكتوبة بوضوح، عشان ما يكبر المشروع من غير اتفاق.</p></div>
            <span className="clarity-symbol"><FileText size={19} /></span>
          </article>
          <article className="clarity-item">
            <span className="clarity-index">٠٢</span>
            <div><h3>متى ننتقل للخطوة الجاية؟</h3><p>كل مرحلة لها تسليمها وقيمتها، فتكون التوقعات واضحة من أول يوم.</p></div>
            <span className="clarity-symbol"><Layers3 size={19} /></span>
          </article>
          <article className="clarity-item">
            <span className="clarity-index">٠٣</span>
            <div><h3>وش اللي اتفقنا عليه؟</h3><p>مرجع واحد يرجع له الطرفان عند الحاجة، بدل ما تضيع التفاصيل بين الرسائل.</p></div>
            <span className="clarity-symbol"><CircleCheck size={19} /></span>
          </article>
        </div>
      </section>

      <section className="quote-band">
        <div className="quote-inner section-shell">
          <span className="quote-mark">«</span>
          <p>الاتفاق الواضح ما يقيّد الشغل؛<br /><em>يعطيه مساحة يمشي بثقة.</em></p>
          <span className="quote-caption">فكرة أمان، من أول صفحة</span>
          <div className="quote-decoration" aria-hidden="true"><span>أ</span></div>
        </div>
      </section>

      <section className="how-section section-shell" id="how">
        <div className="how-heading">
          <div><span className="eyebrow">ببساطة، من البداية</span><h2 className="section-heading">ثلاث خطوات.<br /><em>واتفاق يطمن.</em></h2></div>
          <p>ما يحتاج الموضوع تعقيد. اتفقوا على الأساسيات، وشوفوا الصورة كاملة قبل ما يبدأ الشغل.</p>
        </div>
        <div className="steps-track">
          <article className="step-card">
            <span className="step-count">١</span><span className="step-icon"><FileText size={22} /></span>
            <h3>رتّب التفاصيل</h3><p>اكتبوا وصف المشروع، التسليمات، والوقت المتوقع. الكلام الواضح اليوم يختصر أسئلة بكرة.</p>
            <span className="step-foot">نطاق العمل <ArrowUpLeft size={14} /></span>
          </article>
          <span className="step-connector" aria-hidden="true" />
          <article className="step-card">
            <span className="step-count">٢</span><span className="step-icon"><Layers3 size={22} /></span>
            <h3>قسّموا المراحل</h3><p>اربطوا كل دفعة بمرحلة وتسليم محدد، عشان تكون الالتزامات متوازنة وواضحة للطرفين.</p>
            <span className="step-foot">مراحل وقيمة <ArrowUpLeft size={14} /></span>
          </article>
          <span className="step-connector" aria-hidden="true" />
          <article className="step-card">
            <span className="step-count">٣</span><span className="step-icon"><Handshake size={22} /></span>
            <h3>ابدأوا على بيّنة</h3><p>راجعوا الاتفاق مع بعض، وتأكدوا أن كل نقطة تعكس اللي اتفقتوا عليه فعلاً.</p>
            <span className="step-foot">وضوح متبادل <ArrowUpLeft size={14} /></span>
          </article>
        </div>
        <div className="how-cta"><a className="button-primary" href="#faq" data-testid="button-how-faq">عندك سؤال؟ نجاوبك <ArrowLeft size={17} /></a><span>الوضوح يليق بكل مشروع، مهما كان حجمه.</span></div>
      </section>

      <section className="for-whom-section">
        <div className="for-whom-inner section-shell">
          <div className="for-whom-title"><span className="eyebrow">مساحة مشتركة</span><h2 className="section-heading">طرفين،<br /><em>وحقّ محفوظ.</em></h2></div>
          <div className="side-card provider-card">
            <span className="side-label">للمستقل ومقدم الخدمة</span>
            <h3>قدّر وقتك<br />وحدّد حدود شغلك.</h3>
            <p>وضّح نطاق العمل، مراحل التسليم، وقيمة كل مرحلة قبل ما تبدأ.</p>
            <span className="side-icon"><Sparkles size={20} /></span>
            <span className="side-foot">مساحة لجهدك، من البداية</span>
          </div>
          <div className="side-card client-card">
            <span className="side-label">للعميل وصاحب المشروع</span>
            <h3>اعرف وش تستلم<br />ومتى تستلمه.</h3>
            <p>صورة واضحة عن التكلفة والتسليمات تخليك تبدأ وأنت مطمئن.</p>
            <span className="side-icon"><ShieldCheck size={20} /></span>
            <span className="side-foot">ثقة في كل خطوة</span>
          </div>
        </div>
      </section>

      <section className="faq-section section-shell" id="faq">
        <div className="faq-aside">
          <span className="eyebrow">أسئلة على بالكم</span>
          <h2 className="section-heading">خلّنا نوضّح<br /><em>الصورة.</em></h2>
          <p>الوضوح يبدأ من السؤال الصحيح. وهذه إجابات لبعض الأسئلة اللي نسمعها كثير.</p>
          <a className="text-link faq-contact" href="#how" data-testid="link-contact">راجع طريقة العمل <ArrowLeft size={16} /></a>
        </div>
        <div className="faq-list">
          {faqItems.map((item, index) => (
            <article className={`faq-item ${openFaq === index ? 'faq-open' : ''}`} key={item.question}>
              <button className="faq-question" onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index} data-testid={`button-faq-${index}`}>
                <span className="faq-number">٠{index + 1}</span><span>{item.question}</span><ChevronDown size={18} />
              </button>
              {openFaq === index && <p className="faq-answer" data-testid={`text-faq-answer-${index}`}>{item.answer}</p>}
            </article>
          ))}
        </div>
      </section>

      <section className="closing-section grain" id="about">
        <div className="closing-inner section-shell">
          <div className="closing-seal" aria-hidden="true"><span>و</span></div>
          <span className="closing-kicker">خلّ البداية تشبه اللي تتمنّاه</span>
          <h2>اتفاق واضح.<br /><em>وقلب مرتاح.</em></h2>
          <p>ابدأوا مشروعكم على تفاهم يحترم وقتكم وجهدكم، ويترك مساحة للشغل الحلو.</p>
          <a className="closing-button" href="#top" data-testid="button-back-to-top">اكتشف أمان من البداية <ArrowLeft size={17} /></a>
          <span className="closing-note">أمان — وضوح يحفظ الودّ</span>
        </div>
      </section>

      {import.meta.env.DEV && <SupabaseSampleTest />}

      <footer className="site-footer">
        <div className="footer-inner section-shell">
          <BrandMark light />
          <span className="footer-motto">وضوح يحفظ الودّ</span>
          <div className="footer-links"><a href="#why">لماذا أمان؟</a><a href="#how">كيف يعمل</a><a href="#faq">الأسئلة الشائعة</a></div>
          <span className="copyright">© أمان ٢٠٢٥</span>
        </div>
      </footer>
    </main>
  );
}

function Router() {
  return (
    <ErrorBoundary>
      <Switch>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </ErrorBoundary>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
