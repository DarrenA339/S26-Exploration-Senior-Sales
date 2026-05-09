'use client';

import { useState, useEffect, useRef } from 'react';
import {
  getSession,
  getStoredUsers,
  login,
  register,
  logout,
  convId,
  Session,
  StoredUser,
} from '../lib/auth';

type Message = {
  id: string;
  text: string;
  senderId: string;
  timestamp: number;
  liked: boolean;
};

type Chats = Record<string, Message[]>;

function buildSeedChats(): Chats {
  const now = Date.now();
  return {
    'u1_u2': [
      { id: 'sm1', text: "Hey! Is the jacket still available?", senderId: 'u2', timestamp: now - 3600000, liked: false },
      { id: 'sm2', text: "Yes it is! Just listed it yesterday", senderId: 'u1', timestamp: now - 3500000, liked: false },
      { id: 'sm3', text: "Perfect, I'll take it!", senderId: 'u2', timestamp: now - 3400000, liked: false },
    ],
    'u1_u3': [
      { id: 'sm4', text: "Would you do $15 for the lamp?", senderId: 'u3', timestamp: now - 172800000, liked: false },
    ],
    'u2_u3': [
      { id: 'sm5', text: "Any good furniture deals lately?", senderId: 'u2', timestamp: now - 86400000, liked: false },
      { id: 'sm6', text: "Just listed a couch, check it out!", senderId: 'u3', timestamp: now - 82800000, liked: false },
    ],
  };
}

function formatTime(timestamp: number): string {
  const diff = Date.now() - timestamp;
  if (diff < 60000) return 'Just now';
  if (diff < 3600000) return `${Math.floor(diff / 60000)}m`;
  if (diff < 86400000) return `${Math.floor(diff / 3600000)}h`;
  return `${Math.floor(diff / 86400000)}d`;
}

function Avatar({ username, color, size = 40 }: { username: string; color: string; size?: number }) {
  return (
    <div
      style={{ width: size, height: size, backgroundColor: color, fontSize: size * 0.38 }}
      className="rounded-full flex items-center justify-center text-white font-bold shrink-0 select-none"
    >
      {username[0].toUpperCase()}
    </div>
  );
}

// ─── Auth Form ────────────────────────────────────────────────────────────────

