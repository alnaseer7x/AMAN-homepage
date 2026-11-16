import { useState } from 'react';
import {
  ArrowDownLeft,
  ArrowLeft,
  ArrowUpLeft,
  Check,
  ChevronDown,
  CircleCheck,
  Eye,
  FileCheck2,
  FileText,
  Handshake,
  Layers3,
  Menu,
  ShieldCheck,
  Sparkles,
  X,
} from 'lucide-react';
import { SupabaseConnectionTest } from '@/components/supabase-connection-test';

const questions = [
  {
    question: 'ما هي أمان؟',
    answer: 'أمان مساحة لتنظيم الاتفاقات المالية بين العميل ومقدم الخدمة المستقل. تساعدكما على توضيح قيمة المشروع ومراحله ومتابعة حالة كل خطوة ضمن تجربة واحدة.',
  },
  {
    question: 'هل أمان بنك أو خدمة ضمان للأموال؟',
    answer: 'لا. أمان ليست بنكاً ولا خدمة ضمان أو escrow، ولا تضمن الأموال أو تضمن نتيجة المشروع. دورها تنظيم الاتفاق وإظهار تفاصيله وحالات مراحله بوضوح.',
  },
  {
    question: 'كيف تعمل المراحل؟',
    answer: 'يتفق الطرفان على قيمة المشروع وما يشمله، ثم يجزّئان العمل إلى مراحل وتسليمات محددة. تظهر قيمة كل مرحلة وحالتها للطرفين قبل الانتقال إلى الخطوة التالية.',
  },
  {
    question: 'متى يراجع العميل العمل؟',
    answer: 'عند إكمال مقدم الخدمة للمرحلة وإرسالها للمراجعة، يستطيع العميل الاطلاع على العمل وإبداء موافقته. وتظل تفاصيل المرحلة وحالتها ظاهرة للطرفين.',
  },
  {
    question: 'ماذا لو اختلف الطرفان؟',
    answer: 'يمكن لأي من الطرفين رفع نزاع حول المشروع لبدء مسار مراجعة. لا تعد أمان بحسم مسبق أو بنتيجة معينة؛ وتُعرض تفاصيل المسار بوضوح ضمن المنصة.',
  },
  {
    question: 'هل الاتفاق يحل محل العقد أو الاستشارة القانونية؟',
    answer: 'لا. أمان أداة تنظيمية تساعد على توثيق ما اتفق عليه الطرفان، ولا تحل محل العقد القانوني أو الاستشارة المتخصصة.',
  },
  {
    question: 'هل تصلح أمان للمشاريع الصغيرة؟',
    answer: 'نعم. وضوح البداية مفيد للمشاريع الصغيرة والكبيرة، من تصميم هوية أو كتابة محتوى إلى تطوير موقع أو تقديم خدمة مستقلة أخرى.',
  },
];

function Brand() {
  return (
    <a className="brand" href="#top" aria-label="أمان، إلى أعلى الصفحة" data-testid="link-home">
      <span className="brand-mark" aria-hidden="true"><span>أ</span></span>
      <span className="brand-name">
        <span className="brand-ar">أمان</span>
        <span className="brand-en" lang="en" dir="ltr">AMAN</span>
      </span>
    </a>
  );
}

