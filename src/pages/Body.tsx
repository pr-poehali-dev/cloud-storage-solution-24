import { Link } from 'react-router-dom';

const services = [
  {
    icon: '🧘',
    title: 'Йога тренировки / групповые',
    description: 'Групповые занятия йогой для всех уровней подготовки. Развиваем гибкость, силу и внутренний баланс в поддерживающей атмосфере.',
  },
  {
    icon: '🪷',
    title: 'Индивидуальная Йога / Аэро-йога',
    description: 'Персональные занятия с учётом вашего тела и целей. Аэро-йога на гамаках — мягкая декомпрессия позвоночника и полное расслабление.',
  },
  {
    icon: '📌',
    title: 'Гвоздестояние',
    description: 'Детокс и работа со стрессом. Практика стояния на гвоздях активирует точки стоп, снимает напряжение и перезапускает нервную систему.',
  },
  {
    icon: '✨',
    title: 'Гвоздележание + Тибетские чаши',
    description: 'Мощная практика глубокого расслабления: лёжа на гвоздях под звуки тибетских чаш. Воздействие на всё тело сразу.',
  },
  {
    icon: '🤲',
    title: 'Йога-массаж',
    description: 'Снятие мышечного и эмоционального напряжения. Сочетание мягких массажных техник и работы с дыханием.',
  },
  {
    icon: '🎵',
    title: 'Массаж Тибетскими чашами',
    description: 'Звуковой массаж поющими чашами. Вибрации проникают вглубь тканей, снимают зажимы и выравнивают энергетику тела.',
  },
  {
    icon: '🛒',
    title: 'Гвозди / Купить',
    description: 'Авторские доски с гвоздями есть в наличии. Практикуйте дома — для тех, кто хочет продолжать работу самостоятельно.',
  },
];

export default function Body() {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <div className="bg-stone-900 px-8 py-6">
        <div className="container mx-auto flex items-center gap-6">
          <Link to="/" className="text-white/60 transition-colors hover:text-white">
            ← Назад
          </Link>
          <div>
            <p className="text-xs uppercase tracking-widest text-amber-400">Студия Баланс</p>
            <h1 className="text-xl font-light text-white">Телесные практики</h1>
          </div>
        </div>
      </div>

      {/* Hero */}
      <div className="bg-stone-900 px-8 pb-16 pt-8">
        <div className="container mx-auto max-w-3xl text-center">
          <p className="text-4xl">🧘</p>
          <h2 className="mt-4 text-3xl font-light text-white md:text-4xl">
            Йога, гвозди и телесные практики
          </h2>
          <p className="mt-4 text-base font-light text-white/60">
            Работа с телом через движение, дыхание и звук. Каждая практика — шаг к глубокому расслаблению, осознанности и здоровью.
          </p>
        </div>
      </div>

      {/* Services */}
      <div className="px-8 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((s) => (
              <div
                key={s.title}
                className="rounded-2xl border border-stone-200 bg-white p-8 shadow-sm"
              >
                <p className="text-3xl">{s.icon}</p>
                <h3 className="mt-3 text-lg font-medium text-stone-900">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-500">{s.description}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 rounded-2xl bg-stone-900 p-8 text-center">
            <p className="text-lg font-light text-white">Хотите записаться?</p>
            <p className="mt-1 text-sm text-white/50">Надежда Политова · г. Нарьян-Мар, ул. Полярная, 25А</p>
            <a
              href="tel:+79115856046"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-amber-500 px-8 py-3 text-sm font-medium text-stone-900 transition-all hover:bg-amber-400"
            >
              Записаться · 8 911 585 60 46
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
