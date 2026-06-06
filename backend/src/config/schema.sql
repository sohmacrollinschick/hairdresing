create table if not exists public.users (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text not null,
  email text unique not null,
  role text not null default 'client',
  phone text,
  created_at timestamptz not null default now()
);

create table if not exists public.stylists (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  photo text,
  specialization text not null,
  location text,
  phone text,
  bio text,
  created_at timestamptz not null default now()
);

create table if not exists public.services (
  id uuid primary key default gen_random_uuid(),
  category text not null,
  name text not null,
  description text,
  price numeric(12, 2) not null,
  duration text not null,
  image text,
  created_at timestamptz not null default now()
);

create table if not exists public.appointments (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references public.users(id) on delete set null,
  stylist_id uuid references public.stylists(id) on delete set null,
  service_id uuid references public.services(id) on delete set null,
  appointment_date date not null,
  appointment_time time not null,
  notes text,
  status text not null default 'pending',
  created_at timestamptz not null default now()
);

create table if not exists public.gallery_images (
  id uuid primary key default gen_random_uuid(),
  image_url text not null,
  category text not null,
  uploaded_at timestamptz not null default now()
);

create table if not exists public.gallery_videos (
  id uuid primary key default gen_random_uuid(),
  video_url text not null,
  category text not null,
  uploaded_at timestamptz not null default now()
);

alter table public.users enable row level security;
alter table public.stylists enable row level security;
alter table public.services enable row level security;
alter table public.appointments enable row level security;
alter table public.gallery_images enable row level security;
alter table public.gallery_videos enable row level security;

create policy "Public read services" on public.services for select using (true);
create policy "Public read stylists" on public.stylists for select using (true);
create policy "Public read gallery images" on public.gallery_images for select using (true);
create policy "Public read gallery videos" on public.gallery_videos for select using (true);
create policy "Users read own profile" on public.users for select using (auth.uid() = id);
create policy "Users read own appointments" on public.appointments for select using (auth.uid() = user_id);
create policy "Users create own appointments" on public.appointments for insert with check (auth.uid() = user_id);
