export const mainNav = [
  {
    label: 'View Polls',
    path: '#polls',
    display: true,
    focus: false,
  },
  {
    label: 'Login',
    path: 'login',
    display: true,
    focus: false,
  },
  {
    label: 'Sign up',
    path: 'signup',
    display: true,
    focus: true,
  },
];

export const mainNavAuthed = [
  {
    label: 'View Polls',
    path: '#polls',
    display: true,
    focus: false,
  },
  {
    label: 'Go to dashboard',
    path: '/dashboard',
    display: true,
    focus: false,
  },
];

export const userNav = (userName = 'Friend') => (
  [
    {
      label: `Hello, ${userName}!`,
      path: '#',
      display: true,
    },
    {
      label: 'Log out',
      path: '#',
      display: true,
    },
  ]
);
