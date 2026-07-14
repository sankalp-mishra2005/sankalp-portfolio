import type { Message } from './lib/types'

export const roles = [
  'Frontend Developer',
  'Backend Developer',
  'AI Agent Builder'
]

export const messages: Message[][] = [
  [
    { message: (name: string) => `Hello! ${name}` },
    {
      message: () =>
        'Before continuing, can you please login with your google account for authentication.',
      type: 'LOGIN'
    }
  ],
  [
    {
      message: () =>
        'Awesome, what is your current job designation? For example, “Software Engineer, Cisco”, “CEO, Company”, etc.',
      type: 'QUESTION',
      field: 'designation'
    }
  ],
  [
    {
      message: () =>
        'That’s so cool. Now you can go ahead and write me nice little testimonial. Sorry for all these steps 😅',
      type: 'QUESTION',
      field: 'message'
    }
  ],
  [
    {
      message: () =>
        'Thanks a lot man✨  Appreciate your effort. Your testimonial will be displayed on my site soon.'
    },
    {
      message: () => 'You can close the tab now. Have a great day!'
    }
  ]
]

export const errorMessage: Message = {
  message: () =>
    'Sorry, email address is invalid 🙁. Please try to login with the email address that you have provided.',
  type: 'ERROR'
}
