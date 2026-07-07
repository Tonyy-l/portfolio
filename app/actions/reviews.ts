'use server';

import { revalidatePath } from 'next/cache';
import { prisma } from '@/lib/prisma';

export type ReviewActionState = {
  success: boolean;
  message: string;
};

export async function submitReview(_: ReviewActionState, formData: FormData): Promise<ReviewActionState> {
  const name = String(formData.get('name') ?? '').trim();
  const company = String(formData.get('company') ?? '').trim();
  const quote = String(formData.get('quote') ?? '').trim();
  const rating = Number(formData.get('rating') ?? 0);

  if (!name || !company || !quote || !Number.isInteger(rating) || rating < 1 || rating > 5) {
    return {
      success: false,
      message: 'Попълни всички полета и избери оценка от 1 до 5.'
    };
  }

  try {
    await prisma.review.create({
      data: {
        name,
        company,
        quote,
        rating,
        status: 'PENDING'
      }
    });

    revalidatePath('/');

    return {
      success: true,
      message: 'Ревюто е изпратено и чака одобрение.'
    };
  } catch {
    return {
      success: false,
      message: 'Записът не успя. Провери DATABASE_URL и Prisma конфигурацията.'
    };
  }
}