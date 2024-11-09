import { NextResponse } from 'next/server';
import type {
  PaginationRequest,
  PaginatedResponse,
  DataItem,
} from '@/functions/types';

const ITEMS_PER_PAGE = 10;
const TOTAL_ITEMS = 100;

// サンプルデータを生成する関数
function generateSampleData(): DataItem[] {
  return Array.from({ length: TOTAL_ITEMS }, (_, index) => ({
    title: `タイトル ${index + 1}`,
    text: `サンプルアイテム No.${index + 1}`,
  }));
}

export async function POST(request: Request) {
  try {
    const body: PaginationRequest = await request.json();

    // Validate token if needed
    // const authHeader = request.headers.get('Authorization');
    // if (!authHeader?.startsWith('Bearer ')) {
    //   throw new Error('Token is missing');
    // }

    // 全データを生成
    const allData = generateSampleData();

    // ページネーション用のデータを切り出す
    const startIndex = (body.page - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const paginatedData = allData.slice(startIndex, endIndex);

    // 総ページ数を計算
    const totalPages = Math.ceil(TOTAL_ITEMS / ITEMS_PER_PAGE);

    const response: PaginatedResponse = {
      data: paginatedData,
      page: body.page,
      totalPages,
    };

    return NextResponse.json(response);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : 'Unknown error occurred';
    return NextResponse.json({ error: `Error: ${message}` }, { status: 401 });
  }
}
