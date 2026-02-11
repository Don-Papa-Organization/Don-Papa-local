export interface ApiResponseDto<T> {
  success: boolean;
  data: T | null;
  message: string;
  timestamp: string;
}