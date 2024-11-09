import { NextResponse, NextRequest } from 'next/server';
import type {
  // PaginationRequest,
  PaginatedResponse,
  DataItem,
} from '@/functions/types';

const ITEMS_PER_PAGE = 10;
const TOTAL_ITEMS = 100;

// サンプルデータを生成する関数
function generateSampleData(): DataItem[] {
  return Array.from({ length: TOTAL_ITEMS }, (_, index) => ({
    id: `${index}`,
    title: `タイトル ${index + 1}`,
    text: `サンプルアイテム No.${index + 1}`,
  }));
}

export async function POST(request: NextRequest) {
  try {
    // リクエストボディを取得
    const { id, page } = await request.json();

    if (!id) {
      throw new Error('ID is required');
    }

    // Validate token if needed
    // const authHeader = request.headers.get('Authorization');
    // if (!authHeader?.startsWith('Bearer ')) {
    //   throw new Error('Token is missing');
    // }

    const allData = generateSampleData();
    const startIndex = (page - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const paginatedData = allData.slice(startIndex, endIndex);
    const totalPages = Math.ceil(TOTAL_ITEMS / ITEMS_PER_PAGE);

    const response: PaginatedResponse = {
      data: paginatedData,
      page: page,
      totalPages,
    };

    return NextResponse.json(response);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : 'Unknown error occurred';
    return NextResponse.json({ error: `Error: ${message}` }, { status: 401 });
  }
}
