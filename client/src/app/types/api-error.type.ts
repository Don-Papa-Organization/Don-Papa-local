export interface ApiError {
  success: false;
  message: string;
  timestamp: string;
  status?: number;
  error?: unknown;
}
