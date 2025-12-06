'use server';

import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import { prisma } from '@/lib/db';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}

const LeadSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),
  program: z.string().optional(),
  message: z.string().optional(),
});

export async function createLead(prevState: any, formData: FormData) {
  const validatedFields = LeadSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    program: formData.get('program'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Lead.',
    };
  }

  const { name, email, phone, program, message } = validatedFields.data;

  try {
    await prisma.lead.create({
      data: {
        name,
        email,
        phone,
        program: program || "General Inquiry",
        message,
      },
    });
    
    revalidatePath('/admin/leads');
    return { message: 'Thanks! We will contact you shortly.', success: true };
  } catch (error) {
    return {
      message: 'Database Error: Failed to Create Lead.',
    };
  }
}
