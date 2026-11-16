create table public.wethaq_demo_records (
  id text primary key check (id = 'wethaq-first-hour'),
  marker text not null check (marker = 'WETHAQ_FIRST_HOUR'),
  created_at timestamptz not null default now()
);

alter table public.wethaq_demo_records enable row level security;

revoke all on table public.wethaq_demo_records from anon, authenticated;
grant select, insert on table public.wethaq_demo_records to anon;

create policy "WETHAQ sample can be read"
  on public.wethaq_demo_records
  for select
  to anon
  using (id = 'wethaq-first-hour');

create policy "Only WETHAQ sample can be inserted"
  on public.wethaq_demo_records
  for insert
  to anon
  with check (
    id = 'wethaq-first-hour'
    and marker = 'WETHAQ_FIRST_HOUR'
  );