function AuthForm({ onAuth }: { onAuth: (session: Session) => void }) {
  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);
    const result = mode === 'login' ? login(username, password) : register(username, password);
    setLoading(false);
    if ('error' in result) {
      setError(result.error);
    } else {
      onAuth(result);
    }
  }

  return (
    <div className="flex-1 flex items-center justify-center bg-gray-50">
      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8 w-full max-w-sm">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-red-800">Senior Sales</h2>
          <p className="text-sm text-gray-500 mt-1">Sign in to access your messages</p>
        </div>

        {/* Tab switcher */}
        <div className="flex border border-gray-200 rounded-lg overflow-hidden mb-6">
          <button
            type="button"
            onClick={() => { setMode('login'); setError(''); }}
            className={`flex-1 py-2 text-sm font-semibold transition-colors ${
              mode === 'login' ? 'bg-red-800 text-white' : 'text-gray-500 hover:bg-gray-50'
            }`}
          >
            Log In
          </button>
          <button
            type="button"
            onClick={() => { setMode('register'); setError(''); }}
            className={`flex-1 py-2 text-sm font-semibold transition-colors ${
              mode === 'register' ? 'bg-red-800 text-white' : 'text-gray-500 hover:bg-gray-50'
            }`}
          >
            Create Account
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1">Username</label>
            <input
              type="text"
              value={username}
              onChange={e => setUsername(e.target.value)}
              placeholder="Enter your username"
              autoFocus
              className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-red-800 transition-colors"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-red-800 transition-colors"
            />
          </div>

          {error && (
            <p className="text-xs text-red-600 font-medium">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading || !username.trim() || !password}
            className="w-full bg-red-800 text-white font-bold py-2.5 rounded-lg text-sm hover:bg-red-900 transition-colors disabled:opacity-40"
          >
            {mode === 'login' ? 'Log In' : 'Create Account'}
          </button>
        </form>

        {mode === 'register' && (
          <p className="text-xs text-gray-400 text-center mt-4">
            Min. 3 characters for username, 6 for password
          </p>
        )}

        <div className="mt-5 pt-4 border-t border-gray-100">
          <p className="text-xs text-gray-400 text-center font-medium mb-1">Demo accounts (password: password123)</p>
          <div className="flex justify-center gap-3">
            {['Gordon', 'Sarah', 'Mike'].map(name => (
              <button
                key={name}
                type="button"
                onClick={() => { setUsername(name); setPassword('password123'); setMode('login'); }}
                className="text-xs text-red-800 font-semibold hover:underline"
              >
                {name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function MessagesClient() {
  const [session, setSession] = useState<Session | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [users, setUsers] = useState<StoredUser[]>([]);
  const [chats, setChats] = useState<Chats>({});
  const [activeUserId, setActiveUserId] = useState<string | null>(null);
  const [inputText, setInputText] = useState('');
  const [tab, setTab] = useState<'all' | 'unread'>('all');
  const [hoveredMsgId, setHoveredMsgId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Initial load from localStorage (deferred: localStorage + react-hooks/set-state-in-effect)
  useEffect(() => {
    queueMicrotask(() => {
      const s = getSession();
      setSession(s);
      if (s) {
        setUsers(getStoredUsers().filter(u => u.id !== s.userId));
        const raw = localStorage.getItem('senior-sales-chats');
        if (raw) {
          try { setChats(JSON.parse(raw)); } catch { /* ignore */ }
        } else {
          const seed = buildSeedChats();
          setChats(seed);
          localStorage.setItem('senior-sales-chats', JSON.stringify(seed));
        }
      }
      setLoaded(true);
    });
  }, []);

  // Persist chats on every change (only when logged in)
  useEffect(() => {
    if (!loaded || !session) return;
    localStorage.setItem('senior-sales-chats', JSON.stringify(chats));
  }, [chats, loaded, session]);

  // Scroll to bottom when active conversation messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chats, activeUserId]);

  // Focus input when selecting a conversation
  useEffect(() => {
    if (activeUserId) inputRef.current?.focus();
  }, [activeUserId]);

  function handleAuth(s: Session) {
    setSession(s);
    setUsers(getStoredUsers().filter(u => u.id !== s.userId));
    const raw = localStorage.getItem('senior-sales-chats');
    if (raw) {
      try { setChats(JSON.parse(raw)); } catch { /* ignore */ }
    } else {
      const seed = buildSeedChats();
      setChats(seed);
      localStorage.setItem('senior-sales-chats', JSON.stringify(seed));
    }
  }

  function handleLogout() {
    logout();
    setSession(null);
    setActiveUserId(null);
    setUsers([]);
    setInputText('');
  }

  function sendMessage() {
    if (!inputText.trim() || !activeUserId || !session) return;
    const cid = convId(session.userId, activeUserId);
    const newMsg: Message = {
      id: `m${Date.now()}`,
      text: inputText.trim(),
      senderId: session.userId,
      timestamp: Date.now(),
      liked: false,
    };
    setChats(prev => ({ ...prev, [cid]: [...(prev[cid] ?? []), newMsg] }));
    setInputText('');
  }

  function toggleLike(cid: string, msgId: string) {
    setChats(prev => ({
      ...prev,
      [cid]: (prev[cid] ?? []).map(m => (m.id === msgId ? { ...m, liked: !m.liked } : m)),
    }));
  }

  if (!loaded) {
    return <div className="flex-1 flex items-center justify-center text-gray-400 text-sm">Loading…</div>;
  }

  if (!session) {
    return <AuthForm onAuth={handleAuth} />;
  }

  const activeUser = users.find(u => u.id === activeUserId) ?? null;
  const activeCid = activeUser ? convId(session.userId, activeUser.id) : null;
  const activeMessages = activeCid ? (chats[activeCid] ?? []) : [];

  const displayedUsers =
    tab === 'unread'
      ? users.filter(u => {
          const msgs = chats[convId(session.userId, u.id)] ?? [];
          const last = msgs[msgs.length - 1];
          return last && last.senderId !== session.userId;
        })
      : users;

  return (
    <div className="flex flex-1 overflow-hidden border-t border-gray-200">
      {/* LEFT: Sidebar */}
      <div className="w-80 border-r border-gray-200 flex flex-col shrink-0">
        {/* Logged-in user + logout */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 bg-gray-50">
          <div className="flex items-center gap-2">
            <Avatar username={session.username} color={session.color} size={28} />
            <span className="text-sm font-semibold text-gray-800">{session.username}</span>
          </div>
          <button
            onClick={handleLogout}
            className="text-xs text-gray-400 hover:text-red-800 font-medium transition-colors"
          >
            Sign out
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-200">
          <button
            onClick={() => setTab('all')}
            className={`flex-1 py-3 text-sm font-semibold transition-colors ${
              tab === 'all' ? 'border-b-2 border-red-800 text-red-800' : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            All Chats
          </button>
          <button
            onClick={() => setTab('unread')}
            className={`flex-1 py-3 text-sm font-semibold transition-colors ${
              tab === 'unread' ? 'border-b-2 border-red-800 text-red-800' : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Unread
          </button>
        </div>

        {/* User / conversation list */}
        <div className="flex-1 overflow-y-auto">
          {displayedUsers.length === 0 && (
            <p className="text-center text-sm text-gray-400 mt-8 px-4">No chats here</p>
          )}
          {displayedUsers.map(u => {
            const cid = convId(session.userId, u.id);
            const msgs = chats[cid] ?? [];
            const lastMsg = msgs[msgs.length - 1];
            const isUnread = lastMsg?.senderId !== session.userId;
            const isActive = u.id === activeUserId;

            return (
              <button
                key={u.id}
                onClick={() => setActiveUserId(u.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-red-50 transition-colors ${
                  isActive ? 'bg-red-50' : ''
                }`}
              >
                <Avatar username={u.username} color={u.color} />
                <div className="flex-1 min-w-0 text-left">
                  <div className="flex justify-between items-center mb-0.5">
                    <span className={`text-sm ${isUnread && lastMsg ? 'font-bold text-gray-900' : 'font-medium text-gray-700'}`}>
                      {u.username}
                    </span>
                    {lastMsg && (
                      <span className="text-xs text-gray-400 shrink-0 ml-2">{formatTime(lastMsg.timestamp)}</span>
                    )}
                  </div>
                  <div className="flex items-center gap-1.5">
                    {lastMsg ? (
                      <p className={`text-xs truncate ${isUnread ? 'font-semibold text-gray-800' : 'text-gray-500'}`}>
                        {lastMsg.senderId === session.userId ? 'You: ' : ''}{lastMsg.text}
                      </p>
                    ) : (
                      <p className="text-xs text-gray-400 italic">No messages yet</p>
                    )}
                    {isUnread && lastMsg && (
                      <span className="w-2 h-2 rounded-full bg-red-800 shrink-0" />
                    )}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* RIGHT: Chat panel */}
      {activeUser && activeCid ? (
        <div className="flex-1 flex flex-col min-w-0">
          {/* Chat header */}
          <div className="flex items-center gap-3 px-6 py-3 border-b border-gray-200 shrink-0">
            <Avatar username={activeUser.username} color={activeUser.color} size={44} />
            <div>
              <p className="font-bold text-gray-900">{activeUser.username}</p>
              <p className="text-xs text-green-500 font-medium">Active now</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-6 py-4 space-y-3">
            {activeMessages.length === 0 && (
              <p className="text-center text-sm text-gray-400 mt-8">
                Start the convo with {activeUser.username}!
              </p>
            )}
            {activeMessages.map(msg => {
              const isMe = msg.senderId === session.userId;
              return (
                <div
                  key={msg.id}
                  className={`flex flex-col ${isMe ? 'items-end' : 'items-start'}`}
                  onMouseEnter={() => setHoveredMsgId(msg.id)}
                  onMouseLeave={() => setHoveredMsgId(null)}
                >
                  <div className={`flex items-center gap-2 ${isMe ? 'flex-row-reverse' : 'flex-row'}`}>
                    {!isMe && <Avatar username={activeUser.username} color={activeUser.color} size={28} />}

                    <div
                      className={`max-w-xs px-4 py-2.5 rounded-2xl text-sm leading-snug ${
                        isMe
                          ? 'bg-red-800 text-white rounded-br-sm'
                          : 'bg-gray-100 text-gray-900 rounded-bl-sm'
                      }`}
                    >
                      {msg.text}
                    </div>

                    {/* Like button on hover */}
                    <button
                      onClick={() => toggleLike(activeCid, msg.id)}
                      className={`text-base transition-all ${
                        hoveredMsgId === msg.id
                          ? 'opacity-100'
                          : 'opacity-0 pointer-events-none'
                      } ${msg.liked ? 'text-red-500' : 'text-gray-300 hover:text-red-400'}`}
                      aria-label="Like message"
                    >
                      ♥
                    </button>
                  </div>

                  {/* Liked indicator */}
                  {msg.liked && (
                    <span className={`text-xs mt-0.5 ${isMe ? 'mr-8' : 'ml-9'}`}>❤️</span>
                  )}

                  {/* Timestamp on hover */}
                  {hoveredMsgId === msg.id && (
                    <span className={`text-xs text-gray-400 mt-1 ${isMe ? 'mr-8' : 'ml-9'}`}>
                      {formatTime(msg.timestamp)}
                    </span>
                  )}
                </div>
              );
            })}
            <div ref={messagesEndRef} />
          </div>

          {/* Input bar */}
          <div className="flex items-center gap-3 px-6 py-4 border-t border-gray-200 shrink-0">
            <input
              ref={inputRef}
              type="text"
              value={inputText}
              onChange={e => setInputText(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && sendMessage()}
              placeholder={`Message ${activeUser.username}…`}
              className="flex-1 border border-gray-300 rounded-full px-4 py-2.5 text-sm outline-none focus:border-red-800 transition-colors"
            />
            <button
              onClick={sendMessage}
              disabled={!inputText.trim()}
              className="text-red-800 font-bold text-sm disabled:opacity-30 hover:opacity-70 transition-opacity px-1"
            >
              Send
            </button>
          </div>
        </div>
      ) : (
        <div className="flex-1 flex flex-col items-center justify-center text-gray-400 gap-3">
          <div className="text-6xl">💬</div>
          <p className="text-lg font-semibold text-gray-600">Your Messages</p>
          <p className="text-sm">Select a person to start chatting</p>
        </div>
      )}
    </div>
  );
}
