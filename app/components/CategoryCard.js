'use client';

export default function CategoryCard({ title, theme, currentTheme, onClick }) {
  // Color logic for category
  const color =
    theme === 'restaurant'
      ? 'red'
      : theme === 'cosmetics'
      ? 'pink'
      : theme === 'electronics'
      ? 'blue'
      : 'yellow';

  const isActive = currentTheme === theme;

  return (
    <div
      onClick={onClick}
      className={`p-4 rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform duration-200 ${
        isActive ? `border-2 border-${color}-500 bg-${color}-100` : 'bg-white'
      }`}
    >
      <h3 className={`font-semibold text-${color}-700 text-center`}>{title}</h3>
    </div>
  );
}
