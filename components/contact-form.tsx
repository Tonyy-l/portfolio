'use client';

import { useState, type FormEvent } from 'react';
import { buildMailtoLink } from '@/lib/utils';

type ContactFormProps = {
  email: string;
  labels: {
    name: string;
    company: string;
    phone: string;
    email: string;
    projectType: string;
    budget: string;
    message: string;
  };
  placeholders: {
    name: string;
    company: string;
    phone: string;
    email: string;
    message: string;
  };
  projectTypes: string[];
  budgets: string[];
  submitLabel: string;
  successMessage: string;
  errorMessage: string;
};

type FormState = {
  name: string;
  company: string;
  phone: string;
  email: string;
  projectType: string;
  budget: string;
  message: string;
};

const initialState: FormState = {
  name: '',
  company: '',
  phone: '',
  email: '',
  projectType: '',
  budget: '',
  message: ''
};

export function ContactForm({
  email,
  labels,
  placeholders,
  projectTypes,
  budgets,
  submitLabel,
  successMessage,
  errorMessage
}: ContactFormProps) {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const updateField = <K extends keyof FormState>(field: K, value: FormState[K]) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const isValid = Boolean(
      form.name.trim() &&
        form.company.trim() &&
        form.phone.trim() &&
        form.email.trim() &&
        form.projectType.trim() &&
        form.budget.trim() &&
        form.message.trim()
    );

    if (!isValid) {
      setStatus('error');
      return;
    }

    const mailto = buildMailtoLink({
      recipientEmail: email,
      ...form
    });

    setStatus('success');
    window.location.href = mailto;
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-3xl border border-line bg-panel p-6 shadow-card">
      <div className="grid gap-4 md:grid-cols-2">
        <Field
          label={labels.name}
          value={form.name}
          onChange={(value) => updateField('name', value)}
          placeholder={placeholders.name}
        />
        <Field
          label={labels.company}
          value={form.company}
          onChange={(value) => updateField('company', value)}
          placeholder={placeholders.company}
        />
        <Field
          label={labels.phone}
          value={form.phone}
          onChange={(value) => updateField('phone', value)}
          placeholder={placeholders.phone}
        />
        <Field
          label={labels.email}
          value={form.email}
          onChange={(value) => updateField('email', value)}
          placeholder={placeholders.email}
          type="email"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <SelectField
          label={labels.projectType}
          value={form.projectType}
          onChange={(value) => updateField('projectType', value)}
          options={projectTypes}
        />
        <SelectField
          label={labels.budget}
          value={form.budget}
          onChange={(value) => updateField('budget', value)}
          options={budgets}
        />
      </div>

      <label className="block">
        <span className="mb-2 block text-sm font-medium text-text">{labels.message}</span>
        <textarea
          value={form.message}
          onChange={(event) => updateField('message', event.target.value)}
          placeholder={placeholders.message}
          rows={6}
          className="w-full rounded-2xl border border-line bg-panelAlt px-4 py-3 text-sm text-text outline-none transition placeholder:text-slate-500 focus:border-accent/50"
        />
      </label>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-slate-950 transition hover:brightness-110"
        >
          {submitLabel}
        </button>
        <p className={`text-sm ${status === 'error' ? 'text-red-300' : status === 'success' ? 'text-success' : 'text-muted'}`}>
          {status === 'error' ? errorMessage : status === 'success' ? successMessage : 'Отговор в рамките на 1 работен ден.'}
        </p>
      </div>
    </form>
  );
}

type FieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  type?: string;
};

function Field({ label, value, onChange, placeholder, type = 'text' }: FieldProps) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-text">{label}</span>
      <input
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-line bg-panelAlt px-4 py-3 text-sm text-text outline-none transition placeholder:text-slate-500 focus:border-accent/50"
      />
    </label>
  );
}

type SelectFieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
};

function SelectField({ label, value, onChange, options }: SelectFieldProps) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-text">{label}</span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-2xl border border-line bg-panelAlt px-4 py-3 text-sm text-text outline-none transition focus:border-accent/50"
      >
        <option value="">Избери</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}