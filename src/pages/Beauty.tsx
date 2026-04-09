import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Мужские стрижки',
    description: 'Классические и современные мужские стрижки. Аккуратно, стильно, с вниманием к деталям.',
  },
  {
    title: 'Женские стрижки',
    description: 'Стрижки любой сложности: от классики до авторских техник. Подбор формы под тип лица.',
  },
  {
    title: 'Детские стрижки',
    description: 'Бережный и терпеливый подход к маленьким клиентам. Комфортная атмосфера для ребёнка.',
  },
  {
    title: 'Окрашивание',
    description: 'Однотонное окрашивание, мелирование, балаяж, тонирование. Бережные техники с качественными красителями.',
  },
];

export default function Beauty() {
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
            <h1 className="text-xl font-light text-white">Внешняя красота</h1>
          </div>
        </div>
      </div>

      {/* Hero */}
      <div className="bg-stone-900 px-8 pb-16 pt-8">
        <div className="container mx-auto max-w-3xl text-center">
          <p className="text-4xl">✂️</p>
          <h2 className="mt-4 text-3xl font-light text-white md:text-4xl">
            Стрижки и окрашивание
          </h2>
          <p className="mt-4 text-base font-light text-white/60">
            Профессиональный уход за волосами в атмосфере спокойствия и гармонии. Каждая процедура — это не просто красота, а забота о себе.
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
                <h3 className="text-lg font-medium text-stone-900">{s.title}</h3>
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
