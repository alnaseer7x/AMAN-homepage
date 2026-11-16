import { useState } from 'react';
import { Check, Database, LoaderCircle } from 'lucide-react';
import {
  isSupabaseConfigured,
  saveOrReadWethaqSample,
  supabaseConfigurationMessage,
} from '@/lib/supabase';

type TestStatus =
  | { kind: 'success'; message: string }
  | { kind: 'error'; message: string };

export function SupabaseSampleTest() {
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState<TestStatus | null>(null);

  async function handleSave() {
    setSaving(true);
    setStatus(null);

    try {
      const result = await saveOrReadWethaqSample();
      setStatus({
        kind: 'success',
        message: result.alreadySaved
          ? 'العينة محفوظة مسبقًا، وتمت قراءتها من Supabase.'
          : 'تم حفظ العينة وقراءتها من Supabase.',
      });
    } catch (error) {
      console.error('WETHAQ Supabase sample test failed:', error);
      setStatus({
        kind: 'error',
        message: 'تعذر الاتصال أو الحفظ. تأكد من إعداد Supabase ثم أعد المحاولة.',
      });
    } finally {
      setSaving(false);
    }
  }

  return (
    <section className="supabase-test-section section-shell" aria-labelledby="supabase-test-title">
      <div className="supabase-test-copy">
        <span className="supabase-test-kicker"><Database size={15} /> اختبار تطوير فقط</span>
        <h2 id="supabase-test-title">تحقق من اتصال قاعدة البيانات</h2>
        <p>يحفظ الاختبار عينة ثابتة وغير حساسة مرة واحدة. لا تُدخل بيانات عميل أو مشروع حقيقي هنا.</p>
      </div>
      <div className="supabase-test-action">
        {!isSupabaseConfigured && (
          <p className="supabase-test-status error" role="status">
            {supabaseConfigurationMessage}
          </p>
        )}
        <button
          type="button"
          className="button-primary"
          onClick={handleSave}
          disabled={!isSupabaseConfigured || saving}
          data-testid="button-save-wethaq-sample"
        >
          {saving ? <LoaderCircle className="supabase-test-spinner" size={16} /> : <Check size={16} />}
          {saving ? 'جارٍ التحقق…' : 'حفظ عينة اختبار'}
        </button>
        {status && (
          <p className={`supabase-test-status ${status.kind}`} role="status" data-testid="wethaq-supabase-status">
            {status.message}
          </p>
        )}
      </div>
    </section>
  );
}
