import { Link } from 'react-router-dom';

const services = [
  {
    icon: '📖',
    title: 'Информационный блог',
    description: 'Полезные материалы о здоровом питании, осознанном образе жизни и телесных практиках. Простым языком — о важном для вашего здоровья.',
  },
  {
    icon: '🥗',
    title: 'Нутрициологическая поддержка',
    description: 'Бережное отношение к здоровью через питание. Индивидуальная работа: анализ рациона, рекомендации по питанию, поддержка на пути к самочувствию.',
  },
];

const blogPosts = [
  {
    title: 'Как питание влияет на уровень стресса',
    tag: 'Питание',
  },
  {
    title: 'Гвоздестояние: мифы и реальная польза',
    tag: 'Практики',
  },
  {
    title: 'Почему звуковые практики помогают при тревоге',
    tag: 'Здоровье',
  },
];

export default function Health() {
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
            <h1 className="text-xl font-light text-white">Здоровье</h1>
          </div>
        </div>
      </div>

      {/* Hero */}
      <div className="bg-stone-900 px-8 pb-16 pt-8">
        <div className="container mx-auto max-w-3xl text-center">
          <p className="text-4xl">🌿</p>
          <h2 className="mt-4 text-3xl font-light text-white md:text-4xl">
            Здоровье изнутри
          </h2>
          <p className="mt-4 text-base font-light text-white/60">
            Питание, знания и поддержка — три опоры настоящего здоровья. Здесь вы найдёте бережный подход без жёстких диет и стресса.
          </p>
        </div>
      </div>

      {/* Services */}
      <div className="px-8 py-16">
        <div className="container mx-auto max-w-4xl space-y-16">

          {/* Main services */}
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

          {/* Blog section */}
          <div>
            <h3 className="mb-6 text-xl font-light text-stone-900">Из блога</h3>
            <div className="grid gap-4 md:grid-cols-3">
              {blogPosts.map((post) => (
                <div
                  key={post.title}
                  className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm"
                >
                  <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-700">
                    {post.tag}
                  </span>
                  <p className="mt-3 text-sm font-medium leading-snug text-stone-800">
                    {post.title}
                  </p>
                  <p className="mt-2 text-xs text-stone-400">Скоро</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="rounded-2xl bg-stone-900 p-8 text-center">
            <p className="text-lg font-light text-white">Хотите нутрициологическую консультацию?</p>
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
