export function resolveAuthError(code) {
  switch (code) {
    case 'auth/wrong-password':
      return 'Invalid password';

    case 'auth/user-not-found':
      return 'User not found';

    case 'auth/null-value':
      return 'Missing email or password';

    default:
      break;
  }
}
