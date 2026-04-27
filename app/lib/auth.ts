export type StoredUser = {
  id: string;
  username: string;
  password: string;
  color: string;
};

export type Session = {
  userId: string;
  username: string;
  color: string;
};

const COLORS = ['#7b1a2e', '#1a7b4a', '#1a4a7b', '#7b6a1a', '#6a1a7b', '#7b4a1a'];

export const SEED_USERS: StoredUser[] = [
  { id: 'u1', username: 'Gordon', password: 'password123', color: '#7b1a2e' },
  { id: 'u2', username: 'Sarah', password: 'password123', color: '#1a7b4a' },
  { id: 'u3', username: 'Mike', password: 'password123', color: '#1a4a7b' },
];

export function getStoredUsers(): StoredUser[] {
  const raw = localStorage.getItem('senior-sales-users');
  if (!raw) {
    localStorage.setItem('senior-sales-users', JSON.stringify(SEED_USERS));
    return SEED_USERS;
  }
  try {
    return JSON.parse(raw);
  } catch {
    return SEED_USERS;
  }
}

export function getSession(): Session | null {
  const raw = localStorage.getItem('senior-sales-session');
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export function login(username: string, password: string): Session | { error: string } {
  const users = getStoredUsers();
  const user = users.find(
    u =>
      u.username.toLowerCase() === username.trim().toLowerCase() &&
      u.password === password
  );
  if (!user) return { error: 'Invalid username or password' };
  const session: Session = { userId: user.id, username: user.username, color: user.color };
  localStorage.setItem('senior-sales-session', JSON.stringify(session));
  return session;
}

export function register(username: string, password: string): Session | { error: string } {
  const trimmed = username.trim();
  if (trimmed.length < 3) return { error: 'Username must be at least 3 characters' };
  if (password.length < 6) return { error: 'Password must be at least 6 characters' };

  const users = getStoredUsers();
  if (users.find(u => u.username.toLowerCase() === trimmed.toLowerCase())) {
    return { error: 'Username is already taken' };
  }

  const color = COLORS[users.length % COLORS.length];
  const newUser: StoredUser = { id: `u${Date.now()}`, username: trimmed, password, color };
  localStorage.setItem('senior-sales-users', JSON.stringify([...users, newUser]));

  const session: Session = { userId: newUser.id, username: newUser.username, color: newUser.color };
  localStorage.setItem('senior-sales-session', JSON.stringify(session));
  return session;
}

export function logout(): void {
  localStorage.removeItem('senior-sales-session');
}

export function convId(a: string, b: string): string {
  return [a, b].sort().join('_');
}
