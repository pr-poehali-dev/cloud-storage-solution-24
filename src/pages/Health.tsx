import { Link } from 'react-router-dom';

const nutritionPrograms = [
  { icon: '🛡️', title: 'Профилактика', description: 'Поддержание здоровья и предупреждение заболеваний через сбалансированное питание.' },
  { icon: '💪', title: 'Общеукрепляющий', description: 'Укрепление иммунитета и общего тонуса организма.' },
  { icon: '👨‍👩‍👧', title: 'Семейный', description: 'Питание для всей семьи с учётом потребностей каждого члена.' },
  { icon: '🌸', title: 'Женское здоровье', description: 'Поддержка гормонального баланса, цикла и женского самочувствия.' },
  { icon: '🏃', title: 'Мужское здоровье', description: 'Питание для энергии, выносливости и мужского здоровья.' },
  { icon: '🍃', title: 'Детокс', description: 'Мягкое очищение организма без стресса и жёстких ограничений.' },
  { icon: '🦋', title: 'АИТ', description: 'Питание при аутоиммунном тиреоидите: снижение воспаления, поддержка щитовидной железы.' },
  { icon: '💧', title: 'Мочевыделительная система', description: 'Нутрициологическая поддержка почек и мочевыделительной системы.' },
  { icon: '🔵', title: 'Простатит', description: 'Питание для поддержки мужского здоровья при простатите.' },
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

          {/* Blog */}
          <div>
            <h3 className="mb-2 text-2xl font-light text-stone-900">📖 Информационный блог</h3>
            <p className="mb-6 text-sm text-stone-500">Полезные материалы о здоровом питании и образе жизни. Читайте в наших сообществах:</p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://vk.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-stone-200 bg-white px-5 py-2.5 text-sm font-medium text-stone-700 shadow-sm transition-all hover:border-amber-400 hover:text-stone-900"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.727-1.033-1-1.49-1.135-1.745-1.135-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.12-5.339-3.202-2.17-3.043-2.763-5.32-2.763-5.788 0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.677.863 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.203.17-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.814-.542 1.27-1.422 2.18-3.625 2.18-3.625.119-.254.322-.491.763-.491h1.744c.525 0 .644.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.05.17.49-.085.744-.576.744z"/></svg>
                ВКонтакте
              </a>
              <a
                href="https://max.ru/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-stone-200 bg-white px-5 py-2.5 text-sm font-medium text-stone-700 shadow-sm transition-all hover:border-amber-400 hover:text-stone-900"
              >
                МАХ
              </a>
            </div>
          </div>

          {/* Nutrition */}
          <div>
            <h3 className="mb-2 text-2xl font-light text-stone-900">🥗 Нутрициологическая поддержка</h3>
            <p className="mb-6 text-sm text-stone-500">Бережное отношение к здоровью через питание. Индивидуальные программы по направлениям:</p>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              {nutritionPrograms.map((p) => (
                <div
                  key={p.title}
                  className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm"
                >
                  <p className="text-2xl">{p.icon}</p>
                  <h4 className="mt-2 text-base font-medium text-stone-900">{p.title}</h4>
                  <p className="mt-1 text-xs leading-relaxed text-stone-500">{p.description}</p>
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