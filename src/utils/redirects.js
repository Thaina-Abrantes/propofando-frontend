export function redirectLoggedUsers(userType) {
  if (userType === 'super admin') {
    return '/main';
  }

  return '/student/main';
}
