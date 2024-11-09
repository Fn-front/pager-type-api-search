export interface PaginationRequest {
  id: string;
  page: number;
}

export interface DataItem {
  title: string;
  text: string;
}

export interface PaginatedResponse {
  data: DataItem[];
  page: number;
  totalPages: number;
}