function AgreementPreview() {
  const [activeMilestoneId, setActiveMilestoneId] = useState(2);
  const milestones = [
    {
      id: 1,
      number: '١',
      name: 'اتجاهات الهوية',
      price: '١٬٢٠٠',
      status: 'تم التحرير',
      summary: 'اعتمد العميل التسليم في هذا المثال.',
    },
    {
      id: 2,
      number: '٢',
      name: 'تطوير الهوية',
      price: '٢٬٤٠٠',
      status: 'قيد الانتظار',
      summary: 'المرحلة بانتظار مراجعة التسليم.',
    },
    {
      id: 3,
      number: '٣',
      name: 'ملفات التسليم',
      price: '١٬٢٠٠',
      status: 'قيد الانتظار',
      summary: 'تبدأ بعد اكتمال المرحلة السابقة.',
    },
  ];
  const activeMilestone = milestones.find(({ id }) => id === activeMilestoneId) ?? milestones[1];

  return (
    <div className="hero-art" aria-label="تصور توضيحي لاتفاق مشروع ومراحله" data-testid="visual-agreement">
      <div className="art-halo" />
      <div className="art-orbit" aria-hidden="true"><span /><span /><span /><span /></div>
      <article className="agreement-card">
        <div className="doc-topline">
          <span className="doc-mark"><FileText size={15} strokeWidth={1.7} /> اتفاق مشروع</span>
          <span className="doc-id">أ م / ٠٢٤</span>
        </div>
        <div className="doc-rule" />
        <p className="doc-caption">مثال توضيحي — اختر مرحلة</p>
        <h3>تصميم هوية<br />متجر سِدرة</h3>
        <div className="doc-parties">
          <div><small>مقدم الخدمة</small><b>نورة العتيبي</b></div>
          <div className="party-divider"><Handshake size={17} /></div>
          <div><small>صاحب المشروع</small><b>متجر سِدرة</b></div>
        </div>
        <div className="doc-rule" />
        <div className="milestone-title"><span>المراحل المتفق عليها</span><span className="milestone-count">٣ مراحل</span></div>
        <div className="milestone-list" role="group" aria-label="اختر مرحلة لعرض حالتها">
          {milestones.map((milestone) => (
            <button
              key={milestone.id}
              className={`milestone-row${activeMilestoneId === milestone.id ? ' active-milestone' : ''}`}
              type="button"
              aria-pressed={activeMilestoneId === milestone.id}
              aria-label={`عرض المرحلة ${milestone.number}: ${milestone.name}، ${milestone.price} ريال`}
              onClick={() => setActiveMilestoneId(milestone.id)}
              data-testid={`button-demo-stage-${milestone.id}`}
            >
              <span className="milestone-number">{milestone.number}</span>
              <span className="milestone-name">{milestone.name}</span>
              <span className="milestone-price">{milestone.price} <small>ر.س</small></span>
            </button>
          ))}
        </div>
        <div className="demo-stage-detail" aria-live="polite" data-testid={`status-demo-stage-${activeMilestone.id}`}>
          <div className="demo-stage-status">
            <span>حالة توضيحية</span>
            <span className={`demo-status-pill${activeMilestone.status === 'تم التحرير' ? ' is-released' : ' is-pending'}`}>
              {activeMilestone.status}
            </span>
          </div>
          <p>{activeMilestone.summary}</p>
        </div>
        <div className="doc-footer">
          <span><Eye size={13} /> الحالة والتفاصيل للطرفين</span>
          <span className="doc-signature">عرض تجريبي</span>
        </div>
        <p className="demo-disclaimer" data-testid="text-demo-disclaimer">لا ينقل أو يحتجز أموالًا.</p>
      </article>
      <div className="floating-note note-one">
        <span className="note-check"><Check size={12} /></span>
        <span><b>مراحل واضحة</b><small>قبل أن يبدأ العمل</small></span>
      </div>
      <div className="floating-note note-two">
        <span className="note-icon"><FileCheck2 size={16} /></span>
        <span><b>ملخص مشترك</b><small>مرجع واحد للطرفين</small></span>
      </div>
      <div className="round-seal" aria-hidden="true"><span>أ</span><small>وضوح<br />من البداية</small></div>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="page-shell" dir="rtl" lang="ar" id="top">
      <header className="site-header">
        <div className="wrap nav-inner">
          <Brand />
          <nav id="primary-navigation" className={`nav-links ${menuOpen ? 'nav-open' : ''}`} aria-label="التنقل الرئيسي">
            <a href="#why" onClick={closeMenu}>لماذا أمان؟</a>
            <a href="#how" onClick={closeMenu}>كيف تعمل</a>
            <a href="#for-whom" onClick={closeMenu}>للطرفين</a>
            <a href="#faq" onClick={closeMenu}>أسئلة شائعة</a>
          </nav>
          <a className="nav-cta" href="#how">ابدأ بوضوح <ArrowLeft size={15} /></a>
          <button
            className="mobile-menu"
            type="button"
            aria-label={menuOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen(!menuOpen)}
            data-testid="button-mobile-menu"
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </header>

      <main>
        <section className="hero grain" aria-labelledby="hero-title">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <div className="hero-kicker"><span className="kicker-line" /> اتفاق أوضح. بداية أهدأ.</div>
              <h1 id="hero-title">الشغل الحلو<br />يبدأ <em>باتفاق واضح.</em></h1>
              <p>أمان تجمع العميل ومقدم الخدمة على تفاصيل مشروع مفهومة، ومراحل محددة، وحالة يعرفها الطرفان — من أول خطوة إلى مراجعة العمل.</p>
              <div className="hero-actions">
                <a className="button-primary" href="#how" data-testid="button-hero-start">خلّ اتفاقك أوضح <ArrowLeft size={16} /></a>
                <a className="text-link" href="#why" data-testid="link-explore">تعرّف على أمان <ArrowDownLeft size={16} /></a>
              </div>
              <div className="hero-note"><ShieldCheck size={17} /><span>وضوح للطرفين، دون وعود مبالغ فيها</span></div>
            </div>
            <AgreementPreview />
          </div>
          <div className="wrap hero-bottomline">
            <span>وضوح يحفظ الودّ</span><span className="bottomline-mark" /><span>من أول اتفاق إلى آخر تسليم</span>
          </div>
        </section>

        <section className="trust-strip" aria-label="مبادئ أمان">
          <div className="wrap trust-inner">
            <p>لأن الشراكة الطيبة تبدأ من تفاهم</p>
            <div className="trust-items">
              <span><ShieldCheck size={17} /> توقعات أوضح للطرفين</span>
              <span><Layers3 size={17} /> مراحل متفق عليها</span>
              <span><Handshake size={17} /> علاقة عمل أطيب</span>
            </div>
          </div>
        </section>

        <section className="wrap why-section" id="why">
          <div className="why-intro">
            <span className="eyebrow">قبل أول تسليم</span>
            <h2 className="section-heading">لا تترك التفاصيل<br /><em>للتخمين.</em></h2>
            <p>كثير من سوء الفهم يبدأ بتفصيل صغير لم يُذكر. أمان تساعد على جمع صورة المشروع في مكان واحد، ليعرف كل طرف ما اتُّفق عليه.</p>
            <a className="underlined-link" href="#how">خلّ البداية على بيّنة <ArrowLeft size={15} /></a>
          </div>
          <div className="clarity-list">
            <article className="clarity-item">
              <span className="clarity-index">٠١</span>
              <div><h3>وش المطلوب بالضبط؟</h3><p>نطاق العمل والتسليمات مكتوبة بوضوح، عشان ما يتغير المشروع من غير اتفاق.</p></div>
              <span className="clarity-symbol"><FileText size={19} /></span>
            </article>
            <article className="clarity-item">
              <span className="clarity-index">٠٢</span>
              <div><h3>متى ننتقل للخطوة الجاية؟</h3><p>كل مرحلة لها تسليمها وقيمتها، فتكون التوقعات واضحة من أول يوم.</p></div>
              <span className="clarity-symbol"><Layers3 size={19} /></span>
            </article>
            <article className="clarity-item">
              <span className="clarity-index">٠٣</span>
              <div><h3>وش اللي اتفقنا عليه؟</h3><p>ملخص مشترك يرجع له الطرفان عند الحاجة، بدل ما تضيع التفاصيل بين الرسائل.</p></div>
              <span className="clarity-symbol"><CircleCheck size={19} /></span>
            </article>
          </div>
        </section>

        <section className="quote-band">
          <div className="wrap quote-inner">
            <span className="quote-mark">«</span>
            <p>الاتفاق الواضح ما يقيّد الشغل؛<br /><em>يعطيه مساحة يمشي بثقة.</em></p>
            <span className="quote-caption">فكرة أمان، من أول صفحة</span>
            <div className="quote-decoration" aria-hidden="true"><span>أ</span></div>
          </div>
        </section>

        <section className="wrap how-section" id="how">
          <div className="how-heading">
            <div><span className="eyebrow">ببساطة، من البداية</span><h2 className="section-heading">ثلاث خطوات.<br /><em>واتفاق يطمن.</em></h2></div>
            <p>ما يحتاج الموضوع تعقيد. اتفقوا على الأساسيات، وشوفوا الصورة كاملة قبل ما يبدأ الشغل.</p>
          </div>
          <div className="steps-track">
            <article className="step-card">
              <span className="step-count">١</span><span className="step-icon"><FileText size={21} /></span>
              <h3>رتّبوا التفاصيل</h3><p>اكتبوا وصف المشروع والتسليمات والوقت المتوقع. الكلام الواضح اليوم يختصر أسئلة بكرة.</p>
              <span className="step-foot">نطاق العمل <ArrowUpLeft size={14} /></span>
            </article>
            <span className="step-connector" aria-hidden="true" />
            <article className="step-card">
              <span className="step-count">٢</span><span className="step-icon"><Layers3 size={21} /></span>
              <h3>قسّموا المراحل</h3><p>اربطوا كل مرحلة بتسليم محدد وقيمة متفق عليها، عشان تكون الالتزامات مفهومة للطرفين.</p>
              <span className="step-foot">مراحل وقيمة <ArrowUpLeft size={14} /></span>
            </article>
            <span className="step-connector" aria-hidden="true" />
            <article className="step-card">
              <span className="step-count">٣</span><span className="step-icon"><Handshake size={21} /></span>
              <h3>تابعوا واعتمدوا</h3><p>راجعوا ما أُنجز، وتابعوا الحالة خطوة بخطوة. وعند الاختلاف، يمكن رفع نزاع للمراجعة.</p>
              <span className="step-foot">وضوح متبادل <ArrowUpLeft size={14} /></span>
            </article>
          </div>
          <div className="how-cta">
            <a className="button-primary" href="#faq" data-testid="button-how-faq">عندك سؤال؟ نجاوبك <ArrowLeft size={16} /></a>
            <span>الوضوح يليق بكل مشروع، مهما كان حجمه.</span>
          </div>
        </section>

        <section className="for-whom-section" id="for-whom">
          <div className="wrap for-whom-inner">
            <div className="for-whom-title"><span className="eyebrow">مساحة مشتركة</span><h2 className="section-heading">طرفين،<br /><em>وتوقعات أوضح.</em></h2></div>
            <article className="side-card provider-card">
              <span className="side-label">لمقدم الخدمة المستقل</span>
              <h3>قدّر وقتك<br />وحدّد حدود شغلك.</h3>
              <p>وضّح نطاق العمل، مراحل التسليم، وقيمة كل مرحلة قبل ما تبدأ.</p>
              <span className="side-icon"><Sparkles size={20} /></span>
              <span className="side-foot">مساحة لجهدك، من البداية</span>
            </article>
            <article className="side-card client-card">
              <span className="side-label">للعميل وصاحب المشروع</span>
              <h3>اعرف وش تستلم<br />ومتى تستلمه.</h3>
              <p>صورة واضحة عن التكلفة والتسليمات تساعدك على بدء المشروع بتوقعات مفهومة.</p>
              <span className="side-icon"><ShieldCheck size={20} /></span>
              <span className="side-foot">وضوح في كل خطوة</span>
            </article>
          </div>
        </section>

        <section className="disclaimer-band" aria-label="تنويه مهم">
          <div className="wrap disclaimer-inner">
            <ShieldCheck size={19} />
            <p><strong>بكل شفافية:</strong> أمان ليست بنكاً ولا خدمة ضمان أو escrow، ولا تحتفظ بالأموال أو تضمنها. تساعد على تنظيم الاتفاق ومتابعة المراحل، ولا تضمن نتيجة المشروع أو النزاع. راجعوا تفاصيل الخدمة ومسار المراجعة قبل الاستخدام.</p>
          </div>
        </section>

        <section className="wrap faq-section" id="faq">
          <div className="faq-aside">
            <span className="eyebrow">أسئلة على بالكم</span>
            <h2 className="section-heading">خلّنا نوضّح<br /><em>الصورة.</em></h2>
            <p>الوضوح يبدأ من السؤال الصحيح. هذه إجابات عن فكرة أمان وطريقة استخدامها.</p>
            <a className="text-link faq-contact" href="#how" data-testid="link-contact">راجع طريقة العمل <ArrowLeft size={16} /></a>
          </div>
          <div className="faq-list">
            {questions.map((item, index) => (
              <article className={`faq-item ${openFaq === index ? 'faq-open' : ''}`} key={item.question}>
                <button
                  className="faq-question"
                  type="button"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  aria-expanded={openFaq === index}
                  data-testid={`button-faq-${index}`}
                >
                  <span className="faq-number">٠{index + 1}</span><span>{item.question}</span><ChevronDown size={18} />
                </button>
                {openFaq === index && <p className="faq-answer" data-testid={`text-faq-answer-${index}`}>{item.answer}</p>}
              </article>
            ))}
          </div>
        </section>

        {import.meta.env.DEV && <SupabaseConnectionTest />}

        <section className="final-cta grain" id="about">
          <div className="wrap cta-inner">
            <span className="closing-seal" aria-hidden="true"><span>أ</span></span>
            <span className="closing-kicker">خلّ البداية تشبه اللي تتمنّاه</span>
            <h2>اتفاق واضح.<br /><em>وقلب مرتاح.</em></h2>
            <p>ابدأوا مشروعكم على تفاهم يحترم وقتكم وجهدكم، ويترك مساحة للشغل الحلو.</p>
            <a className="button-primary" href="#top" data-testid="button-back-to-top">اكتشف أمان من البداية <ArrowLeft size={16} /></a>
            <span className="closing-note">أمان — وضوح يحفظ الودّ</span>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap footer-inner">
          <Brand />
          <p className="footer-note">وضوح يحفظ الودّ</p>
          <nav className="footer-links" aria-label="روابط الصفحة">
            <a href="#why">لماذا أمان؟</a><a href="#how">كيف تعمل</a><a href="#for-whom">للطرفين</a><a href="#faq">الأسئلة الشائعة</a>
          </nav>
          <span className="copyright">© أمان ٢٠٢٥</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
