'use client';

import { useActionState } from 'react';
import { submitReview, type ReviewActionState } from '@/app/actions/reviews';

const initialState: ReviewActionState = {
  success: false,
  message: ''
};

export function ReviewForm() {
  const [state, action, pending] = useActionState(submitReview, initialState);

  return (
    <form action={action} className="rounded-3xl border border-line bg-panel p-6 shadow-card">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Добави ревю</p>
      <h3 className="mt-3 text-xl font-semibold text-text">Пиши мнение и оцени с 1 до 5</h3>

      <div className="mt-6 space-y-4">
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-text">Име</span>
          <input
            name="name"
            required
            className="w-full rounded-2xl border border-line bg-panelAlt px-4 py-3 text-sm text-text outline-none transition placeholder:text-slate-500 focus:border-accent/50"
            placeholder="Име и фамилия"
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-medium text-text">Фирма</span>
          <input
            name="company"
            required
            className="w-full rounded-2xl border border-line bg-panelAlt px-4 py-3 text-sm text-text outline-none transition placeholder:text-slate-500 focus:border-accent/50"
            placeholder="Име на бизнес"
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-medium text-text">Оценка</span>
          <select
            name="rating"
            required
            defaultValue=""
            className="w-full rounded-2xl border border-line bg-panelAlt px-4 py-3 text-sm text-text outline-none transition focus:border-accent/50"
          >
            <option value="" disabled>
              Избери
            </option>
            {[5, 4, 3, 2, 1].map((rating) => (
              <option key={rating} value={rating}>
                {rating} звезди
              </option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-medium text-text">Ревю</span>
          <textarea
            name="quote"
            required
            rows={6}
            className="w-full rounded-2xl border border-line bg-panelAlt px-4 py-3 text-sm text-text outline-none transition placeholder:text-slate-500 focus:border-accent/50"
            placeholder="Какво ти хареса и какъв беше резултатът?"
          />
        </label>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={pending}
          className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-slate-950 transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {pending ? 'Изпращане...' : 'Изпрати ревю'}
        </button>
        <p className={`text-sm ${state.success ? 'text-success' : state.message ? 'text-red-300' : 'text-muted'}`} aria-live="polite">
          {state.message || 'Ревютата се публикуват след одобрение.'}
        </p>
      </div>
    </form>
  );
}