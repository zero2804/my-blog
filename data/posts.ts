export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  cover?: string;
  content?: string;
};

export const posts: Post[] = [
  {
    slug: "post-1",
    title: "Как начать изучать JavaScript",
    description: "Пошаговое руководство для новичков, чтобы освоить JS быстро и эффективно.",
    date: "2025-11-01",
    cover: "/images/js-guide.jpg"
  },
  {
    slug: "post-2",
    title: "Лучшие практики CSS в 2025 году",
    description: "Советы и трюки по современному CSS, которые помогут создавать красивый и адаптивный дизайн.",
    date: "2025-10-20",
    cover: "/images/css-tips.jpg"
  },
  {
    slug: "post-3",
    title: "React vs Vue: что выбрать?",
    description: "Сравнение двух популярных фреймворков, их плюсы и минусы, примеры использования.",
    date: "2025-09-15",
    cover: "/images/react-vs-vue.jpg"
  },
  {
    slug: "post-4",
    title: "Как оптимизировать веб-приложение",
    description: "Методы ускорения загрузки страниц и улучшения UX для ваших пользователей.",
    date: "2025-08-05",
    cover: "/images/web-optimization.jpg"
  },
  {
    slug: "post-5",
    title: "Геймдев для начинающих",
    description: "Основы создания игр: от идеи до первой версии проекта с простым движком.",
    date: "2025-07-10",
    cover: "/images/game-dev.jpg"
  },
  {
    slug: "post-6",
    title: "Путешествие в мир AI",
    description: "Что такое искусственный интеллект и как его использовать в реальных проектах.",
    date: "2025-06-01",
    cover: "/images/ai-journey.jpg"
  },
];
