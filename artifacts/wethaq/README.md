# WETHAQ

صفحة البداية العربية لـWETHAQ، مع اختبار تطوير يحفظ سجلًا ثابتًا واحدًا في Supabase. لا تتضمن هذه النسخة تسجيل حسابات أو اتفاقات فعلية أو تحويل أموال.

## إعداد Supabase

أضف المتغيرين التاليين في Replit Secrets، وعند نشر المشروع أضفهما أيضًا في Vercel Environment Variables:

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

لا تضع القيم الفعلية في ملفات المشروع أو GitHub. ملف `.env.example` يوضح أسماء المتغيرات فقط.

أنشئ الجدول وسياسات الوصول باستخدام `supabase/schema.sql` إذا كنت تجهز قاعدة Supabase جديدة. في Replit، يعرض الاختبار زر حفظ العينة في وضع التطوير فقط؛ ويسمح الجدول بقراءة وإدخال سجل الاختبار الثابت فقط عبر مفتاح anon.

## التشغيل في Replit

من جذر مساحة العمل:

```sh
pnpm install
pnpm --filter @workspace/wethaq run dev
```

للبناء:

```sh
pnpm --filter @workspace/wethaq run build
```

## نشر Vercel لاحقًا

عند رفع مجلد WETHAQ كمستودع مستقل، اجعل جذر المشروع جذر المستودع، واستخدم `pnpm install` للتثبيت، و`pnpm run build` للبناء، ومجلد الإخراج `dist/public`. أضف متغيري Supabase المذكورين أعلاه إلى إعدادات Vercel دون تضمين قيمهما في GitHub.
