export type Stat = {
  id: string;
  title: string;
  value: string;
  trend?: string;
};

export type Activity = {
  id: string;
  event: string;
  actor: string;
  timestamp: string;
  status: 'success' | 'warning' | 'info';
};

export type ApiKey = {
  id: string;
  name: string;
  prefix: string;
  createdAt: string;
  status: 'active' | 'revoked';
};
